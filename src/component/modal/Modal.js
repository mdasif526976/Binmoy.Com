import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Authprovider/Authprovider';

const Modal = ({modalProduct,setproduct}) => {
    const {user} = useContext(AuthContext);
    const {handleSubmit,register} = useForm();
    const formSubmit = (data)=>{
        console.log(data);
    }
    return (
        <div>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" onClick={()=>setproduct(null)}
     className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
       <form onSubmit={handleSubmit(formSubmit)}>
       <div className="form-control w-full">
  <label className="label">
    <span className="label-text">Your name</span>
  </label>
  <input type="text" placeholder="Type here" value={user?.displayName}
  {...register('name')}
   className="input w-full mb-2" />
</div>
       <div className="form-control w-full">
  <label className="label">
    <span className="label-text">Your Choose</span>
  </label>
  <input type="text" placeholder="Type here"
    value={`${modalProduct?.brand} ${modalProduct?.model}`}
  {...register('phoneName')}
   className="input w-full mb-2" />
</div>
       <div className="form-control w-full">
  <label className="label">
    <span className="label-text">Your Email</span>
  </label>
  <input type="text" placeholder="Type here" value={user?.email}
  {...register('email')}
   className="input w-full mb-2" />
</div>
       <div className="form-control w-full">
  <label className="label">
    <span className="label-text">Your Price</span>
  </label>
  <input type="text" placeholder="Type here"  value={modalProduct?.newPrice}
  {...register('price')}
   className="input w-full mb-2" />
</div>
       <div className="form-control w-full">
  <label className="label">
    <span className="label-text">Your Phone Numbar</span>
  </label>
  <input type="text" placeholder="Type here"  {...register('phoneNumbar',{required:true})}
   className="input w-full mb-2" />
</div>
       <div className="form-control w-full">
  <label className="label">
    <span className="label-text">Enter Meeting Location</span>
  </label>
  <input type="text" placeholder="Type here" 
  {...register('userLocation',{required:true})}
   className="input w-full mb-2" />
</div>
 <input type="submit" className='btn w-full bg-rose-400' value="Submit now" />
       </form>
  </div>
</div>
        </div>
    );
};

export default Modal;