import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Card from '../card/Card';
import { FaBars } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import Spainer from '../../utilities/Spainer/Spainer';


const Products = () => {
    const params = useParams();
    const query = params.id;
    const {data:products = [] , isLoading} = useQuery({
        queryKey:['products'],
        queryFn:async()=>{
           const res = await fetch(`http://localhost:5000/products/${query}`)
           const data = res.json();
           return data;
        }
    })
    if(isLoading){
    return <Spainer></Spainer>
    }
    console.log(products)
    return (
        <div className='grid grid-cols-1 lg:grid-cols-6 gap-5 m-8 rounded-full'>
           
        </div>
           
    );
};

export default Products;