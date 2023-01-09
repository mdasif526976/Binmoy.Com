import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { UserCircleIcon } from '@heroicons/react/24/solid'
import UseTitle from '../../../utilities/hooks/useTittle';
import Spainer from '../../../utilities/Spainer/Spainer';
import { toast } from 'react-hot-toast';

const ReportProduct = () => {
   UseTitle(' All Users | Admin')
    const {data:products=[],isLoading,refetch} = useQuery({
      queryKey:['reportProduct'],
      queryFn:async()=>{
          const res = await fetch('https://server-sites.vercel.app/reportIteam',{
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

    const removeProduct=(data)=>{
        console.log(data)
        fetch(`https://server-sites.vercel.app/product/delete/${data}`,{
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
            <th>Photo</th>
        <th>Name</th>
         <th>Seller Email</th>
         <th>Action</th>
            </tr>
            </thead>
         <tbody>
            {
                products.map((product,i)=><tr key={product._id} className="hover">
                   <th>{i+1}</th>
                   <td><img className='w-14' src={product.img} alt=''></img></td>
                   <td><p>{product.brand} {product.model}</p></td>
                   <td>{product.email}</td>
       <td><button onClick={()=>removeProduct(product._id)} className='btn text-white btn-error'>Remove</button></td>
                   </tr>

               )
            }
            </tbody>
       </table>
          
      </div>
   );
};

export default ReportProduct; 