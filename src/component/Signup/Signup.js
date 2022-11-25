import React from 'react';
import { useForm } from 'react-hook-form';

const Signup = () => {
    const {handleSubmit,register,resetField,formState:{errors}} = useForm();
    const Signup =(data)=>{
        console.log(data)
    }
    return (
        <div>
            <div className="hero min-h-screen bg-rose-100">
  <div className="hero-content flex-col lg:flex-row-reverse">
  <form onSubmit={handleSubmit(Signup)}>
    <div className="text-center">
      <h1 className="text-4xl font-bold">SignUp now!</h1>
      <p className="py-5 text-xl"> Please SignUp & Join with Us</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
          {...register("email", { required:'Please Enter email.' })}
          type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
          {...register("password", { required:'Enter your password',
          minLength:{value:6, message:'Your password must be at least 6 characters or longer'},
          pattern:{value:/(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/,
          message:'password must have uppercase,numbar,special-character strong !'}
        })}
          type="text" placeholder="password" className="input input-bordered" />
           {errors.password && <p className='text-red-500 mb-1' role="alert">{errors.password?.message}.</p>}
          <label className="label">
            <p className="label p-0">Forgot password?</p>
          </label>
        </div>
        <div className="form-control mt-6">
          <input type='submit' value='Signup' className="btn bg-rose-400"/>
        </div>
      </div>
    </div>
    </form>
  </div>
</div>
        </div>
    );
};

export default Signup;