import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Authprovider/Authprovider';
import Spainer from '../../utilities/Spainer/Spainer';

const SellerAllProduct = () => {
    const {logOut,user} = useContext(AuthContext);
    const [advertiseiteam,setAdvertiseIteam] = useState('');
    const {data:products=[],isLoading,refetch} = useQuery({
        queryKey:['seller'],
         queryFn:async()=>{
             const res = await fetch(`http://localhost:5000/products/seller/${user?.email}`,{
                 headers:{
                     authorization:`bearer ${localStorage.getItem('accessToken')}`
                 }
             })
             if (res.status === 401 || res.status === 403) {
                 return logOut();
                 
             }
             const data = res.json();
             return data;          
         }
     })
     if (isLoading) {
         return <Spainer></Spainer>
     }
     const advertise=(data)=>{
        fetch()
     }
     const deleteOne=(data)=>{
        fetch(`http://localhost:5000/product/delete/${data}`,{
            method:'DELETE',
            headers:{
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
           })
           .then(res=> res.json())
           .then(data=> {
            console.log(data)
            if(data.deletedCount > 0){
                toast.success(' Delete Success')
                refetch()
            }
           })
     }
    return (
        <div>
            <h1 className='text-2xl font-semibold '>My All products</h1>
            <div className="overflow-x-auto">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Photo</th>
        <th>Advertise</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
       {
        products.map((product,i)=> <tr key={product._id}>
            <th>{i+1}</th>
            <td>{product.brand} {product.model}</td>
            <td><div className="avatar">
  <div className="w-24 rounded">
    <img src={product.img} alt='' />
  </div>
</div></td>
            <td><button onClick={()=>advertise(product)} className='btn btn-primary'>Advertise</button></td>
            <td><button onClick={()=>deleteOne(product._id)} className='btn btn-error'>Delete</button></td>
        
          </tr>)
       }
     
      
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default SellerAllProduct;