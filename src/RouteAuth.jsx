import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


// AuthRoute is if the user didn't login mean go to login page
const AuthRoute = () => {
    const { token } = useSelector(state => state.user);
    return !token ? <Outlet /> : <Navigate to={"/"} />;
};

// PrivateRoute is if the user login mean go to home page
const PrivateRoute = () => {
    const { token } = useSelector(state => state.user);
    return token ? <Outlet /> : <Navigate to={"/login"} />;
};

// ProtectedRoute is role based login purpose
const ProtectedRoute = ({allowedRoles}) => {
    const { role } = useSelector(state => state.user);
    return allowedRoles.includes(role) ? <Outlet /> : <Navigate to="*" />;
};

export { AuthRoute, PrivateRoute,ProtectedRoute };

