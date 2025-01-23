import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import { CartItem } from '@/lib/types';
import Image from 'next/image';
import { getItems } from '../_lib/service';
import AddToCartBtn from './AddToCartBtn';

export default async function HomeMain() {
	const items = await getItems();
	return (
		<Carousel className="w-full h-full">
			<CarouselContent>
				{items.map((item: CartItem, index: number) => (
					<CarouselItem
						key={index}
						className="relative min-h-screen w-full flex flex-col items-center justify-center"
					>
						<div>
							<Image
								src={item.image}
								alt={item.description}
								fill
								className="object-cover absolute -z-10"
							/>
							<div className="flex flex-col items-center justify-center xl:-translate-y-24">
								<div className="flex gap-4 xl:gap-0">
									<div>
										<p className="text-[10rem] xl:text-[15rem] font-bold text-white">
											{item.brand}
										</p>
										<p className="text-xl xl:text-[2xl] -translate-y-16 xl:-translate-y-24 font-medium">
											Code: {item.code}
										</p>
									</div>
									<p className="text-[10rem] xl:text-[15rem] font-bold text-white xl:translate-y-36">
										{item.name}
									</p>
								</div>
							</div>
							<div className="flex items-center justify-center">
								<div className="flex flex-col">
									<p className="text-gray-100 font-medium line-through text-center text-6xl">
										${item.prev_price}
									</p>
									<p className="font-bold text-8xl text-red-500">
										${item.price}
									</p>
									<AddToCartBtn item={item} />
								</div>
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
