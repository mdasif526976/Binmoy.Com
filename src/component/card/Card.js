import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';



const Card = ({product,setproduct}) => {
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
<div className="flex bg-white shadow-2xl rounded-lg p-4 m-2">
			<div className="w-80 bg-gray-300 rounded-lg">
      <figure><img src={img} alt="Album"/></figure>
      </div>
			<div className="flex flex-col items-start w-full ml-4">
				<h4 className="text-xl font-semibold">{brand} {model}</h4>
				<h4 className="text-sm font-medium">Seller Name:{ account === 'verifed'
         ?   verifedSeller:sellerName  }</h4>
				<p className="text-sm">NewPrice: {newPrice}Tk</p>
				<p className="text-sm">Old Price : {oldPrice}</p>
				<p className="text-sm">Used : {useTime}</p>
				<p className="text-sm">Location: {location}</p>
				<p className="text-sm font-medium">PostTime:<span className='font-bold text-[11px]'>{time}</span> </p>
				<label htmlFor="my-modal-3" onClick={()=>setproduct(product)}
         className='btn bg-rose-400'>Oder now</label>
			</div>
		</div>
    </div>
  );
};

export default Card;