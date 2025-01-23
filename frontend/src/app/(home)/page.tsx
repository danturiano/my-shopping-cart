import HomeMain from './_components/HomeMain';
import { default as HomeNav } from './_components/HomeNav';

export default function Home() {
	return (
		<>
			<header>
				<HomeNav />
			</header>
			<main>
				<HomeMain />
			</main>
		</>
	);
}
