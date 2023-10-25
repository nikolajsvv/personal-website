import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { RecentWorkModalProps } from '../types';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import React from 'react';
export default function RecentWorkModal({
	cardData,
	isOpen,
	onClose,
}: RecentWorkModalProps) {
	const { title, description, tech, link } = cardData;
	const modalRef = useRef(null);

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
				<div className='flex flex-col md:flex-row h-full max-w-screen-xl mx-auto pt-10 px-4 md:px-0'>
					{/* Left Column */}
					<div className='flex flex-col w-2/3 md:w-96'>
						<button onClick={onClose}>
							<HiOutlineArrowLeft className='text-night dark:text-ghost-white h-8 w-8' />
						</button>
						<div className='pt-10'>
							<a href={link}>
								<h1 className='text-3xl text-night dark:text-ghost-white mt-4 hover:underline'>
									{title}
								</h1>
							</a>
							{/* Displaying the technologies used */}
							<div className='mt-4 md:mt-10'>
								<p className='text-sm'>Technologies used</p>
								<ul className='flex flex-row space-x-4 mt-2'>
									{tech.map((technology, index) => (
										<li
											key={index}
											className='text-xl text-night dark:text-ghost-white'
										>
											{technology}
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>

					{/* Right Column */}
					<div className='flex flex-col w-full md:w-96 justify-start mt-10'>
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
