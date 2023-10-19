'use client';
import anime from 'animejs';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import {
	AiFillLinkedin,
	AiFillGithub,
	AiFillTwitterSquare,
} from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { annotate } from 'rough-notation';
import RecentWorkCard from '../components/RecentWorkCard';

export default function AboutPage() {
	const [text, setText] = useState({ first: 'hello', second: 'sveiks' });
	const helloRef = useRef(null);
	const sveiksRef = useRef(null);
	const slashRef = useRef(null);
	const austinRef = useRef<HTMLDivElement>(null);
	const linkedInRef = useRef<HTMLDivElement>(null);
	const githubRef = useRef<HTMLDivElement>(null);
	const twitterRef = useRef<HTMLDivElement>(null);
	const emailRef = useRef<HTMLDivElement>(null);
	const paragraphRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		anime({
			targets: [helloRef.current, sveiksRef.current],
			translateY: [-100, 0],
			opacity: [0, 1],
			duration: 1500,
			easing: 'easeOutExpo',
			delay: anime.stagger(200),
		});

		anime
			.timeline({
				targets: slashRef.current,
				duration: 1500,
				easing: 'easeOutExpo',
			})
			.add({
				translateX: [-50, 0],
				opacity: [0, 1],
			});

		const intervalId = setInterval(() => {
			if (text.first === 'hello') {
				setText({ first: 'I am', second: 'Nikolajs' });
			} else {
				setText({ first: 'hello', second: 'sveiks' });
			}
		}, 5000);

		return () => clearInterval(intervalId);
	}, [text]);

	// Animations for icons and annotation
	useEffect(() => {
		const iconTimeline = anime.timeline({
			easing: 'easeOutExpo',
			duration: 250,
			autoplay: true,
			delay: 100,
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

		// Rough notation for Austin, TX
		const annotation = annotate(austinRef.current!, {
			type: 'highlight',
			color: '#EF3E36',
			iterations: 2,
		});
		setTimeout(() => annotation.show(), 1000);
	}, []);

	return (
		<div className='h-screen leading-5 tracking-custom'>
			<div className='h-full flex flex-col items-center pt-20 md:pt-0 md:justify-center'>
				<div className='flex flex-col md:flex-row items-center justify-center cursor-default text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl uppercase'>
					<div className='flex flex-col w-full md:w-1/2 justify-center items-center'>
						<div className='flex flex-row items-center justify-center'>
							<h1
								ref={helloRef}
								className='font-bold text-night dark:text-ghost-white'
							>
								{text.first}
							</h1>
							<h1 ref={slashRef} className='font-bold text-vermilion px-3'>
								/
							</h1>
							<h1
								ref={sveiksRef}
								className='font-bold text-night dark:text-ghost-white'
							>
								{text.second}
							</h1>
						</div>
						<div className='hidden md:flex flex-row mt-8 space-x-10 justify-center items-center'>
							<div ref={linkedInRef}>
								<a
									href='https://www.linkedin.com/in/nikolajsveidis/'
									target='_blank'
									rel='noopener noreferrer'
								>
									<AiFillLinkedin className='text-night dark:text-ghost-white h-8 w-8 md:h-10 md:w-10 cursor-pointer hover:scale-125 hover:text-vermilion hover:dark:text-vermilion transform duration-300' />
								</a>
							</div>
							<div ref={githubRef}>
								<a
									href='https://github.com/nikolajsvv'
									target='_blank'
									rel='noopener noreferrer'
								>
									<AiFillGithub className='text-night dark:text-ghost-white h-8 w-8 md:h-10 md:w-10 cursor-pointer hover:scale-125 hover:text-vermilion hover:dark:text-vermilion transform duration-300' />
								</a>
							</div>
							<div ref={twitterRef}>
								<a
									href='https://twitter.com/_nikolajs'
									target='_blank'
									rel='noopener noreferrer'
								>
									<AiFillTwitterSquare className='text-night dark:text-ghost-white h-8 w-8 md:h-10 md:w-10 cursor-pointer hover:scale-125 hover:text-vermilion hover:dark:text-vermilion transform duration-300' />
								</a>
							</div>
							<div ref={emailRef}>
								<a
									href='mailto:nikolajsvv@gmail.com'
									target='_blank'
									rel='noopener noreferrer'
								>
									<MdEmail className='text-night dark:text-ghost-white h-8 w-8 md:h-10 md:w-10 cursor-pointer hover:scale-125 hover:text-vermilion hover:dark:text-vermilion transform duration-300' />
								</a>
							</div>
						</div>
					</div>
					<div className='flex w-full md:w-1/3 items-center justify-center p-4 mt-10'>
						<p
							ref={paragraphRef}
							className='text-dim-gray dark:text-ghost-white text-lg md:text-xl text-center md:text-left'
						>
							I am a versatile software engineer currently based in
							<span ref={austinRef} className='mx-2'>
								{' '}
								Austin, TX{' '}
							</span>
							with a distinctive blend of experience in web development, data
							analytics, and finance.
						</p>
					</div>
					<div className='flex flex-row mt-8 space-x-10 justify-center items-center md:hidden'>
						<AiFillLinkedin className='text-night dark:text-ghost-white h-8 w-8 md:h-10 md:w-10 cursor-pointer hover:scale-125 hover:text-vermilion hover:dark:text-vermilion transform duration-200' />
						<AiFillGithub className='text-night dark:text-ghost-white h-8 w-8 md:h-10 md:w-10 cursor-pointer hover:scale-125 hover:text-vermilion hover:dark:text-vermilion transform duration-200' />
						<AiFillTwitterSquare className='text-night dark:text-ghost-white h-8 w-8 md:h-10 md:w-10 cursor-pointer hover:scale-125 hover:text-vermilion hover:dark:text-vermilion transform duration-200' />
						<MdEmail className='text-night dark:text-ghost-white h-8 w-8 md:h-10 md:w-10 cursor-pointer hover:scale-125 hover:text-vermilion hover:dark:text-vermilion transform duration-200' />
					</div>
				</div>
				<div className='mt-20 flex flex-col justify-start items-start'>
					<h1 className='text-2xl font-bold uppercase'>Recent Work</h1>
					<RecentWorkCard />
				</div>
			</div>
		</div>
	);
}
