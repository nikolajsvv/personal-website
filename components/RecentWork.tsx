import Carousel from '@/components/Carousel';

export default function RecentWork() {
	return (
		<section className='flex flex-col sm:items-start sm:w-650 w-full mt-10 p-5 sm:p-3'>
			<h1 className='text-[24px] font-bold'>Recent Work</h1>
			<Carousel />
		</section>
	);
}
