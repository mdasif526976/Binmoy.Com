import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Authprovider/Authprovider';
import Spainer from '../../utilities/Spainer/Spainer';

const MyCart = () => {
	const {user} = useContext(AuthContext);
    const url = `https://server-sites.vercel.app/orders/${user.email}`;
    const {data:myOrders =[],isloading} = useQuery({
        queryKey:['bookings',user?.email],
        queryFn:async()=>{
            const res = await fetch(url,{
              headers:{
                authorization:`bearer ${localStorage.getItem('accessToken')}`
              }
            })
            const data = res.json();
            return data;
        } 
    })
        if(isloading){
        return <Spainer></Spainer>
		}
		console.log(myOrders)
	return (
		<div>
			<h1 className='text-2xl font-bold'> My Orders</h1>
			<div className="overflow-x-auto">
      <table className="table w-full">
 
    <thead>
      <tr>
        <th></th>
        <th>BuyerName</th>
        <th>Brand</th>
        <th>Photo</th>
        <th>Meeting Location</th>
      </tr>
    </thead>
    <tbody>
       { 
        myOrders && 
        myOrders?.map((order,i)=> <tr key={order._id} className="hover">
        <th>{i+1}</th>
        <td>{order.buyerName}</td>
		<td>{order.brand}</td>
        <td><div className="avatar">
  <div className="w-24 rounded">
    <img src={order.img} alt=''/>
  </div>
</div></td>
        <td>{order.userLocation}</td>
        
      </tr>
         )
       }
    </tbody>
  </table>
</div>
		</div>
	);
};

export default MyCart;