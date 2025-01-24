import { ContextProvider } from './_components/ContextProvider';
import HomeMain from './_components/HomeMain';
import { default as HomeNav } from './_components/HomeNav';

export default function Home() {
	return (
		<ContextProvider>
			<header>
				<HomeNav />
			</header>
			<main>
				<HomeMain />
			</main>
		</ContextProvider>
	);
}
