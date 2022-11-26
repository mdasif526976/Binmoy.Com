import React from 'react';
import { Link } from 'react-router-dom';

const BannerHome2 = () => {
    return (
        <div className='mt-3 bg-gradient-to-r from-sky-300 to-red-50'>
<div className="p-6 py-12 ">
	<div className="container mx-auto">
		<div className="flex flex-col lg:flex-row items-center justify-between">
			<h2 className="text-center text-6xl tracking-tighter font-bold">Up to
				<br className="sm:hidden"/>10% Off
			</h2>
			<div className="space-x-2 text-center py-2 lg:py-0">
				<span>Plus free shipping! Use code:</span>
				<span className="font-bold text-lg">NewUser10%</span>
			</div>
			<Link 
             className="px-5 mt-4 lg:mt-0 py-3 font-bold rounded-md border block
              bg-rose-400 text-white">Shop Now ></Link>
		</div>
	</div>
</div>
            
        </div>
    );
};

export default BannerHome2;