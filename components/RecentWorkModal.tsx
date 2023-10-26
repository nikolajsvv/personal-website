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

	const titleVariant = {
		visible: {
			opacity: 1,
			x: 0,
			transition: { ease: 'easeInOut', duration: 0.4, delay: 0.2 },
		},
		hidden: {
			opacity: 0,
			x: -500,
		},
	};

	const paragraphVariant = {
		visible: {
			opacity: 1,
			transition: { duration: 0.4, delay: 0.4 },
		},
		hidden: {
			opacity: 0,
		},
	};

	const { title, link, description, tech } = cardData;
	return (
		<motion.div
			className='absolute inset-0 w-full h-screen bg-ghost-white dark:bg-night z-40 flex justify-center text-night dark:text-ghost-white overflow-x-hidden'
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0 }}
		>
			<div className='flex flex-col sm:flex-row sm:w-950 w-full mt-10 select-none'>
				{/* Title Section */}
				<motion.div
					variants={titleVariant}
					initial='hidden'
					animate='visible'
					className='w-full sm:w-2/3 p-4'
				>
					<PiArrowLeftLight
						aria-label='button'
						onClick={onClose}
						className='h-[50px] w-[50px] text-night dark:text-ghost-white hover:text-neon-blue dark:hover:text-neon-blue hover:scale-110 transition-transform duration-500 cursor-pointer'
					/>

					<div className='pt-10'>
						<motion.a
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
						</motion.a>
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
				</motion.div>

				{/* Description Section */}
				<div className='w-full p-4 mt-10'>
					<motion.p
						variants={paragraphVariant}
						initial='hidden'
						animate='visible'
						className='font-normal text-[16px] leading-5'
					>
						{parseDescription(description)}
					</motion.p>
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
