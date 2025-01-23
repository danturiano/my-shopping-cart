import { Button } from '@/components/ui/button';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import { CartItem } from '@/lib/types';
import { getItems } from '@/service/service';
import Image from 'next/image';

const navItems = ['Brands', 'Men', 'Women', 'Kids'];

export default async function Home() {
	const items = await getItems();

	return (
		<>
			<nav className="absolute z-50 flex py-6 px-12">
				<div className="flex gap-3 items-center">
					<Button className="rounded-3xl font-bold text-2xl px-6">
						<p>ADNKE.</p>
					</Button>
					<div className="flex bg-white px-2 rounded-3xl">
						{navItems.map((item) => (
							<div key={item}>
								<Button variant={'link'} className="font-medium">
									{item}
								</Button>
							</div>
						))}
					</div>
				</div>
			</nav>
			<Carousel className="w-full h-full">
				<CarouselContent>
					{items.map((item: CartItem, index: number) => (
						<CarouselItem key={index}>
							<div className="relative min-h-screen w-full">
								<Image
									src={item.image}
									alt={item.description}
									fill
									className="object-cover"
								/>
								<div className="absolute inset-0 flex items-center justify-center">
									<p className="text-white text-4xl font-bold drop-shadow-md">
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
		</>
	);
}
