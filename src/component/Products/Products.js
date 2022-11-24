import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../card/Card';
import { FaBars } from 'react-icons/fa';


const Products = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-6 gap-5 m-8 rounded-full'>
            {/* //  dibide two dimantion */}
            {/* for mobile screen  */}

            <div className="dropdown w-full mb-2 shadow-2xl lg:hidden relative dropdown-bottom">
                
                <label tabIndex={0} className="text-gray-500 left-2">
                <div className='flex items-center gap-1'>
                    Catagori<FaBars></FaBars>
                </div>
              
                </label>
     
     <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
     <li><Link className='text-white bg-gradient-to-r from-purple-400 to-sky-300 
                    rounded-lg mt-1 text-center font-normal text-xl'>Samsung</Link></li>
                    <li><Link className='text-white bg-gradient-to-r from-purple-400 to-sky-300  rounded-lg mt-1 text-center font-normal text-xl'>Realme</Link></li>
                    <li><Link className='text-white bg-gradient-to-r from-purple-400 to-sky-300 rounded-lg mt-1 text-center font-normal text-xl'>Oneplus</Link></li>
   </ul>
   </div>
               
            {/* For lg time  */}
            <div className='lg:col-span-2'>
               <div className='bg-gradient-to-l hidden lg:block from-rose-300 to-sky-300 p-5 rounded-lg'>
               <h1 className='font-bold text-gray-100 text-2xl mb-5 lg:block italic'>Our Best 3 Brand Mobiles Here</h1>
                <ul className="menu flex justify-around ">
                    <li><Link className='text-white bg-gradient-to-r from-purple-400 to-sky-300 
                    rounded-lg mt-1 text-center font-normal text-xl'>Samsung</Link></li>
                    <li><Link className='text-white bg-gradient-to-r from-purple-400 to-sky-300  rounded-lg mt-1 text-center font-normal text-xl'>Realme</Link></li>
                    <li><Link className='text-white bg-gradient-to-r from-purple-400 to-sky-300 rounded-lg mt-1 text-center font-normal text-xl'>Oneplus</Link></li>
                </ul>
               </div>
            </div>
            <div className='lg:col-span-4 p-5 rounded-lg bg-gradient-to-br from-sky-200 to-rose-200 '>
                   <h1> All Products Here</h1>
                   <Card></Card>
            </div>
        </div>
    );
};

export default Products;