import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./componets/Navbar";
import routes from "../../../routes";
import Toast from "./componets/Toast";
import useToast from "../../../hooks/toast";
import { useSelector } from "react-redux";

function Blog() {
    const toasts = useSelector((state) => state.toast.toasts);
    const [, deleteToast] = useToast();

    return (
        <Router>
            <div className="container">
                <Navbar />

                <Toast
                    toasts={toasts}
                    deleteToast={deleteToast}
                />
                <section className="sub_wrap">
                    <article className="s_cnt mp_pro_li ct1 mp_pro_li_admin">
                        <Switch>
                            {/* exact : 정확하게 매치되야 보여준다는 옵션 */}
                            {routes.map((route) => {
                                return <Route key={route.path} path={route.path} component={route.component} exact></Route>
                            })}
                        </Switch>
                    </article>
                </section>
            </div>
        </Router>
    )
}
export default Blog;