import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateWatchList = ({children}) => {

    const {user, loading} = useContext(AuthContext)

    if(user){
        return children
    }
    return (

        <Navigate to='/auth/login' state={{ from: location }} replace></Navigate>
    );
};

export default PrivateWatchList;