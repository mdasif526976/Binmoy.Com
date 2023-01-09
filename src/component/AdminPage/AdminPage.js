import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import UseTitle from '../../utilities/hooks/useTittle';
import Spainer from '../../utilities/Spainer/Spainer';

const AdminPage = () => {
   UseTitle('AllSeller | Admin')
    const {data:users=[],isLoading,refetch} = useQuery({
      queryKey:['users'],
      queryFn:async()=>{
          const res = await fetch('https://server-sites.vercel.app/seller',{
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
    console.log(users)
    const verifedSeller =(data)=>{
      fetch(`https://server-sites.vercel.app/users/admin/${data}`,{
            method:'PUT',
            headers:{
               'content-type':'application/json',
               authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
          })
          .then(res=> res.json())
          .then(data=> {
        if(data.modifiedCount > 0){
           toast.success('Make Admin successfully')
           refetch()
        }else{
        
                toast.error('Fobiden access denied')
            
        }
        
        })
        .catch(err=> console.error(err))
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
       })
       
    }
   return (
      <div>
         <h1 className='text-2xl font-bold'>Welcome To Admin</h1> 
         <table className="table w-full">
            <thead>
                <tr>
            <th></th>
        <th>Name</th>
         <th>Email</th>
         <th>Account Type</th>
         <th>Account Status</th>
         <th>Delete</th>
            </tr>
            </thead>
         <tbody>
            {
                users.map((user,i)=><tr key={user._id} className="hover">
                   <th>{i+1}</th>
                   <td>{user.name}</td>
                   <td>{user.email}</td>
                   <td>{user.type}</td>
                   <td>{user?.account === "notVerified" ?
                       <button onClick={()=>verifedSeller(user._id)}
                       className='btn text-white btn-info'> Verify Now !</button> :
                   <p className='text-blue-500 text-xl tooltip' data-tip="Verifed"><CheckCircleIcon
                   className='w-8 h-8 text-blue-500'
                   ></CheckCircleIcon></p> 
                }</td>
                   <td><button
                    onClick={()=>deleteUser(user._id)}
                     className='btn text-white btn-error'>Delete Seller</button></td>
                   
                   </tr>

               )
            }
            </tbody>
       </table>
          
      </div>
   );
};

export default AdminPage; 