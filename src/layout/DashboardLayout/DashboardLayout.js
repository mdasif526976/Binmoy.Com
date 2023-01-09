import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../../shered/Navbar';
import { FaBars } from 'react-icons/fa';
import { AuthContext } from '../../Authprovider/Authprovider';
import useAdmin from '../../utilities/hooks/useAdmin';
import useSeller from '../../utilities/hooks/useSeller';

const DashboardLayout = () => {
    const {user}= useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    console.log(user.email)
    const [isSeller] = useSeller(user?.email);
    return (
        <div>
        <Navbar></Navbar>
            <div className="drawer drawer-mobile">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
  <label htmlFor="my-drawer" className="drawer-button 
  lg:hidden text-xl mx-3 flex items-center"> <FaBars></FaBars>Dashboard</label>

       <Outlet></Outlet>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
    { isAdmin &&
    <>
       <li><Link to='/dashboard/admin'>All Seller</Link></li>
       <li><Link to='/dashboard/admin/users'>All Users</Link></li>
       <li><Link to='/dashboard/admin/report'>Admin Reported Iteams</Link></li>
     </>}
    { isSeller &&
    <>
      <li><Link to='/dashboard/seller/addProduct'>Add A Product</Link></li> 
      <li><Link to='/dashboard/seller/allProduct'>All Product</Link></li> 
     </>}
     <li><Link to='/dashboard'>My Cart</Link></li> 
   
      
      
    </ul>
  </div>
</div>
        </div>
    );
};

export default DashboardLayout;