import { Button } from '@/components/ui/button';
import { Search, ShoppingBag } from 'lucide-react';
import React from 'react';

const navItems = ['Brands', 'Men', 'Women', 'Kids'];

export default function HomeNav() {
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
				<Button
					className="rounded-full h-10 w-10 bg-white text-black [&_svg]:size-5"
					size={'icon'}
				>
					<ShoppingBag />
				</Button>
			</div>
		</nav>
	);
}
