import React from 'react';
import { FaShoppingCart} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menu =<>
     <li><Link to='' className='font-normal text-xl hover:bg-rose-500 hover:text-white rounded-md '>Home</Link></li>
     <li><Link to='/product' className='font-normal text-xl hover:bg-rose-500 hover:text-white rounded-md '>Products</Link></li>
     <li><Link to='/login' className='font-normal text-xl hover:bg-rose-500 hover:text-white rounded-md '>Login</Link></li>
     <li><Link to='' className='font-normal text-xl hover:bg-rose-500 hover:text-white rounded-md '>SignUp</Link></li>
     <li><Link to='' className='font-normal text-xl hover:bg-rose-500 hover:text-white rounded-md '>Blog</Link></li>
     <li><Link to='' className='font-normal text-xl hover:bg-rose-500 hover:text-white rounded-md '>About US</Link></li>
     <li>
        <div className='relative'>
            <p className='bg-rose-400 px-1 absolute font-normal left-[39px] text-white top-2
             rounded-full'>0</p>
        <Link className=' font-normal w-4 text-xl'><FaShoppingCart></FaShoppingCart></Link>
          
        </div>
     </li>

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