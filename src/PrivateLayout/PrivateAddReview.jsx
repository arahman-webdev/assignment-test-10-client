import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';

const PrivateAddReview = ({children}) => {

    const {user, loading} = useContext(AuthContext)

    const location = useLocation()
    
    if (loading) {
        return <div className="min-h-screen items-center justify-center flex">
            <span className="loading bg-[#0d81fd] loading-bars loading-lg"></span>
        </div>
    }
    
    if(user){
        return children
    }

    return (

        // <Navigate to='/auth/login' state={{ from: location }} replace></Navigate>
        <Navigate to="/auth/login" state={{ from: location }} replace />
    );
};

export default PrivateAddReview;