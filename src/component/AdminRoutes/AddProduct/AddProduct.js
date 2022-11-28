import React, { useContext } from 'react';
import { AuthContext } from '../../../Authprovider/Authprovider';
import dateFormat from "dateformat";
import { useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Navigate } from 'react-router-dom';
import Spainer from '../../../utilities/Spainer/Spainer';


const AddProduct = () => {
    const {user,logOut} = useContext(AuthContext);
    const now = new Date();
    const date = dateFormat(now, "mmmm dS, yyyy");
    const {resetField, handleSubmit,register} = useForm();
    const imgbbKey = process.env.REACT_APP_ImggbbKey;
    const {data:seller=[],isLoading} = useQuery({
       queryKey:['seller',user.email],
        queryFn:async()=>{
            const res = await fetch(`https://server-sites.vercel.app/users/findSeler/${user?.email}`,{
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
           
    const addProduct=(data)=>{      
        const image = data.img[0];
        const fromData = new FormData();
        fromData.append('image', image);
       const url = `https://api.imgbb.com/1/upload?key=${imgbbKey}`
       fetch(url,{
        method: 'POST',
        body: fromData
      })
      .then(res=>res.json())
      .then(imgData=> {
        if(imgData.success){
            const product = {img:imgData.data.url, sellerName:seller.name,
                time:date, email:seller.email, account:seller.account,
    model:data.model,brand:data.brand,oldPrice:data.oldPrice,useTime:data.useTime,
    newPrice:data.newPrice,location:data.location         
            }       
            fetch('https://server-sites.vercel.app/product',{
                method:'POST',
                headers:{
                    'content-type': 'application/json',
                    authorization : `bearer ${localStorage.getItem('accessToken')}`
                },
                body:JSON.stringify(product)
            })
            .then(res=> res.json())
            .then(data=>{
                if(data.acknowledged){
            resetField("img") 
              resetField('model')
                    resetField("oldPrice")
                    resetField("newPrice")
                    resetField("location")
                    resetField("useTime")
                    toast.success('Product Add successfully')
                    // Navigate('/dashboard/seller/allProduct')
                }
            })
    }
})}
    return (
        <div className='bg-stone-50 m-2'>
        
            <div className='card w-96 p-7'>
            <h1 className='text-2xl font-bold pb-2'>Add A Product</h1>
                <form onSubmit={handleSubmit(addProduct)}>
                        <div className="form-control w-full max-w-xs">
         <label className="label">
             <span className="label-text">What is your Phone Model?</span>
         </label>
         <input type="text"  {...register("model",{required:true}) }
         placeholder="Type here" 
          className="input input-bordered w-full max-w-xs" />
              </div>
                        <div className="form-control w-full max-w-xs">
         <label className="label">
             <span className="label-text">Select Your Brand</span>
         </label>
         <select {...register("brand")} className="select select-bordered w-full max-w-xs">
         <option >Samsung</option>
         <option>Realme</option>
         <option>Oppo</option>
         <option>Oneplus</option>
      </select>
              </div>
                        <div className="form-control w-full max-w-xs">   
         <label className="label">
             <span className="label-text">Import product Image</span>
         </label>
         <input type="file" {...register("img",{required:true}) }
          className="file-input file-input-bordered w-full max-w-xs" />
              </div>
            
              <div className="form-control w-full max-w-xs">
         <label className="label">
             <span className="label-text">Old Price</span>
         </label>
         <input type="text"{...register("oldPrice",{required:true}) }
          placeholder="Type here" 
          className="input input-bordered w-full max-w-xs" />
              </div>

              <div className="form-control w-full max-w-xs">
         <label className="label">
             <span className="label-text">New Price</span>
         </label>
         <input type="text"{...register("newPrice",{required:true}) }
          placeholder="Type here" 
          className="input input-bordered w-full max-w-xs" />
              </div>

              <div className="form-control w-full max-w-xs">
         <label className="label">
             <span className="label-text">UseTime</span>
         </label>
         <input type="text"{...register("useTime",{required:true}) }
          placeholder="Type here" 
          className="input input-bordered w-full max-w-xs" />
              </div>
              <div className="form-control w-full max-w-xs">
         <label className="label">
             <span className="label-text">Location</span>
         </label>
         <input type="text"{...register("location",{required:true}) }
          placeholder="Type here" 
          className="input input-bordered w-full max-w-xs" />
              </div>
              <input className='input input-bordered btn bg-rose-400 w-full max-w-xs mr-1 mt-3' type='submit' value='Add Product' />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;