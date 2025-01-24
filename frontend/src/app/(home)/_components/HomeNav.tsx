'use client';

import { Button } from '@/components/ui/button';
import { Search, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { useShop } from './ContextProvider';

const navItems = ['Brands', 'Men', 'Women', 'Kids'];

export default function HomeNav() {
	const { cartCount } = useShop();

	return (
		<nav className="absolute z-50 w-full flex justify-between items-center py-8 px-12">
			<div className="flex gap-6 items-center">
				<Button className="rounded-3xl font-bold text-4xl px-6">
					<p>ADNKE.</p>
				</Button>
				<div className="flex bg-white px-2 rounded-3xl">
					{navItems.map((item) => (
						<div key={item}>
							<Button
								variant={'link'}
								className="font-semibold text-lg text-gray-500 hover:text-black"
							>
								{item}
							</Button>
						</div>
					))}
				</div>
			</div>
			<div className="flex gap-2">
				<Button
					className="rounded-full h-10 w-10 bg-white text-black [&_svg]:size-5"
					size={'icon'}
				>
					<Search />
				</Button>
				<Link href={'/cart'} className="relative">
					<Button
						className="rounded-full h-10 w-10 bg-white text-black [&_svg]:size-5"
						size={'icon'}
					>
						<ShoppingBag />
					</Button>
					<div className="w-6 h-6 bg-red-600 rounded-full -translate-y-4 translate-x-6">
						<p className="text-center font-semibold text-white">{cartCount}</p>
					</div>
				</Link>
			</div>
		</nav>
	);
}
