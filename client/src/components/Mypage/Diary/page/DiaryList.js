import DiaryForm from "../componets/DiaryForm";
import DiaryItem from "../componets/DiaryItem";

const DiaryList = () => {
    const diaryList = [
        {
            id: 1,
            author: "작성자",
            content: "11235412354123541235412354123541235412354123541235412354123541235412354123541235412354123541235412354123541235412354123541235412354123541235412354123541235412354123541235412354123541235412354123541235423541235412354123541235412354123541235412354123541235412354123541235412354123541235412354123541235411235412354123541235412354123541235412354123541235412354123541235412354123541235412354123541235412354123541235412354123541235412354123541235412354123541235412354123541235412354123541235412354123541235",
            emotion: "2",
            createdAt: new Date(),
        },
        {
            id: 2,
            author: "작성자2",
            content: "123542",
            emotion: "3",
            createdAt: new Date(),
        },
        {
            id: 3,
            author: "작성자3",
            content: "123542",
            emotion: "5",
            createdAt: new Date(),
        },
    ]

    return (
        <div>
            <h2 className="s_tit1">다이어리</h2>
            <div className="row">
                <div className="col" style={{"maxWidth": "400px"}}>
                    <DiaryForm />
                </div>
                <div className="col" style={{"height": "640px", "overflowY": "auto"}}>
                    <div className="text-secondary mb-2">전체 {diaryList.length}건</div>
                    <div>
                        {diaryList.map((item, idx) => (
                            <DiaryItem key={item.id} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}



export default DiaryList;