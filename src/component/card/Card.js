import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';



const Card = ({product}) => {
   const {img,location,brand,oldPrice,newPrice,
    model,sellerName,time,useTime,account} = product;
    console.log(account)
    const verifed = <FontAwesomeIcon className='text-blue-500'
      icon={faCheckCircle } />;
     const verifedSeller =  <>
      {sellerName} {verifed}
            </>

  return (
    <div>
<div class="flex bg-white shadow-2xl rounded-lg p-4 m-2">
			<div class="w-80 bg-gray-300 rounded-lg">
      <figure><img src={img} alt="Album"/></figure>
      </div>
			<div class="flex flex-col items-start w-full ml-4">
				<h4 class="text-xl font-semibold">{brand} {model}</h4>
				<h4 class="text-sm font-medium">Seller Name:{ account !== 'notVerified' ? sellerName
         :  verifedSeller  }</h4>
				<p class="text-sm">NewPrice: {newPrice}Tk</p>
				<p class="text-sm">Old Price : {oldPrice}</p>
				<p class="text-sm">Used : {useTime}</p>
				<p class="text-sm">Location: {location}</p>
				<p class="text-sm font-medium">PostTime:<span className='font-bold text-[11px]'>{time}</span> </p>
				<a class="p-2 leading-none rounded font-medium mt-3 bg-gray-400 text-xs uppercase"
         href="#">Click Here</a>
			</div>
		</div>
    </div>
  );
};

export default Card;