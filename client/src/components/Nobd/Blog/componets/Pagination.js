import prototypes from "prop-types";

// currentPage : Pagination에 활성화 될 페이지
// numberOfPages : 전체 게시글 겟수
// onClick : currentPage를 구하기 위해 page 파라미터 계산하는 함수
// limit : 한번에 보여줄 게시글 갯수
const Pagination = ({ currentPage, numberOfPages, onClick, limit }) => {
    const curentSet = Math.ceil(currentPage/limit); // limit 단위의 현재 nav 값(전체게시글:7, limt:5 => 1 or 2 선택한 nav 값)// Math.ceil: 올림
    const lastSet = Math.ceil(numberOfPages/limit); // limit 단위의 전체 nav 값(전체게시글:7, limt:5 => 2)

    const startPage = limit * (curentSet-1) + 1; // nav에 시작 값 계산
    const numberOfPagesForSet = curentSet === lastSet ? numberOfPages%limit : limit; // nav에 종료 값 (5개씩 조회에 3개인경우는 3까지만)

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center mt-5">
                {curentSet !== 1 &&
                    <li className="page-item">
                        <div 
                            className="page-link cursor-pointer"
                            onClick={() => onClick(startPage - limit)}
                        >이전</div>
                    </li>
                }
                {Array(numberOfPagesForSet).fill(startPage) // filt() 시작 값
                    .map((value, index) => value+index)
                    .map((pageNumber) => {
                        return  (
                            <li 
                                key={pageNumber}
                                className={`page-item ${currentPage === pageNumber ? 'active' : ''}`}>
                                <div 
                                    className="page-link cursor-pointer"
                                    onClick={() => {
                                            onClick(pageNumber);
                                        }
                                    }
                                >{pageNumber}</div>
                            </li>
                        )
                    })
                }
                {curentSet !== lastSet &&
                    <li className="page-item">
                        <div 
                            className="page-link cursor-pointer"
                            onClick={() => onClick(startPage + limit)}
                        >다음</div>
                    </li>
                }
            </ul>
        </nav>
    )
}

Pagination.prototypes ={
    currentPage: prototypes.number,
    numberOfPages: prototypes.number.isRequired,
    onClick: prototypes.func.isRequired,
    limit: prototypes.number,
}

Pagination.defaultProps = {
    currentPage: 1,
    limit: 5
}
export default Pagination;