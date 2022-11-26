import React from 'react';
import { Link } from 'react-router-dom';

const Catagoris = () => {
    return (
        <div className='rounded-md'>
            <h1>We have 4 Catagoris of Brand</h1>
           
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
      <Link>
      <div className="card w-80 lg:w-96 bg-base-100 shadow-xl">
  <div className="card-body text-center items-center">
    <h2 className="card-title text-blue-600 text-4xl ">SAMSUNG</h2>
       <div className="card-actions justify-end">
      
    </div>
  </div>
</div>
      </Link>
      <Link>
      <div className="card w-80 lg:w-96 bg-base-100 shadow-xl">
  <div className="card-body text-center items-center">
    <h2 className="card-title text-red-600 text-4xl font-sans ">Oneplus</h2>
       <div className="card-actions justify-end">
      
    </div>
  </div>
</div>
      </Link>
      <Link>
      <div className="card w-80 lg:w-96 bg-base-100 shadow-xl">
  <div className="card-body text-center items-center">
    <h2 className="card-title text-blue-500 text-4xl ">Vivo</h2>
      
  </div>
</div>
      </Link>
      <Link>
      <div className="card w-80 lg:w-96 bg-base-100 shadow-xl">
  <div className="card-body text-center items-center">
    <h2 className="card-title text-green-500 text-4xl ">OPPO</h2>
       <div className="card-actions justify-end">
      
    </div>
  </div>
</div>
      </Link>
     
        </div>
        </div>
    );
};

export default Catagoris;