import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Authprovider/Authprovider';

const Navbar = () => {
  const {logOut,user} = useContext(AuthContext)
    const menu =
    <>
     <li><Link to='/' className='font-normal text-xl hover:bg-rose-500 hover:text-white rounded-md '>Home</Link></li>
   
     <li><Link to='/blog' className='font-normal text-xl hover:bg-rose-500 hover:text-white rounded-md '>Blog</Link></li>
     <li><Link to='' className='font-normal text-xl hover:bg-rose-500 hover:text-white rounded-md '>About US</Link></li>
     {user?.uid ?
     <>
     <li><Link to='/dashboard' className='font-normal text-xl hover:bg-rose-500 hover:text-white rounded-md '>Dashboard</Link></li>
      <li><button onClick={logOut} className='font-normal text-xl hover:bg-rose-500
      hover:text-white rounded-md '>Logout</button></li>
      </>:
      <>
      <li><Link to='/login' className='font-normal text-xl hover:bg-rose-500 hover:text-white rounded-md '>Login</Link></li>
      <li><Link to='/signup' className='font-normal text-xl hover:bg-rose-500 hover:text-white rounded-md '>SignUp</Link></li>
      </> 
     }
     
     

    </>
    
    
    return (
        <div>
            <div className="navbar bg-slate-50">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 
      p-2 shadow bg-base-100 rounded-box w-52">
        {menu}
       </ul>
    </div>
    <Link className="bg-rose-400 p-4 font-bold text-white rounded-md text-xl">Binmoy.Com</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      {menu}
    </ul>
  </div>
 </div>
        </div>
    );
};

export default Navbar;