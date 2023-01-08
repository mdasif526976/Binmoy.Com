import React from 'react';
import BannerHome from './BannerHome/BannerHome';
import BannerHome2 from './BannerHome2/BannerHome2';
import Catagoris from '../Catagoris/Catagoris';
import Advatisement from '../Advatisement/Advatisement';
import UseTitle from '../../utilities/hooks/useTittle';

const Home = () => {
    UseTitle('Home')
    return (
        <div className='grid grid-cols-6 m-8 pt-5 gap-5 bg-slate-50'>
            <div className='lg:col-span-6 col-span-6'>
                <div className='grid grid-cols-1'>
                    <div className=''>
                        <BannerHome></BannerHome>
                    </div>
                    <div className='mx-2'>      <BannerHome2></BannerHome2>
                    </div>
                </div>
            </div>
            
           
            <div className='col-span-6'>
            <Advatisement></Advatisement>
            </div>
            <div className='col-span-6 mx-3 mt-3'>
            <Catagoris></Catagoris>
            </div>
        </div>
    );
};

export default Home;