import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Authprovider/Authprovider';

const Signup = () => {
	const {googleSign,setUser,SignUpWithEmailPassword} = useContext(AuthContext)
    const {handleSubmit,register,resetField,formState:{errors}} = useForm();
	const navigate = useNavigate();
    const Signup =(data)=>{
        console.log(data)
		SignUpWithEmailPassword(data.email,data.password)
		.then(result=>{
			const user = result.user;
			setUser(user)
		toast.success('ok')
		navigate('/')
		})
		.catch(err=>{
			toast.error(`${err}`)
		})
		
    }
	
	const googleSignup =()=>{
      googleSign()
	  .then(result=>{
		const user = result.user;
		setUser(user);
		console.log(user)
	  })
	  .catch(err=> console.log(err))
	}
    return (
        <div>
            <div className=" bg-rose-100 lg:px-80 lg:py-36">
            <div className="w-full  max-w-md px-5 py-8 space-y-3 bg-slate-50 rounded-2xl ">
	<h1 className="text-4xl font-bold text-center">Signup Now ! </h1>
	<form onSubmit={handleSubmit(Signup)}>
		<div className="space-y-1 text-sm">
			<label for="username" className="block text-[16px]">Enter your Name</label>
			<input
			{...register("name", { required:'Enter your Name'})}
			type="text"  id="username" placeholder="Enter your Name"
             className="w-full px-4 py-3 rounded-md border-gray-700
			   focus:border-violet-400" />
		</div>
		<div className="space-y-1 text-sm">
			<label for="username" className="block text-[16px]">Enter your Name</label>
			<input
			{...register("email", { required:'Enter your Email'})}
			type="email"  id="username" placeholder="Enter your Email"
             className="w-full px-4 py-3 rounded-md border-gray-700
			   focus:border-violet-400" />
		</div>
		<div className="space-y-1 text-sm">
			<label for="username" className="block text-[16px]">Choose your Option</label>
			<select 
			{...register("type")} defaultValue='User'
			className="select select-bordered w-full ">
         <option>User</option>
         <option>Seller</option>
     </select>
		</div>
		<div className="space-y-1 text-sm">
			<label for="password" className="block text-gray-40">Password</label>
			<input type="password"
               {...register("password", { required:'Enter your password',
               minLength:{value:6, message:'Your password must be at least 6 characters or longer'},
               pattern:{value:/(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/,
               message:'password must have uppercase,numbar,special-character strong !'}
             })}
             placeholder="Password"
             className="w-full px-4 py-3 mb-1 rounded-md border-gray-700 focus:border-violet-400" />
			 {errors.password && <p className='text-red-500 mb-1' role="alert">{errors.password?.message}.</p>}
		</div>
		<input type='submit' className="block w-full font-bold text-xl mt-2 p-3 text-center rounded-md text-white bg-rose-400" value='Sign in'/>
		</form>
	<div className="flex items-center pt-2 space-x-1">
		<div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
		<p className="px-3 text-sm text-gray-400">Login with social accounts</p>
		<div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
	</div>
	<div className="">
		<button onClick={googleSignup} className="px-3 py-2 rounded-md btn
		 btn-outline btn-success hover:text-white w-full">Continue With Google	
		</button>
		
	</div>
	<p className="text-xl font-sans text-center sm:px-6 ">Don't have an account? 
		<Link to='/login' className="hover:underline ">Sign up</Link>
	</p>
</div>
        </div>
        </div>
    );
};

export default Signup;