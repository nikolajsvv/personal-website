'use client';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import CardComponent from '@/components/CardComponent';
import RecentWorkModal from '@/components/RecentWorkModal';
import { CardProps } from '@/types';
import {
	OpenAIIcon,
	JsPurple,
	D3Purple,
	TsPurple,
	NextPurple,
	TailwindPurple,
	DenoPurple,
	FigmaPurple,
	TwitchPurple,
	VercelPurple,
	SpotifyPurple,
	TaskManagerLogo,
	StanfordLogo,
	TwitchLogo,
	DenoLogo,
} from '@/utils/images';

const containerVariants = {
	hidden: { opacity: 1 },
	visible: {
		opacity: 1,
		transition: {
			when: 'beforeChildren',
			staggerChildren: 0.2, // Adjust for desired stagger delay
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 80 }, // Adjust for desired initial position
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			type: 'spring',
			stiffness: 50,
		},
	},
};

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
			<motion.div
				className='w-full'
				variants={containerVariants}
				viewport={{ once: true }}
				initial='hidden'
				animate='visible'
			>
				<motion.div
					drag='x'
					dragConstraints={{ right: 0, left: DRAG_LEFT_CONSTRAINT }}
					viewport={{ once: true }}
					onDrag={onDrag}
					className={`inner-carousel w-full flex space-x-8 ${cursorStyle}`}
				>
					<motion.div
						aria-label='button'
						onClick={() => onCardClick(tempData[0])}
						variants={itemVariants}
					>
						<CardComponent data={tempData[0]} />
					</motion.div>
					<motion.div
						aria-label='button'
						onClick={() => onCardClick(tempData[1])}
						variants={itemVariants}
					>
						<CardComponent data={tempData[1]} />
					</motion.div>
					<motion.div
						aria-label='button'
						onClick={() => onCardClick(tempData[2])}
						variants={itemVariants}
					>
						<CardComponent data={tempData[2]} />
					</motion.div>

					<motion.div
						aria-label='button'
						onClick={() => onCardClick(tempData[3])}
						variants={itemVariants}
					>
						<CardComponent data={tempData[3]} />
					</motion.div>
				</motion.div>
			</motion.div>

			<AnimatePresence>
				{isModalOpen && selectedCardData && (
					<RecentWorkModal
						key='recentWorkModal'
						cardData={selectedCardData}
						isOpen={isModalOpen}
						onClose={onModalClose}
					/>
				)}
			</AnimatePresence>
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
		tech: [
			OpenAIIcon,
			TsPurple,
			TailwindPurple,
			VercelPurple,
			NextPurple,
			FigmaPurple,
		],
		styling: 'text-night bg-[#CEBA9A]',
		imageStyling:
			'absolute bottom-[15px] right-[15px] h-[96px] w-[110px] pointer-events-none',
	},
	{
		id: '2',
		title: "A visual representation of students' semester-long course work.",
		description:
			"My first professional engagement as a software engineer was a web development contract for Stanford University's Environmental Humanities department. Although I had previously created websites for personal projects, this was my inaugural venture into professional web development. The prospect was both intimidating and exhilarating.\n\nThe journey began with gathering expectations and design preferences from the Environmental Humanities team. While they provided some examples of designs they admired, much of the creative liberty was mine to take. I delved into research and inspiration, crafting 4-5 comprehensive mockups in Figma before settling on the final design. With the team's approval, I transitioned into the coding phase.\n\nThe department sought a visually captivating platform to showcase their students' semester-long achievements, laden with imagery and animations. I opted for Framer Motion for animations—its simplicity and customizable setup resonated with me. For styling, TailwindCSS was my go-to, and React served as the initial framework for building the website.\n\nUpon completing the first draft, I encountered performance issues, largely attributed to the heavy use of images. Given the stipulation for a serverless, cost-free solution, I had to get creative. I serialized all student work—essays, poems, etc.—into JSON format, a cumbersome but effective way to improve site speed. Still grappling with image-related performance issues, I took the significant step of migrating the codebase to Next.js. This move paid off instantly, boosting performance and reducing initial page load times.\n\nWhile I consider the project a success, it was also a learning experience. In hindsight, I would've benefited from clarifying design expectations upfront, enabling a more structured approach to the design phase. Another lesson was the importance of pre-assessing the technical needs of a project; had I initially recognized the performance constraints, I would have opted for Next.js from the get-go. Despite the bumps along the way, this project was pivotal in my growth as an engineer, and I'm incredibly proud of the end result.",
		image: StanfordLogo,
		link: 'https://stanford-website.vercel.app/',
		tech: [TsPurple, TailwindPurple, NextPurple, FigmaPurple],
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
		link: 'https://d3nodata.deno.dev/',
		tech: [D3Purple, TsPurple, DenoPurple],
		styling: 'text-black bg-[#FFFFFF]',
		imageStyling:
			'absolute bottom-[15px] right-[15px] h-[72px] w-[72px] pointer-events-none',
	},
	{
		id: '4',
		title: 'Chat bot that integrates Spotify API',
		description:
			"During peak COVID time, I was introduced to the streaming world on Twitch. Though I wasn't a streamer myself, I became captivated by the vibrant community and its eclectic array of content. Intrigued by the technological opportunities Twitch presented, I began frequenting various streams to chat and, more importantly, to listen. Streamers often mentioned their desire for a more streamlined way to display their music selections to their audiences. While existing plugins and solutions existed, none felt just right.\n\nFueled by this gap, I set out to develop a Twitch bot integrated with Spotify. My goal was twofold: firstly, to allow streamers to automatically showcase their current playlist on their OBS layouts, and secondly, to enable chat interactions to retrieve information about the music being played. To do this, I immersed myself in the worlds of both the Twitch and Spotify APIs.\n\nThe journey was a profound learning curve, not only in grasping the intricacies of each API but also in understanding how they could harmoniously work together. The project was developed using Node.js, and after several iterations, I had a functional application that achieved my initial goals. Streamers could link their Spotify accounts, effortlessly updating their audiences about their current musical choices, while viewers could interact with the chatbot to learn more about the tunes filling the airwaves.\n\nThe experience was both enriching and eye-opening. It not only broadened my understanding of APIs but also gave me a firsthand look at solving a problem for a very engaged community. Each step, from conceptualization to deployment, was a lesson in the potential for technology to enhance user engagement and community interaction. As a developer, this project not only honed my technical skills but also offered a valuable glimpse into the transformative power of technology in community-building.",
		image: TwitchLogo,
		link: 'https://github.com/nikolajsvv/TwitchSpotifyIntegration',
		tech: [JsPurple, TailwindPurple, SpotifyPurple, TwitchPurple],
		styling: 'text-[#6440A5] bg-[#9DA7FF]',
		imageStyling:
			'absolute bottom-[15px] right-[15px] h-[72px] w-[72px] pointer-events-none',
	},
];
