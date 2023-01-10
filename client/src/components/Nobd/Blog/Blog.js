import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../store/authSlice";
import Navbar from "./componets/Navbar";
import routes from "../../../routes";
import Toast from "./componets/Toast";
import useToast from "../../../hooks/toast";
import ProtectedRoute from "../../../ProtectedRoute";
import LoadingSpinner from "./componets/LoadingSpinner";

function Blog() {
    const toasts = useSelector((state) => state.toast.toasts);
    const [, deleteToast] = useToast();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if(localStorage.getItem('isLoginIn')){  // isLoginIn라는 값이 있으면
            dispatch(login())
        }
        setLoading(false);
    }, []);

    if(loading) {
        return (
            <LoadingSpinner />
        );
    }

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
                                if(route.auth){
                                    return <ProtectedRoute 
                                        key={route.path} 
                                        path={route.path}
                                        component={route.component}
                                        exact
                                    />
                                }
                                return <Route 
                                            key={route.path} 
                                            path={route.path} 
                                            component={route.component} 
                                            exact
                                        />
                            })}
                        </Switch>
                    </article>
                </section>
            </div>
        </Router>
    )
}
export default Blog;