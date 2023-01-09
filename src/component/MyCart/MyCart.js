import { useQuery } from '@tanstack/react-query';
import { TrashIcon } from '@heroicons/react/24/solid'
import { CheckCircleIcon} from '@heroicons/react/24/solid'
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Authprovider/Authprovider';
import UseTitle from '../../utilities/hooks/useTittle';
import Spainer from '../../utilities/Spainer/Spainer';
import { toast } from 'react-hot-toast';


const MyCart = () => {
	const {user} = useContext(AuthContext);
  UseTitle('MyCart')
    const url = `https://server-sites.vercel.app/orders/${user.email}`;
    const {data:myOrders =[],isloading,refetch} = useQuery({
        queryKey:['bookings',user?.email],
        queryFn:async()=>{
            const res = await fetch(url,{
              headers:{
                'content-type':'application/json',
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
    const deleteOrder =(id)=>{
      fetch(` https://server-sites.vercel.app/order/delete/${id}`,{
        method:'DELETE',
        headers:{
          'content-type':'application/json',
          authorization:`bearer ${localStorage.getItem('accessToken')}`
        },})
        .then(res=>res.json())
        .then(data=>{
          if(data.deletedCount > 0){
            toast.success('Successfully Delete!')
            refetch()
          }
        })
    }
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
        <th>Payment</th>
        <th>Action</th>
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
        {order.paid === true ? <td><p className='text-xl font-bold text-green-500'>Payment Complate</p></td>:
        <td><Link to={`/dashboard/Payment/${order._id}`}
         className='btn btn-info text-white'>Payment Now</Link></td>}
        <td>{ order.paid === true ? <CheckCircleIcon className='h-6 w-6 text-green-500'></CheckCircleIcon> :
        <button className='tooltip' data-tip="Remove" onClick={()=>deleteOrder(order._id)}>
          <TrashIcon className="h-6 w-6 text-red-500"/></button>}</td>
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