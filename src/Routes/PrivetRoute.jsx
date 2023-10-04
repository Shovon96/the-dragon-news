import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'

const PrivetRoute = ({children}) => {

    const {user,loading } = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <div className="flex justify-center items-start"><span className="loading loading-spinner text-accent"></span></div>
    }

    if(user) {
        return children;
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>;
    // return children
};

PrivetRoute.propTypes = {
    children: PropTypes.node
}

export default PrivetRoute;