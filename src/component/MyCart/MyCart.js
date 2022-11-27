import React from 'react';

const MyCart = () => {
    return (
        <div>
            <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 bg-rose-300 dark:text-gray-100">
	<h2 className="text-xl font-semibold">Your cart</h2>
	<ul className="flex flex-col divide-y divide-gray-700">
		<li className="flex flex-col py-5 sm:flex-row bg-slate-50 sm:justify-between">
			<div className="flex w-full space-x-2 sm:space-x-4">
				<img className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" alt="Polaroid camera" />
				<div className="flex flex-col justify-between w-full pb-4">
					<div className="flex justify-between w-full pb-2 space-x-2">
						<div className="space-y-1">
							<h3 className="text-lg font-semibold leading-snug sm:pr-8">Polaroid camera</h3>
							<p className="text-sm dark:text-gray-400">Classic</p>
						</div>
						<div className="text-right">
							<p className="text-lg font-semibold">59.99€</p>
							<p className="text-sm line-through dark:text-gray-600">75.50€</p>
						</div>
					</div>
					<div className="flex text-sm divide-x">
						
					</div>
				</div>
			</div>
		</li>

	</ul>
	<div className="space-y-1 text-right">
		<p>Total amount:
			<span className="font-semibold">357 €</span>
		</p>
		<p className="text-sm dark:text-gray-400">Not including taxes and shipping costs</p>
	</div>
	<div className="flex justify-end space-x-4">
		<button type="button" className="px-6 py-2 border rounded-md border-pink-400">Back
			<span className="sr-only sm:not-sr-only">to shop</span>
		</button>
		<button type="button" className="px-6 py-2 border rounded-md dark:bg-pink-400 dark:text-gray-900 dark:border-pink-400">
			<span className="sr-only sm:not-sr-only">Continue to</span>Checkout
		</button>
	</div>
</div>
        </div>
    );
};

export default MyCart;