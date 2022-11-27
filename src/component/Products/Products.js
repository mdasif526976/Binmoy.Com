import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Spainer from '../../utilities/Spainer/Spainer';
import axios from 'axios';


const Products = () => {
    const params = useParams();
    const query = params.id;
   
    const {data:products = [] , isLoading} = useQuery(['products'], ()=>{
        axios.get (`http://localhost:5000/products/${query}`)
        .then((res) => res.data)
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