import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Authprovider/Authprovider';
import useAdmin from '../../utilities/hooks/useAdmin';
import Spainer from '../../utilities/Spainer/Spainer';

const AdminProtect = ({children}) => {
    const {user,loading}  = useContext(AuthContext);
    const [isAdmin,isAdminLoading] = useAdmin(user?.email)
    const location = useLocation();
       
    if(loading || isAdminLoading){
        return <Spainer></Spainer> ;
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default AdminProtect;