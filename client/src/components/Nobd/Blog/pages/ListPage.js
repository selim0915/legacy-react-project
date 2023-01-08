import BlogList from "../componets/BlogList";

const ListPage = () => {
    return(
        <>
            <div className="d-flex justify-content-between">
                <h1 className="mb-3">
                    Blogs
                </h1>
            </div>
            <BlogList />
        </>
    )
}
export default ListPage;