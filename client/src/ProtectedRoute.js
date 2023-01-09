import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";

const ProtectedRoute = ({ component, path }) => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    if(isLoggedIn){
        return <Redirect to="/blog/home" />
    }
    
    return (
        <Route component={component} path={path} />
    );
}

export default ProtectedRoute;