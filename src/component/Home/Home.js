import React from 'react';
import BannerHome from './BannerHome/BannerHome';
import BannerHome2 from './BannerHome2/BannerHome2';
import { FaUser } from 'react-icons/fa';
import Catagoris from '../Catagoris/Catagoris';
import Advatisement from '../Advatisement/Advatisement';

const Home = () => {
    return (
        <div className='grid grid-cols-6 m-8 gap-5 bg-slate-50'>
            <div className='lg:col-span-4 col-span-6'>
                <div className='grid grid-cols-1'>
                    <div>
                        <BannerHome></BannerHome>
                    </div>
                    <div>
                        <BannerHome2></BannerHome2>
                    </div>
                </div>
            </div>
            <div className='lg:cols-span-2'>
                <div className="card w-96 h-60 hidden lg:block bg-rose-300 shadow-xl">
                    <div className="card-body">
                        <FaUser className='mx-36 w-8 h-8  text-white'></FaUser>
                        <h2 className="text-center text-white font-normal text-2xl">Welcome To Binmoy.Com</h2>
                        <div className="card-actions justify-around mt-4">
                            <button className="py-2 rounded-full px-6 bg-rose-500 text-white">Join Now</button>
                            <button className="py-2 rounded-full px-6 bg-white text-black
                             hover:bg-white hover:text-rose-500 ">Explore Products </button>
                        </div>
                         </div>
                </div>
            </div>
            <div className='col-span-6 bg-green-600'>
            <Advatisement></Advatisement>
            </div>
            <div className='col-span-6 mx-3 mt-3'>
            <Catagoris></Catagoris>
            </div>
        </div>
    );
};

export default Home;