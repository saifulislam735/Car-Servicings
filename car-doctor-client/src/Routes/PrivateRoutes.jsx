//import React from 'react';

import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <span className="loading loading-spinner text-info"></span>
    }

    if (user?.email) {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
};

export default PrivateRoutes;