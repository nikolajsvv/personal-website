'use client';
import { PiCodeFill } from 'react-icons/pi';
import { BiSolidBank } from 'react-icons/bi';
import { RiAdvertisementFill } from 'react-icons/ri';
import Image from 'next/image';
import { ExperienceItemProp, IconMapType } from '@/types';
import { motion } from 'framer-motion';

const ICON_MAP: IconMapType = {
	engineer: (
		<PiCodeFill className='h-[30px] w-[30px] md:h-[40px] md:w-[40px] text-night dark:text-ghost-white group-hover:text-neon-blue transition-all duration-500' />
	),
	bank: (
		<BiSolidBank className='h-[30px] w-[30px] md:h-[40px] md:w-[40px] text-night dark:text-ghost-white group-hover:text-neon-blue transition-all duration-500' />
	),
	ad: (
		<RiAdvertisementFill className='h-[30px] w-[30px] md:h-[40px] md:w-[40px] text-night dark:text-ghost-white group-hover:text-neon-blue transition-all duration-500' />
	),
};

const cardVariant = {
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 1 },
	},
	hidden: {
		opacity: 0,
		x: -100,
	},
};

const iconVariant = {
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			staggerChildren: 0.5,
			duration: 0.5,
			delay: 0.1,
		},
	},
	hidden: {
		opacity: 0,
		y: -100,
	},
};

export default function ExperienceItem({
	icon,
	title,
	description,
	tech,
}: ExperienceItemProp) {
	return (
		<motion.div
			className='flex w-full pt-[30px] group'
			variants={cardVariant}
			viewport={{ once: true }}
			initial='hidden'
			whileInView='visible'
		>
			<div className='pr-3 md:pr-8'>{ICON_MAP[icon]}</div>
			<div className='flex flex-col -translate-y-[6px] md:-translate-y-1'>
				<h1 className='text-[24px] font-semibold select-none tracking-tight group-hover:text-neon-blue transition-all duration-500'>
					{title}
				</h1>
				<p className='text-[16px] tracking-tight select-none cursor-default'>
					{description}
				</p>
				<motion.div
					className='flex w-full space-x-7 mt-[20px]'
					variants={iconVariant}
					viewport={{ once: true }}
					initial='hidden'
					whileInView='visible'
				>
					{tech.map((imgSrc, index) => (
						<Image
							src={imgSrc}
							alt={imgSrc}
							key={index}
							className='hover:scale-125 transition duration-300 select-none object-contain '
						/>
					))}
				</motion.div>
			</div>
		</motion.div>
	);
}
