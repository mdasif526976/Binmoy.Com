import React from 'react';

const Card = () => {
    const rating = <div className="rating">
    <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" />
    <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" checked />
    <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" checked/>
    <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" />
    <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" />
  </div>
    return (
        <div>
           <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div className="card-body ">
   <h2 className="card-title">Shoes!</h2>
    {rating}
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-around">
      <button className="btn btn-primary">Add To Cart</button>
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Card;