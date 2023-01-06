import PropTypes from "prop-types";

// const Card = (props) => {
// const Card = ({ title, body }) => { // 1 line과 같은 데이터 표출 가능

/*
 LisrPage.js 

 <Card key={post.id} title={post.title} body={post.body}>
    <div className="d-flex justify-content-between">
        <div>{post.title}</div>
        <div>btn</div>
    </div>
 </Card>

 Card 안에 있는 div절을 children으로 가져올 수 있음
 children 컨텐츠가 없을 땐 undifine
*/
const Card = ({ title, body, children }) => { // 위와 같은 데이터 표출 가능
    return(
        <div className="card mt-3">
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <div>{title}</div>
                    {children && <div>{children}</div>}
                </div>
            </div>
        </div>
    );
};

// 가져오는 데이터 타입 확인용으로도 사용 됨
// isRequired시 파라미터 안 넘어오면 스크립트 오류 남.
Card.prototype = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element,
};

// props 파라미터가 없을 때 기본값지정
/*
    <Card key={post.id} body={post.body}>
        <button>btn</button>
    </Card>

    PropTypes.string.isRequired 사용시 defaultProps 필요 없음과 같음
*/
Card.defaultProps = {
    // title: 'Title not data...',
    children: null,
};

export default Card;