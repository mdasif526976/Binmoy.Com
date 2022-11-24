import React from 'react';
import BannerHome from './BannerHome/BannerHome';
import BannerHome2 from './BannerHome2/BannerHome2';

const Home = () => {
    return (
        <div className='grid grid-cols-6 m-8 gap-5 bg-slate-50'>
            <div className='col-span-4'>
                <div className='grid grid-cols-1'>
                    <div>
                        <BannerHome></BannerHome>
                    </div>
                    <div>
                        <BannerHome2></BannerHome2>
                    </div>
                </div>
            </div>
            <div className='cols-span-2'>
                <div className="card w-96 bg-rose-300 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-white font-normal text-2xl">Welcome To Binmoy.Com</h2>
                        <div className="card-actions justify-around mt-4">
                            <button className="py-2 rounded-full px-6 bg-rose-500 text-white">Join Now</button>
                            <button className="py-2 rounded-full px-6 bg-white text-black hover:bg-white hover:text-rose-500 ">Login</button>
                        </div>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                         </div>
                </div>
            </div>
            <div className='col-span-6 bg-green-600'>
<h1>d;ldlfl</h1>
            </div>
        </div>
    );
};

export default Home;