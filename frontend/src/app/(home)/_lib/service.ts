import { CartItem } from '@/lib/types';

export async function getItems() {
	try {
		const response = await fetch('http://localhost:3001/api/items');
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error fetching available items:', error);
		throw error;
	}
}

export async function addItemToCart(item: CartItem) {
	try {
		const response = await fetch('http://localhost:3001/api/cart', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				id: item.id,
				name: item.name,
				price: item.price,
				description: item.description,
			}),
		});
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error adding item to cart:', error);
		throw error;
	}
}

export async function getItemsInCart() {
	try {
		const response = await fetch('http://localhost:3001/api/cart');
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const data = await response.json();

		return data;
	} catch (error) {
		console.error('Error fetching available items:', error);
		throw error;
	}
}
