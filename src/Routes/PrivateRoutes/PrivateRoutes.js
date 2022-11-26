import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Authprovider/Authprovider';
import Spainer from '../../utilities/Spainer/Spainer';

const PrivateRoutes = ({children}) => {
   const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <Spainer></Spainer>
    }
    if(user){
     return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default PrivateRoutes;