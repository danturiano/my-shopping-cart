import { CartItem } from '@/lib/types';
import React from 'react';
import { getItemsInCart } from '../(home)/_lib/service';

export default async function CartPage() {
	const cartItems = await getItemsInCart();
	const initialValue = 0;
	const totalPrice = cartItems.reduce(
		(accumulator: number, item: CartItem) => accumulator + item.price,
		initialValue
	);

	return (
		<div className="min-h-screen max-w-screen flex flex-col items-center justify-center text-start">
			<div className="flex flex-col gap-2 text-lg">
				{cartItems.map((item: CartItem) => (
					<div key={item.id}>
						<h1 className="font-medium text-2xl">
							{item.brand} {item.name}
						</h1>
						<p className="text-red-600">${item.price}</p>
					</div>
				))}
				<p className="text-2xl font-semibold">Total: {totalPrice}</p>
			</div>
		</div>
	);
}
