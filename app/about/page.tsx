'use client';
import Image from 'next/image';
import currentProfileImg from 'public/images/profile_current.png';
import anime from 'animejs';
import { useEffect, useState } from 'react';

export default function AboutPage() {
	const [showSplash, setShowSplash] = useState(true);
	useEffect(() => {
		// Start the anime.js animation
		anime({
			targets: '#animatedImage',
			opacity: [0, 1], // Fade in
			scale: [0.5, 1], // Scale up from 50% to 100%
			duration: 2000, // Duration of 2 seconds
			easing: 'easeOutCubic', // Easing function for smoothness
		});
		// Hide the splash screen after a certain duration (e.g., 3 seconds)
		const timeoutId = setTimeout(() => {
			setShowSplash(false);
		}, 3000);

		// Cleanup timeout on component unmount
		return () => clearTimeout(timeoutId);
	}, []);

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
				<div className='flex flex-row w-full justify-center items-center'>
					<h1 className='translate-x-12 text-8xl font-bold'>hello</h1>
					<Image
						src={currentProfileImg}
						alt={'Image of Nikolajs'}
						width={300}
						height={300}
					/>
					<h1 className='-translate-x-12 text-8xl font-bold text-gray-500'>
						sveiks
					</h1>
				</div>
			)}
		</div>
	);
}
