import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Authprovider/Authprovider';
import Spainer from '../../utilities/Spainer/Spainer';

const SellerAllProduct = () => {
    const {logOut,user} = useContext(AuthContext);
    const {data:products=[],isLoading,refetch} = useQuery({
        queryKey:['seller'],
         queryFn:async()=>{
             const res = await fetch(`https://server-sites.vercel.app/products/seller/${user?.email}`,{
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
        fetch(`https://server-sites.vercel.app/advertise/${data}`,{
            method:'PUT',
            headers:{
                'content-type':'appplication/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
           })
           .then(res=> res.json())
           .then(data=> {
            console.log(data)
            if(data.modifiedCount > 0){
                toast.success(' Advertise Success')
                refetch()
            }
           })
     }
     const deleteOne=(data)=>{
        fetch(`https://server-sites.vercel.app/product/delete/${data}`,{
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
            <td>
                {product.advertise ===true ?
                    <button onClick={()=>advertise(product._id)} className='btn btn-primary'>Advertise</button>
                : <h4 className='text-xl'>Advertised</h4> }</td>
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