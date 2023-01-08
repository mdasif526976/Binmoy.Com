import React from 'react';
import { Link } from 'react-router-dom';

const advertiseProduct = ({product}) => {
    const {img,brand,model,newPrice} = product;
    const a = parseInt(newPrice)
    const discount = a + 100;
    return (
        <div className="card w-56 lg:96 bg-base-100 shadow-2xl">
           <div className='m-4'>
            <img className='lg:w-80 rounded-sm w-56 h-60' src={img} alt=''></img>
  <div className="card-body">
    <h2 className="card-title">{brand} {model}</h2>
    <p>Price: {newPrice} <span><del>{discount}</del></span></p>
    <div className="card-actions justify-end">
      <Link to={`/product/${brand}`} className="btn btn-primary">Buy Now</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default advertiseProduct;