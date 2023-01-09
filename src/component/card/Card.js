import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { toast } from 'react-hot-toast';



const Card = ({product,setproduct}) => {
   const {img,location,brand,oldPrice,newPrice,_id,
    model,sellerName,time,useTime,account} = product;
    const verifed = <FontAwesomeIcon className='text-blue-500'
      icon={faCheckCircle } />;
     const verifedSeller =  <>
      {sellerName} {verifed}
            </>
const reportIteam =(id)=>{
  if (window.confirm("Are you sure report ? Then Press a Ok Now!") === true) {
   fetch(`https://server-sites.vercel.app/reportIteam/${id}`,{
    method:'PUT',
    headers:{
      'content-type':'applicati/json',
      authorization: `bearer ${localStorage.getItem('accessToken')}`
    }
   }).then(res=> res.json())
   .then(data=>{
    if(data.modifiedCount > 0){
      toast.success('Report Successfully !!')
    }
    console.log(data)
   })
    console.log(id)
    return
  } 
}
  return (
    <div>
<div className="flex bg-white shadow-2xl rounded-lg p-4 m-2">
			<div className="w-80 bg-gray-300 rounded-lg">
      <figure><img className='h-52' src={img} alt="Album"/></figure>
      </div>
			<div className="flex flex-col items-start w-full ml-4">
				<h4 className="text-xl font-semibold">{brand} {model}</h4>
				<h4 className="text-sm font-medium">Seller Name:{ account === 'verified'
         ?   verifedSeller:sellerName  }</h4>
				<p className="text-sm">NewPrice: {newPrice}Tk</p>
				<p className="text-sm">Old Price : {oldPrice}</p>
				<p className="text-sm">Used : {useTime}</p>
				<p className="text-sm">Location: {location}</p>
				<p className="text-sm font-medium">PostTime:<span className='font-bold text-[11px]'>{time}</span> </p>
				<div className='flex flex-col gap-2'>
        <label htmlFor="my-modal-3" onClick={()=>setproduct(product)}
         className='btn btn-info text-white'>Order now</label>
         <button className='btn text-white btn-error'
          onClick={()=>reportIteam(_id)}>Report Product</button>
        </div>
			</div>
		</div>
    </div>
  );
};

export default Card;