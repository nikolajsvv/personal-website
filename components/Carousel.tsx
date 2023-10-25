'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CardComponent from '@/components/CardComponent';
import RecentWorkModal from '@/components/RecentWorkModal';
import { CardProps } from '@/types';

export default function Carousel() {
	const [cursorStyle, setCursorStyle] = useState('cursor-grab');
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedCardData, setSelectedCardData] = useState<CardProps | null>(
		null
	);

	const onCardClick = (cardData: CardProps) => {
		setSelectedCardData(cardData);
		setIsModalOpen(true);
	};

	const onModalClose = () => {
		setIsModalOpen(false);
	};

	useEffect(() => {
		const handleMouseDown = () => setCursorStyle('cursor-grabbing');
		const handleMouseUp = () => setCursorStyle('cursor-grab');

		document.addEventListener('mousedown', handleMouseDown);
		document.addEventListener('mouseup', handleMouseUp);

		return () => {
			document.removeEventListener('mousedown', handleMouseDown);
			document.removeEventListener('mouseup', handleMouseUp);
		};
	}, []);

	return (
		<div className='w-full pt-[30px]'>
			<motion.div className=''>
				<motion.div
					drag='x'
					dragConstraints={{ right: 0, left: -600 }}
					className={`inner-carousel flex space-x-8  ${cursorStyle}`}
				>
					<motion.div onClick={() => onCardClick(tempData[0])}>
						<CardComponent data={tempData[0]} />
					</motion.div>
					<motion.div onClick={() => onCardClick(tempData[1])}>
						<CardComponent data={tempData[1]} />
					</motion.div>
					<motion.div onClick={() => onCardClick(tempData[2])}>
						<CardComponent data={tempData[2]} />
					</motion.div>
					<motion.div onClick={() => onCardClick(tempData[3])}>
						<CardComponent data={tempData[3]} />
					</motion.div>
				</motion.div>
			</motion.div>
			{isModalOpen && selectedCardData && (
				<RecentWorkModal
					key='recentWorkModal'
					cardData={selectedCardData}
					isOpen={isModalOpen}
					onClose={onModalClose}
				/>
			)}
		</div>
	);
}

const tempData = [
	{
		id: '1',
		title: 'AI-Enhanced Task Management',
		description: 'Test Description',
		image: 'TaskManagerLogo',
		link: 'google.com',
		tech: ['TypeScript', 'TailwindCSS'],
		styling: 'text-night bg-[#CEBA9A]',
		imageStyling: 'absolute bottom-[15px] right-[15px] h-[96px] w-[110px] ',
	},
	{
		id: '2',
		title: "A visual representation of students' semester-long course work.",
		description: 'Test Description',
		image: 'StanfordLogo',
		link: 'google.com',
		tech: ['TypeScript', 'TailwindCSS'],
		styling: 'text-ghost-white bg-[#9A0000]',
		imageStyling: 'absolute bottom-[15px] right-[15px] h-[75px] w-[49px]',
	},
	{
		id: '3',
		title: 'Data visualization library for Deno',
		description: 'Test Description',
		image: 'DenoLogo',
		link: 'google.com',
		tech: ['TypeScript', 'TailwindCSS'],
		styling: 'text-black bg-[#FFFFFF]',
		imageStyling: 'absolute bottom-[15px] right-[15px] h-[72px] w-[72px]',
	},
	{
		id: '4',
		title: 'Chat bot that integrates Spotify API',
		description: 'Test Description',
		image: 'TwitchLogo',
		link: 'google.com',
		tech: ['TypeScript', 'TailwindCSS'],
		styling: 'text-[#6440A5] bg-[#9DA7FF]',
		imageStyling: 'absolute bottom-[15px] right-[15px] h-[72px] w-[72px]',
	},
];
