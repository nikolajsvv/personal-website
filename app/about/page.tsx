'use client';
import Image from 'next/image';
import currentProfileImg from 'public/images/profile_current.png';
import anime from 'animejs';
import { useEffect, useState, useRef } from 'react';

export default function AboutPage() {
	const [showSplash, setShowSplash] = useState(true);
	const helloRef = useRef(null);
	const sveiksRef = useRef(null);

	useEffect(() => {
		anime({
			targets: '#animatedImage',
			opacity: [0, 1],
			scale: [0.5, 1],
			duration: 2000,
			easing: 'easeOutCubic',
		});

		const timeoutId = setTimeout(() => {
			setShowSplash(false);
		}, 3000);

		return () => clearTimeout(timeoutId);
	}, []);

	// New useEffect to handle animations for hello and sveiks
	useEffect(() => {
		if (!showSplash) {
			anime({
				targets: [helloRef.current, sveiksRef.current],
				translateY: [-100, 0],
				opacity: [0, 1],
				duration: 1500,
				easing: 'easeOutExpo',
				delay: anime.stagger(200),
			});
		}
	}, [showSplash]); // Dependency array ensures this useEffect runs when showSplash changes

	return (
		<div className='h-screen flex'>
			{showSplash ? (
				// Splash Screen
				<div className='flex h-screen w-full items-center justify-center bg-gray-900'>
					<Image
						src={currentProfileImg}
						alt='Image of Nikolajs'
						id='animatedImage'
						width={200}
						height={200}
					/>
				</div>
			) : (
				<div className='flex flex-col md:flex-row w-full justify-center items-center'>
					<h1
						ref={helloRef}
						className='text-6xl md:text-8xl font-bold mb-4 md:mb-0 md:translate-x-12'
					>
						hello
					</h1>
					<Image
						src={currentProfileImg}
						alt={'Image of Nikolajs'}
						width={300}
						height={300}
						className='hidden md:inline z-10'
					/>
					<h1
						ref={sveiksRef}
						className='text-6xl md:text-8xl font-bold text-gray-500 mt-4 md:mt-0 md:-translate-x-12'
					>
						sveiks
					</h1>
				</div>
			)}
		</div>
	);
}
