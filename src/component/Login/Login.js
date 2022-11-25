import React from 'react';
import { useForm } from 'react-hook-form';
const Login = () => {
const {register,handleSubmit,formState:{errors}} = useForm();
const login =(data)=>{
    console.log(data)
}
    return (
        <div>
            <div className="hero min-h-screen bg-rose-100">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center">
      <h1 className="text-4xl font-bold">Login now!</h1>
      <p className="px-5 text-xl font-normal">Please Login For Access Your Account </p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <form onSubmit={handleSubmit(login)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type=""
          {...register("email", { required:'Please Enter email.' })}
          placeholder="email" className="input input-bordered" />
        {errors.email && <p className='text-red-500' role="alert">{errors.email?.message}</p>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input  {...register("password",{required:true,minLength:{value:6, message:'Password must be 6 characters or longer '} })}
          type="text" 
          placeholder="password" className="input input-bordered" />
          {errors.password && <p className='text-red-500' role="alert">{errors.password?.message}</p>}
          <label className="label">
            <p className="label pt-0 hover:underline">Forgot password?</p>
          </label>
        </div>
        <div className="form-control mt-6">
          <input type='submit' className="bg-rose-400 btn" value='Login'/>
        </div>
        </form>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;