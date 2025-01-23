'use client';

import { Button } from '@/components/ui/button';
import { CartItem } from '@/lib/types';
import { addItemToCart, getItemsInCart } from '../_lib/service';

export default function AddToCartBtn({ item }: { item: CartItem }) {
	const handleAddToCart = async () => {
		try {
			const itemsInCart = await getItemsInCart();
			const itemExist = itemsInCart.some(
				(cartItem: CartItem) => cartItem.id === item.id
			);

			if (itemExist) return;

			await addItemToCart(item);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Button className="text-2xl p-6 rounded-3xl" onClick={handleAddToCart}>
			Add to Bag
		</Button>
	);
}
