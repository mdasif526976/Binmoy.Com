import React, { useEffect, useState } from 'react';
import AdvertiseProduct from './AdvertiseProduct'
  import { faBolt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Advatisement = () => {
  const [products,setProducts] = useState([])
  useEffect(()=>{
    fetch('https://server-sites.vercel.app/fleshHome')
    .then(res=> res.json())
    .then(data=> setProducts(data))
  },[])
  return (
    <div className='my-6 border'>
      <h1 className='font-extrabold text-gray-700 text-2xl'>
         Fle<FontAwesomeIcon className='text-yellow-300' icon={faBolt}/>h Sale /(Advertise item)</h1>
        <div className='grid grid-cols-1 mt-4 lg:mx-12 gap-3 mx-4 lg:grid-cols-3'>
          {
            products.map(product=><AdvertiseProduct product={product}></AdvertiseProduct>)
          }
        </div>
    </div>
  );
};

export default Advatisement;