import React, { useContext } from 'react';
import { AuthContext } from '../../../Authprovider/Authprovider';
import dateFormat from "dateformat";
import { useQuery } from '@tanstack/react-query';


const AddProduct = () => {
    const {user,logOut} = useContext(AuthContext)
    const now = new Date();
    const date = dateFormat(now, "mmmm dS, yyyy");
    const {data:seller=[],isLoading} = useQuery({
       queryKey:['seller',user.email],
        queryFn:async()=>{
            const res = await fetch(`http://localhost:5000/users/findSeler/${user?.email}`,{
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
    
    return (
        <div className='bg-stone-50 m-2'>
        
            <div className='card w-96 p-7'>
            <h1 className='text-2xl font-bold pb-2'>Add A Product</h1>
                <form>
                        <div className="form-control w-full max-w-xs">
         <label className="label">
             <span className="label-text">What is your name?</span>
         </label>
         <input type="text" placeholder="Type here" disabled value={user.displayName}
          className="input input-bordered w-full max-w-xs" />
              </div>
                        <div className="form-control w-full max-w-xs">
         <label className="label">
             <span className="label-text">Select Your Brand</span>
         </label>
         <select className="select select-bordered w-full max-w-xs">
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
         <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
              </div>
            
              <div className="form-control w-full max-w-xs">
         <label className="label">
             <span className="label-text">Old Price</span>
         </label>
         <input type="text" placeholder="Type here" 
          className="input input-bordered w-full max-w-xs" />
              </div>

              <div className="form-control w-full max-w-xs">
         <label className="label">
             <span className="label-text">New Price</span>
         </label>
         <input type="text" placeholder="Type here" 
          className="input input-bordered w-full max-w-xs" />
              </div>

              <div className="form-control w-full max-w-xs">
         <label className="label">
             <span className="label-text">Location</span>
         </label>
         <input type="text" placeholder="Type here" 
          className="input input-bordered w-full max-w-xs" />
              </div>
              <input className='input input-bordered btn bg-rose-400 w-full max-w-xs mr-1 mt-3' type='submit' value='Add Product' />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;