import { Link } from "react-router-dom";
import BlogList from "../componets/BlogList";

const AdminPage = () => {
    return(
        <>
            <div className="d-flex justify-content-between">
                <h1 className="mb-3">
                    Admin Blogs
                </h1>
                <div>
                    <Link className="sch_bt2 wi_au" to="/blog/create">신규등록</Link>
                </div>
            </div>
            <BlogList isAdmin={true} />
        </>
    )
}
export default AdminPage;