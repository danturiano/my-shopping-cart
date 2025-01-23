import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import { CartItem } from '@/lib/types';
import Image from 'next/image';
import React from 'react';
import { getItems } from '../_lib/service';

export default async function HomeMain() {
	const items = await getItems();
	return (
		<Carousel className="w-full h-full">
			<CarouselContent>
				{items.map((item: CartItem, index: number) => (
					<CarouselItem
						key={index}
						className="relative min-h-screen w-full flex items-center justify-center"
					>
						<div>
							<Image
								src={item.image}
								alt={item.description}
								fill
								className="object-cover absolute -z-10"
							/>
							<div className="flex items-center justify-center -translate-y-24">
								<div>
									<p className="text-[15rem] font-bold text-white">
										{item.brand}
									</p>
									<p className="text-2xl -translate-y-24 font-medium">
										Code: {item.code}
									</p>
								</div>
								<p className="text-[15rem] font-bold text-white translate-y-36">
									{item.name}
								</p>
							</div>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
}
