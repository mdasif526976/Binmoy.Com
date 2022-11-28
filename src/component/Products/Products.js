import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Spainer from '../../utilities/Spainer/Spainer';
import axios from 'axios';
import Card from '../card/Card';


const Products = () => {
    const params = useParams();
    const query = params.id;
   
    const {data:products = [] , isLoading} = useQuery({
        queryKey: ['product'],
        queryFn:async()=>{
          const res = await axios.get(`http://localhost:5000/products/${query}`)
            const data = res.data;
            return data;

        }
    })
    if(isLoading){
    return <Spainer></Spainer>
    }
    console.log(products)
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 m-8 rounded-full'>
           {
            products.map(product=><Card product={product} key={product._id}></Card>)
           }
        </div>
           
    );
};

export default Products;