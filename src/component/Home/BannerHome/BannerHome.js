import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../image/75327-ecommerce-bnw.gif'

const BannerHome = () => {
  return (
    <div>
      <section className="">
      <section className="bg-gradient-to-r from-white to-rose-300 rounded-2xl shadow-2xl">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={img} alt="" className="object-contain h-72 rounded-xl sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-4xl font-bold leading-none sm:text-6xl">Welcome To <br/>
       <span className='text-rose-400 text-3xl lg:text-4xl font-bold'>Binimoy.Com</span>
			</h1>
			<p className="mt-6 mb-8 text-xl font-semibold sm:mb-12">We Privides You 4 Catagoris Of Phones 
				
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<Link to='/signup' className="px-8 py-3 text-lg font-semibold rounded-xl
         dark:bg-pink-400 text-white">Join Now</Link>
				<Link to='/about' className="px-8 py-3 text-lg text-white font-semibold border  bg-sky-300 
        rounded-xl dark:border-gray-100">About Us</Link>
			</div>
		</div>
	</div>
</section>
	
</section>
    </div>
  );
};

export default BannerHome;