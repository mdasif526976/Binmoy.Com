import React from 'react';
import { FaUsers } from 'react-icons/fa';
const AdminPage = () => {
    return (
        <div className='m-8'>
            {/*  card section  */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
              
              <div className=' w-80 rounded-md py-5 border border-rose-800 '>
                 <div className='flex items-center justify-around '>
                    <div className='flex flex-col'>
                    <h1 className='text-5xl font-semibold'>s</h1>
                    <h1 className='font-normal text-xl'>Users</h1>
                    </div>
                    <FaUsers className='w-20 h-16 text-rose-400'/>
                 </div>
            
              </div>
              <div className=' w-80 rounded-md py-5 border border-rose-800 '>
                 <div className='flex items-center justify-around '>
                    <div className='flex flex-col'>
                    <h1 className='text-5xl font-semibold'>s</h1>
                    <h1 className='font-normal text-xl'>Users</h1>
                    </div>
                    <FaUsers className='w-20 h-16 text-rose-400'/>
                 </div>
            
              </div>
              <div className=' w-80 rounded-md py-5 border border-rose-800 '>
                 <div className='flex items-center justify-around '>
                    <div className='flex flex-col'>
                    <h1 className='text-5xl font-semibold'>s</h1>
                    <h1 className='font-normal text-xl'>Users</h1>
                    </div>
                    <FaUsers className='w-20 h-16 text-rose-400'/>
                 </div>
            
              </div>
             
            </div>
        </div>
    );
};

export default AdminPage;