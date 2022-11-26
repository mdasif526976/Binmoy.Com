import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../../shered/Navbar';
import { FaBars } from 'react-icons/fa';

const DashboardLayout = () => {
    return (
        <div>
        <Navbar></Navbar>
            <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
  <label htmlFor="my-drawer" className="drawer-button text-xl mx-3 flex items-center"> <FaBars></FaBars>Dashboard</label>

       <Outlet></Outlet>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
     
      <li><Link to='/dashboard/admin'>Admin Analitics</Link></li>
      <li><Link to='/dashboard/admin/addProduct'>Add A Product</Link></li>
      
      
    </ul>
  </div>
</div>
        </div>
    );
};

export default DashboardLayout;