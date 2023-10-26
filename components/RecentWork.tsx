'use client';
import Carousel from '@/components/Carousel';
import { motion } from 'framer-motion';

const h1Variants = {
	hidden: {
		y: 10,
		opacity: 0,
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			delay: 0.5,
		},
	},
};

export default function RecentWork() {
	return (
		<section className='flex flex-col sm:items-start sm:w-650 w-full mt-10 p-5 md:p-3'>
			<motion.h1
				variants={h1Variants}
				initial='hidden'
				animate='visible'
				className='text-[24px] font-bold'
			>
				Recent Work
			</motion.h1>
			<Carousel />
		</section>
	);
}
