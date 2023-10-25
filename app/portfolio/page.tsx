import Header from '@/components/Header';
import RecentWork from '@/components/RecentWork';
import Carousel from '@/components/Carousel';

export default function HomePage() {
	return (
		<main className='h-screen w-screen flex flex-col items-center justify-start text-night dark:text-ghost-white'>
			<Header />
			<RecentWork />
		</main>
	);
}
