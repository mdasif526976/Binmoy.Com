import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Authprovider/Authprovider';
import UseTitle from '../../utilities/hooks/useTittle';
import useToken from '../../utilities/hooks/UseToken';
const Login = () => {
  const {googleSign,setUser,loginUser} = useContext(AuthContext);
const {register,handleSubmit,formState:{errors}} = useForm();
 UseTitle('Login')
const location = useLocation();
const navigate = useNavigate();
const [loginEmail,setLoginEmail] = useState('')
const [token] = useToken(loginEmail)
const from = location.state?.from?.pathname || '/';

if(token){
  navigate(from,{replace:true})
  toast.success('login success')
}

const login =(data)=>{
    loginUser(data.email,data.password)
    .then(result=>{
      const user = result.user;
      setUser(user)
     setLoginEmail(user.email)
    })
    .catch(err=>console.log(err))

}
const googlelogin =()=>{
  googleSign()
	  .then(result=>{
		const user = result.user; 
		setUser(user);
		console.log(user)
   setLoginEmail(user.email)
	  })
	  .catch(err=> console.log(err))
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
            <p className="label p-0 m-0 hover:underline">Forgot password?</p>
          </label>
        </div>
        <div className="form-control mt-5">
          <input type='submit' className="bg-rose-400 btn" value='Login'/>
        </div>
        <div>
          <p>No have a account ? <Link to='/signup' className='hover:underline'>SignUp Now</Link>  </p>
        </div>
        </form>
        <div className="divider">OR</div>
        <button onClick={googlelogin} className='bg-rose-400 w-full p-3 text-white hover:bg-white 
        hover:text-rose-400 hover:border-gray-500 rounded-lg'>Continue With Google 
        </button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;