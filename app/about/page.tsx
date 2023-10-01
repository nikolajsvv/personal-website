'use client';
import Image from 'next/image';
import currentProfileImg from 'public/images/profile_current.png';
import anime from 'animejs';
import { useEffect, useState, useRef } from 'react';

export default function AboutPage() {
	const [showSplash, setShowSplash] = useState(true);
	const leftTextRef = useRef<HTMLHeadingElement>(null);
	const rightTextRef = useRef<HTMLHeadingElement>(null);

	const leftTexts = ['hello', 'I am'];
	const rightTexts = ['sveiks', 'Nikolajs'];
	let leftIndex = 0;
	let rightIndex = 0;

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

	useEffect(() => {
		if (!showSplash) {
			const swapTexts = () => {
				// First, let's hide the text
				anime({
					targets: [leftTextRef.current, rightTextRef.current],
					translateY: [0, -100],
					opacity: [1, 0],
					duration: 1500,
					easing: 'easeOutExpo',
					complete: function () {
						if (leftTextRef.current && rightTextRef.current) {
							// Change the text here when it's invisible
							leftTextRef.current.innerHTML = leftTexts[leftIndex];
							rightTextRef.current.innerHTML = rightTexts[rightIndex];
							leftIndex = (leftIndex + 1) % leftTexts.length;
							rightIndex = (rightIndex + 1) % rightTexts.length;
						}
						// Then, let's show the text
						anime({
							targets: [leftTextRef.current, rightTextRef.current],
							translateY: [-100, 0],
							opacity: [0, 1],
							duration: 1500,
							easing: 'easeOutExpo',
						});
					},
				});
			};
			swapTexts(); // Run once immediately
			const intervalId = setInterval(swapTexts, 5000); // Run every 5 seconds

			return () => clearInterval(intervalId);
		}
	}, [showSplash]);

	return (
		<div className='h-screen flex items-center justify-center'>
			{showSplash ? (
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
				<div className='flex flex-col md:flex-row w-full justify-center items-center space-y-4 md:space-x-4 md:space-y-0'>
					<div className='flex-1 flex justify-end items-center'>
						<h1
							ref={leftTextRef}
							className='text-6xl md:text-7xl lg:text-8xl font-bold '
						>
							hello
						</h1>
					</div>
					<div className='flex-initial'>
						<Image
							src={currentProfileImg}
							alt={'Image of Nikolajs'}
							width={300}
							height={300}
							className='hidden md:inline w-48 md:w-64 lg:w-auto z-10'
						/>
					</div>
					<div className='flex-1 flex justify-start items-center'>
						<h1
							ref={rightTextRef}
							className='text-6xl md:text-7xl lg:text-8xl font-bold text-gray-500 '
						>
							sveiks
						</h1>
					</div>
				</div>
			)}
		</div>
	);
}
