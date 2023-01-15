import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/authSlice";
import Navbar from "./Nobd/Blog/componets/Navbar";
import routes from "../routes";
import Toast from "./Nobd/Blog/componets/Toast";
import useToast from "../hooks/toast";
import ProtectedRoute from "../ProtectedRoute";
import LoadingSpinner from "./Nobd/Blog/componets/LoadingSpinner";

function RoutePage() {
    const location = useLocation();
    const pathname = location.pathname;

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
                {/* blog url 에서만 보여주는 화면 */}
                {pathname.includes('/blog') ? <Navbar /> : null}
                {pathname.includes('/blog') ? <Toast toasts={toasts} deleteToast={deleteToast} /> : null}

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

export default RoutePage;