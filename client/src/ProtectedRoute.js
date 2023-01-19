import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const ProtectedRoute = ({ element }) => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    if(isLoggedIn){
        return <Navigate to="/blog/home" />
    }
    
    return element;
}

export default ProtectedRoute;