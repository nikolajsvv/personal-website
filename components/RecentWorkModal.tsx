import { RecentWorkModalProps } from '../types';
import { motion } from 'framer-motion';
import { PiArrowLeftLight } from 'react-icons/pi';
import { LiaExternalLinkAltSolid } from 'react-icons/lia';
import React from 'react';
import Image from 'next/image';

export default function RecentWorkModal({
	cardData,
	isOpen,
	onClose,
}: RecentWorkModalProps) {
	const modalVariants = {
		open: { opacity: 1, scale: 1 },
		closed: { opacity: 1, scale: 0 },
		exit: { x: -300, scale: 0 },
	};

	const { title, link, description, tech } = cardData;
	return (
		<motion.div className='absolute inset-0 w-full h-screen bg-ghost-white dark:bg-night z-40 flex justify-center text-night dark:text-ghost-white'>
			<div className='flex flex-col sm:flex-row sm:w-950 w-full mt-10 select-none'>
				{/* Title Section */}
				<div className='w-full sm:w-2/3 p-3'>
					<PiArrowLeftLight
						aria-label='button'
						onClick={onClose}
						className='h-[50px] w-[50px] text-night dark:text-ghost-white hover:text-neon-blue dark:hover:text-neon-blue hover:scale-110 transition-transform duration-500 cursor-pointer'
					/>
					<div className='pt-10'>
						<a
							aria-label='navigation'
							href={link}
							rel='noreferrer noopener'
							target='_blank'
							className='text-3xl font-bold text-night dark:text-ghost-white mt-4 hover:underline relative'
						>
							{title}
							<span>
								<LiaExternalLinkAltSolid className='absolute -right-10 bottom-[4px] h-[28px] w-[28px]' />
							</span>
						</a>
					</div>

					<p className='pt-[18px] font-normal'>Technologies used</p>
					{/* List of tech images */}
					<div className='flex flex-wrap space-x-5 mt-4'>
						{tech.map((imgSrc, index) => (
							<Image
								src={imgSrc}
								alt={imgSrc}
								key={index}
								className='hover:scale-125 transition duration-300 select-none object-contain'
							/>
						))}
					</div>
				</div>

				{/* Description Section */}
				<div className='w-full p-3 mt-10'>
					<p className='font-normal text-[16px] leading-5'>
						{parseDescription(description)}
					</p>
				</div>
			</div>
		</motion.div>
	);
}

function parseDescription(description: string) {
	return description.split('\n').map((line, index) => (
		<React.Fragment key={index}>
			{line}
			<br />
		</React.Fragment>
	));
}
