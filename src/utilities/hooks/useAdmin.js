import { useEffect, useState } from 'react';

const useAdmin = (email) => {
    const [isAdmin,setAdmin] = useState('');
    const [isAdminLoading,setAdminLoading] = useState(true);
    useEffect(()=>{
        if (email) {
            fetch(`http://localhost:5000/users/admin/${email}`)
            .then(res=>res.json())
            .then(data=> {
                setAdmin(data.isAdmin);
                setAdminLoading(false);
            })
        }
    },[email])
    return [isAdmin,isAdminLoading]
};

export default useAdmin;