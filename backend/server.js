/* eslint-disable @typescript-eslint/no-require-imports */
// server.js
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'public/images')));

const availableItems = [
	{
		id: 1,
		brand: 'Adidas',
		name: 'Gazelle',
		code: 'JH5404',
		prev_price: 170.5,
		price: 142.99,
		main_description: 'Classic 3-Stripes trainers to dress up or down.',
		description:
			'The adidas Gazelle started life in the 1970s as a training shoe but has since become a lifestyle staple. This edition is crafted with a leather and synthetic upper thats built to last',
		image: 'http://localhost:3001/images/adidas.jpg',
	},
	{
		id: 2,
		brand: 'Jordan',
		name: 'Retro Low',
		code: 'DZ4137-106',
		prev_price: 190.55,
		price: 162.95,
		main_description: 'Classic 3-Stripes trainers to dress up or down.',
		description:
			'The adidas Gazelle started life in the 1970s as a training shoe but has since become a lifestyle staple. This edition is crafted with a leather and synthetic upper thats built to last',
		image: 'http://localhost:3001/images/j1.jpg',
	},
	{
		id: 3,
		brand: 'Jordan',
		name: 'Chicago',
		code: 'AA3834-101',
		prev_price: 999.25,
		price: 620.99,
		main_description: 'Classic 3-Stripes trainers to dress up or down.',
		description:
			'The adidas Gazelle started life in the 1970s as a training shoe but has since become a lifestyle staple. This edition is crafted with a leather and synthetic upper thats built to last',
		image: 'http://localhost:3001/images/j2.jpg',
	},
];

app.get('/api/items', (req, res) => {
	res.json(availableItems);
});

let cartItems = [];

app.get('/api/cart', (req, res) => {
	res.json(cartItems);
});

app.post('/api/cart', (req, res) => {
	const { id } = req.body;

	const itemToAdd = availableItems.find((item) => item.id === id);
	if (!itemToAdd) {
		return res.status(404).json({ error: 'Item not found' });
	}

	const newItem = {
		...itemToAdd,
		cartId: Date.now(),
	};

	cartItems.push(newItem);
	res.status(201).json(newItem);
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
