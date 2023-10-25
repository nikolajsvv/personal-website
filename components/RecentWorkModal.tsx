import { motion } from 'framer-motion';
import Image from 'next/image';
import { RecentWorkModalProps } from '../types';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import React from 'react';
import { DenoLogo } from '@/utils/images';

export default function RecentWorkModal({
	cardData,
	isOpen,
	onClose,
}: RecentWorkModalProps) {
	const { title, description, tech, link } = cardData;

	const modalVariants = {
		open: { opacity: 1, scale: 1 },
		closed: { opacity: 1, scale: 0 },
		exit: { x: -300, scale: 0 },
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<motion.div
				className='absolute w-full h-screen inset-0 bg-ghost-white dark:bg-night z-40 flex items-center justify-center'
				variants={modalVariants}
				initial='closed'
				animate={isOpen ? 'open' : 'closed'}
				exit='exit'
			>
				<div className='flex flex-col md:flex-row h-full w-full lg:w-[950px] pt-10 md:px-0 px-4'>
					{/* Left Column */}
					<div className=' flex flex-col w-full md:w-1/3 bg-gray-100'>
						<HiOutlineArrowLeft
							onClick={onClose}
							className='text-night dark:text-ghost-white h-8 w-8 cursor-pointer hover:scale-125 hover:text-neon-blue dark:hover:text-neon-blue rounded-full transition-all duration-700'
						/>
						<Image
							src={DenoLogo}
							alt=''
							className='h-[130px] w-[130px] mt-10'
						/>

						<div className='pt-[6px] w-full'>
							<a href={link}>
								<h1 className='text-3xl font-bold text-night dark:text-ghost-white mt-4 hover:underline'>
									{title}
								</h1>
							</a>
							{/* Displaying the technologies used */}
							<div className='mt-4 md:mt-10'>
								<p className='text-[16px] font-normal'>Technologies used</p>
								<div className='flex flex-wrap space-x-5 mt-4'>
									{tech.map((imgSrc, index) => (
										<Image
											src={imgSrc}
											alt={imgSrc}
											key={index}
											className='hover:scale-125 transition duration-500 select-none object-contain'
										/>
									))}
								</div>
							</div>
						</div>
					</div>

					{/* Right Column */}
					<div className='flex flex-col w-full md:w-1/2 justify-start mt-10 bg-gray-200'>
						<p className='text-sm text-night dark:text-ghost-white'>
							{renderDescription(description)}
						</p>
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
}

function renderDescription(description: string) {
	return description.split('\n').map((line, index) => (
		<React.Fragment key={index}>
			{line}
			<br />
		</React.Fragment>
	));
}
