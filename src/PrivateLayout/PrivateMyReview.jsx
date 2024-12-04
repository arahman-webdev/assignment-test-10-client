import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider';
import { Navigate } from 'react-router-dom';
const PrivateMyReview = ({ children }) => {

    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <div className="min-h-screen items-center justify-center flex">
            <span className="loading bg-[#0d81fd] loading-bars loading-lg"></span>
        </div>
    }
    if (user) {
        return children
    }
    return (

        <Navigate to='/auth/login'></Navigate>
    );
};

export default PrivateMyReview;