'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CardComponent from '@/components/CardComponent';
import RecentWorkModal from '@/components/RecentWorkModal';
import { CardProps } from '@/types';
import {
	NextLogo,
	VercelLogo,
	TailwindLogo,
	TaskManagerLogo,
	StanfordLogo,
	TsLogo,
	FigmaLogo,
	D3Icon,
	TwitchLogo,
	DenoLogo,
	DenoIcon,
	JsLogo,
	SpotifyLogo,
	TwitchIcon,
} from '@/utils/images';

const DRAG_LEFT_CONSTRAINT = -800;

export default function Carousel() {
	const [cursorStyle, setCursorStyle] = useState('cursor-grab');
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [hasBeenDragged, setHasBeenDragged] = useState(false);
	const [selectedCardData, setSelectedCardData] = useState<CardProps | null>(
		null
	);

	const onCardClick = (cardData: CardProps) => {
		// Only process the click if the carousel hasn't been dragged
		if (!hasBeenDragged) {
			setSelectedCardData(cardData);
			setIsModalOpen(true);
		}
		// Reset the drag state after processing the click
		setHasBeenDragged(false);
	};

	const onDrag = () => {
		setHasBeenDragged(true);
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
		<div className='w-full pt-[30px] '>
			<motion.div className='w-full'>
				<motion.div
					drag='x'
					dragConstraints={{ right: 0, left: DRAG_LEFT_CONSTRAINT }}
					onDrag={onDrag} // Add this line to handle the drag event
					className={`inner-carousel w-full flex space-x-8 ${cursorStyle}`}
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
		description:
			"Building my task manager app was a journey of discovery, innovation, and growth. What commenced as a mere fascination with a UI component morphed into the creation of a comprehensive task manager app enriched with AI suggestions, drag-and-drop features, and efficient data storage capabilities. My initial drive stemmed from an appealing UI I stumbled upon; a basic form component with facets that intrigued my developer instincts. Adeptly recreating the UI in Figma was my first step. It set a solid foundation, enabling a swift transition into the coding phase. Using a robust tech stack including Next.js, TailwindCSS, TypeScript, Prisma, and Planetscale, I crafted a visually appealing and user-friendly interface.\n\nTackling the text editing segment with Prosemirror was undeniably one of the most challenging aspects. Its vastness and intricate functionalities initially felt like a maze. However, perseverance led me to comprehend its potency, allowing me to build a markdown-compatible description for tasks. Integrating the OpenAI API for AI-generated suggestions was surprisingly straightforward, and it added an innovative touch to my app. As I delved deeper, I recognized the importance of backend organization, a lesson I'll carry forward in future endeavors. Inspired by renowned apps like Trello and Linear, I devised a dashboard in Figma, which became the blueprint for my task manager's main interface. The addition of react-beautiful-dnd facilitated an interactive drag-and-drop mechanism, enhancing the overall user experience. The final touch was the task view, which, despite its simplicity, brought the entire app together. Reflecting upon this venture, the transformation from a single form to a dynamic dashboard within a week was both exhilarating and profoundly rewarding. I am excited for the future enhancements and the potential this app holds.",
		image: TaskManagerLogo,
		link: 'https://dimension-assessment.vercel.app/',
		tech: [TsLogo, TailwindLogo, VercelLogo, NextLogo, FigmaLogo],
		styling: 'text-night bg-[#CEBA9A]',
		imageStyling:
			'absolute bottom-[15px] right-[15px] h-[96px] w-[110px] pointer-events-none',
	},
	{
		id: '2',
		title: "A visual representation of students' semester-long course work.",
		description: 'Test Description',
		image: StanfordLogo,
		link: 'google.com',
		tech: [TsLogo, TailwindLogo, NextLogo, FigmaLogo],
		styling: 'text-ghost-white bg-[#9A0000]',
		imageStyling:
			'absolute bottom-[15px] right-[15px] h-[75px] w-[49px] pointer-events-none',
	},
	{
		id: '3',
		title: 'Data visualization library for Deno',
		description:
			"D3no Data is a pioneering data visualization and charting library crafted specifically for the Deno runtime environment. At its inception, Deno's unique ecosystem lacked access to npm libraries, presenting a void in terms of charting and data visualization tools. Recognizing this, our team leveraged D3.js to curate a lightweight library, offering a plethora of functionalities and a high degree of customizability for chart visualizations.",
		image: DenoLogo,
		link: 'google.com',
		tech: [D3Icon, TsLogo, DenoIcon],
		styling: 'text-black bg-[#FFFFFF]',
		imageStyling:
			'absolute bottom-[15px] right-[15px] h-[72px] w-[72px] pointer-events-none',
	},
	{
		id: '4',
		title: 'Chat bot that integrates Spotify API',
		description: 'Test Description',
		image: TwitchLogo,
		link: 'google.com',
		tech: [JsLogo, TailwindLogo, SpotifyLogo, TwitchIcon],
		styling: 'text-[#6440A5] bg-[#9DA7FF]',
		imageStyling:
			'absolute bottom-[15px] right-[15px] h-[72px] w-[72px] pointer-events-none',
	},
];