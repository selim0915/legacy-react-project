import BlogList from "../componets/BlogList";

const ListPage = () => {
    return(
        <>
            <div className="d-flex justify-content-between">
                <h1 className="mb-5">
                    Blog
                </h1>
            </div>
            <BlogList />
        </>
    )
}
export default ListPage;