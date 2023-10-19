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
import RecentWorkCard from '../../components/RecentWorkCard';

export default function AboutPage() {
	const [text, setText] = useState({ first: 'hello', second: 'sveiks' });
	const helloRef = useRef(null);
	const sveiksRef = useRef(null);
	const slashRef = useRef(null);
	const austinRef = useRef<HTMLDivElement>(null);

	// useEffect(() => {
	// 	anime({
	// 		targets: [helloRef.current, sveiksRef.current],
	// 		translateY: [-100, 0],
	// 		opacity: [0, 1],
	// 		duration: 1500,
	// 		easing: 'easeOutExpo',
	// 		delay: anime.stagger(200),
	// 	});

	// 	anime
	// 		.timeline({
	// 			targets: slashRef.current,
	// 			duration: 1500,
	// 			easing: 'easeOutExpo',
	// 		})
	// 		.add({
	// 			translateX: [-50, 0],
	// 			opacity: [0, 1],
	// 		});

	// 	const intervalId = setInterval(() => {
	// 		if (text.first === 'hello') {
	// 			setText({ first: 'I am', second: 'Nikolajs' });
	// 		} else {
	// 			setText({ first: 'hello', second: 'sveiks' });
	// 		}
	// 	}, 5000);

	// 	return () => clearInterval(intervalId);
	// }, [text]);

	// useEffect(() => {
	// 	const annotation = annotate(austinRef.current!, {
	// 		type: 'highlight',
	// 		color: '#EF3E36',
	// 		iterations: 2,
	// 	});

	// 	annotation.show();
	// }, []);

	return (
		<div className='h-screen w-screen'>
			<div className='w-full h-1/2 flex flex-col md:flex-row justify-center items-center'>
				<div className='flex flex-col'>
					<div className='flex flex-row items-center justify-center cursor-default text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl uppercase'>
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
						<a
							href='https://www.linkedin.com/in/nikolajsveidis/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<AiFillLinkedin className='text-night dark:text-ghost-white h-8 w-8 md:h-10 md:w-10 cursor-pointer hover:scale-125 hover:text-vermilion hover:dark:text-vermilion transform duration-200' />
						</a>
						<a
							href='https://github.com/nikolajsvv'
							target='_blank'
							rel='noopener noreferrer'
						>
							<AiFillGithub className='text-night dark:text-ghost-white h-8 w-8 md:h-10 md:w-10 cursor-pointer hover:scale-125 hover:text-vermilion hover:dark:text-vermilion transform duration-200' />
						</a>
						<a
							href='https://twitter.com/_nikolajs'
							target='_blank'
							rel='noopener noreferrer'
						>
							<AiFillTwitterSquare className='text-night dark:text-ghost-white h-8 w-8 md:h-10 md:w-10 cursor-pointer hover:scale-125 hover:text-vermilion hover:dark:text-vermilion transform duration-200' />
						</a>
						<a
							href='mailto:nikolajsvv@gmail.com'
							target='_blank'
							rel='noopener noreferrer'
						>
							<MdEmail className='text-night dark:text-ghost-white h-8 w-8 md:h-10 md:w-10 cursor-pointer hover:scale-125 hover:text-vermilion hover:dark:text-vermilion transform duration-200' />
						</a>
					</div>
				</div>
				<div className='flex w-full md:w-1/3 items-center justify-center p-4 uppercase'>
					<p className='text-dim-gray dark:text-ghost-white text-lg md:text-xl text-center md:text-left'>
						I am a versatile software engineer currently based in
						<span ref={austinRef} className='mx-2'>
							{' '}
							Austin, TX{' '}
						</span>
						with a distinctive blend of experience in web development, data
						analytics, and finance.
					</p>
				</div>
			</div>
			<div className='flex flex-col justify-start items-start'>
				<h1 className='text-2xl font-bold uppercase'>Recent Work</h1>
				<RecentWorkCard />
			</div>
		</div>
	);
}
