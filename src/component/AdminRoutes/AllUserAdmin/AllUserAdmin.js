import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { UserCircleIcon } from '@heroicons/react/24/solid'
import UseTitle from '../../../utilities/hooks/useTittle';
import Spainer from '../../../utilities/Spainer/Spainer';
import { toast } from 'react-hot-toast';

const AllUserAdmin = () => {
   UseTitle(' All Users | Admin')
    const {data:users=[],isLoading,refetch} = useQuery({
      queryKey:['users'],
      queryFn:async()=>{
          const res = await fetch('https://server-sites.vercel.app/users',{
            headers:{
               'content-type':'application/json',
               authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
          });
          const data = res.json();
          return data;
      }
      
    })
    if(isLoading){
      return <Spainer></Spainer>
    }
    const deleteUser=(data)=>{
        console.log(data)
        fetch(`https://server-sites.vercel.app/delete/user/${data}`,{
          method:'Delete',
          headers:{
             'content-type':'application/json',
             authorization: `bearer ${localStorage.getItem('accessToken')}`
          }
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.deletedCount > 0) {
                refetch()
                toast.success('Delete Successful')

            }
        })}
   return (
      <div>
         <h1 className='text-2xl font-bold'>Welcome To Admin</h1> 
         <table className="table w-full">
            <thead>
                <tr>
            <th></th>
            <th>Photo</th>
        <th>Name</th>
         <th>Email</th>
         <th>Action</th>
            </tr>
            </thead>
         <tbody>
            {
                users.map((user,i)=><tr key={user._id} className="hover">
                   <th>{i+1}</th>
                   <td>{<UserCircleIcon className='w-8 h-8 text-red-200'></UserCircleIcon>}</td>
                   <td>{user.name}</td>
                   <td>{user.email}</td>
       <td><button onClick={()=>deleteUser(user._id)} className='btn text-white btn-error'>Delete User</button></td>
                   </tr>

               )
            }
            </tbody>
       </table>
          
      </div>
   );
};

export default AllUserAdmin; 