'use client';
import anime from 'animejs';
import Image from 'next/image';
import { AnimatePresence } from 'framer-motion';
import { annotate } from 'rough-notation';
import { useEffect, useState, useRef } from 'react';
import {
	AiFillLinkedin,
	AiFillGithub,
	AiFillTwitterSquare,
} from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import RecentWorkModal from '../../components/RecentWorkModal';
import tempBackgroundImage from 'public/images/recent_work_placeholder.png';
import RecentWorkCard from '../../components/RecentWorkCard';

const demoList = [
	{
		title: 'AI Powered Task Manager for Software Engineers',
		description:
			"Introducing a task tracker thoughtfully designed for software engineers. Leveraging a modern tech stack including Next.js, Planetscale, Prisma, TypeScript, and TailwindCSS, the platform offers a tailored experience for managing software projects. What sets this tracker apart is its integration with OpenAI, providing intelligent, real-time tag and project suggestions as you type, streamlining the task creation process.\n\nBeyond task creation, the platform excels in its user-friendly features that enable easy task management. Users have the ability to assign priorities, set due dates, delegate team members, and tag tasks for effective categorization. This isn't merely a task tracker; it's a comprehensive solution aimed at making the lives of software engineers simpler, yet more efficient, in juggling multiple projects and responsibilities.",
		tech: ['React', 'TypeScript', 'TailwindCSS'],
		backgroundImage: tempBackgroundImage,
		link: 'https://dimension-assessment.vercel.app/',
	},
];

const INTRODUCTION_TEXT = {
	FIRST: ['hello', 'I am'],
	SECOND: ['sveiks', 'Nikolajs'],
};

export default function AboutPage() {
	const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
	const [selectedProject, setSelectedProject] = useState<any>(null);
	const linkedInRef = useRef<HTMLDivElement>(null);
	const githubRef = useRef<HTMLDivElement>(null);
	const twitterRef = useRef<HTMLDivElement>(null);
	const emailRef = useRef<HTMLDivElement>(null);
	const paragraphRef = useRef<HTMLDivElement>(null);

	const handleCardClick = (project: any) => {
		setSelectedProject(project);
		setIsFullScreen(true);
	};

	const handleClose = () => {
		setIsFullScreen(false);
		setSelectedProject(null);
	};

	// Animations for icons and annotation
	useEffect(() => {
		const iconTimeline = anime.timeline({
			easing: 'easeOutExpo',
			duration: 250,
			autoplay: true,
			delay: 150,
		});
		// Adding children to timeline
		iconTimeline
			.add({
				targets: linkedInRef.current,
				translateX: [-10, 0],
				opacity: [0, 1],
			})
			.add({
				targets: githubRef.current,
				translateX: [-10, 0],
				opacity: [0, 1],
			})
			.add({
				targets: twitterRef.current,
				translateX: [-10, 0],
				opacity: [0, 1],
			})
			.add({
				targets: emailRef.current,
				translateX: [-10, 0],
				opacity: [0, 1],
			});

		anime({
			autoplay: true,
			targets: paragraphRef.current,
			translateX: [100, 0],
			opacity: [0, 1],
			duration: 1000,
			delay: 100,
		});
	}, []);

	return (
		<div className='h-screen w-screen bg-ghost-white dark:bg-night flex items-start justify-start'>
			{/* This is your central container */}
			<div className='mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full max-w-3xl h-full'>
				{/* Your top section */}
				<div className='flex flex-col md:flex-row mx-auto pb-10 justify-start items-center'>
					<div className='flex flex-col md:flex-row'>
						<div className='flex flex-col text-4xl lg:text-5xl text-left font-extrabold text-night dark:text-ghost-white'>
							<h1 className=''>Nikolajs</h1>
							<h1 className=''>Veidis</h1>
						</div>
						<div className='w-full md:w-[500px] pl-0 md:pl-10 flex justify-center items-center select-none'>
							<p
								ref={paragraphRef}
								className='text-night dark:text-ghost-white text-base md:text-lg text-left '
							>
								I am a versatile software engineer currently based out of New
								York, NY with a distinctive blend of experience in web
								development, data analytics, and finance.
							</p>
						</div>
					</div>
				</div>

				{/* Your Cards/Items section */}
				<div className='flex flex-row mx-auto pb-10 justify-start items-center'>
					<div className='grid grid-cols-1 sm:grid-cols-2  gap-8'>
						{demoList.map((item, index) => (
							<RecentWorkCard
								key={index}
								project={item}
								onClick={() => handleCardClick(item)}
							/>
						))}
					</div>
					{isFullScreen && (
						<AnimatePresence>
							<RecentWorkModal
								key='recentWorkModal'
								project={selectedProject}
								isOpen={isFullScreen}
								onClose={handleClose}
							/>
						</AnimatePresence>
					)}
				</div>
			</div>
		</div>
	);
}
