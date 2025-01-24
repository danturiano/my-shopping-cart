'use client';

import React, { createContext, useContext, useState } from 'react';

interface ContentProps {
	cartCount: number;
	onAddCart: () => void;
}

const defaultValue: ContentProps = {
	cartCount: 0,
	onAddCart: () => {},
};

const ShopContext = createContext<ContentProps>(defaultValue);

function ContextProvider({ children }: { children: React.ReactNode }) {
	const [cartCount, setCartCount] = useState<number>(() => {
		const storedValue = sessionStorage.getItem('cartCount');
		return storedValue ? parseInt(storedValue, 10) : 0;
	});

	function handleAddCart() {
		setCartCount((prevCartCount) => {
			const newCount = prevCartCount + 1;
			sessionStorage.setItem('cartCount', newCount.toString()); // Persist to sessionStorage here
			return newCount;
		});
	}

	const value: ContentProps = {
		cartCount,
		onAddCart: handleAddCart,
	};

	return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

function useShop() {
	const context = useContext(ShopContext);
	if (context === undefined)
		throw new Error('ShopContext was used outside of the PostProvider');
	return context;
}

export { ContextProvider, useShop };
