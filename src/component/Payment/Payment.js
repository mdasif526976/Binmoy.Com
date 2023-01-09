import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useLoaderData } from 'react-router-dom';
import Checkout from '../Checkout/Checkout'
import UseTitle from '../../utilities/hooks/useTittle';

const Payment = () => {
    const data = useLoaderData();
    const {model,brand,img,price} = data;
    UseTitle(`Payment For | ${brand } ${model}`);
    
const stripePromise = loadStripe(process.env.REACT_APP_Stripe);
    const tax = price * 2 /100;
    let delivery = 85;
    const value = parseInt(price)
    const total = tax+85+value;
    console.log(total)
    return (
        <div>
            <h1 className='text-2xl font-normal'>Please Pay Now</h1>
            <div className='grid grid-cols-1 gap-3 lg:mx-5 mt-2 lg:grid-cols-2'>
              <div className='flex flex-col mx-12 lg:flex-row gap-4 lg:shadow-2xl'>
                 <img className='w-52 h-56' src={img} alt='loading'></img>
                 <div className='flex mt-2 flex-col text-left'>
                 <h1 className='text-2xl mb-5 font-semibold lg:pr-[58px]'>Name: {brand} {model}</h1>
                 <h1 className='text-2xl mb-5 font-semibold lg:pr-[58px]'>Model: {model}</h1>
                 <h1 className='text-2xl mb-5 font-semibold'>Brand: {brand}</h1>
                 <h1 className='text-2xl mb-5 font-semibold'>Price: {price}</h1>
                 </div>
              </div>
              <div>
       <div className='border-green-200 border-2 rounded'>
           <h1 className='font-normal text-xl'>Pay With <span
            className='font-bold text-3xl text-violet-800'
           >Stripe</span></h1>
           <div className='flex flex-col mx-12 text-left'>
   <p className='text-xl font-nolmal'>Product Price: <span className='font-bold'>{price}</span>$</p>
   <p className='text-xl font-nolmal'>Delivery Charge: <span className='font-bold'>{delivery}</span>$</p>
   <p className='text-xl font-nolmal'>Tax: <span className='font-bold'>{tax}</span>$</p>
   <p className='text-xl font-nolmal'>Total: <span className='font-bold'>{total}</span>$</p>
                    </div>
                    <Elements stripe={stripePromise}>
                    <Checkout
                        data={data} total={total}
                    />
                </Elements>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Payment;