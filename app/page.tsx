'use client';
import { useEffect, useState } from 'react';
import anime from 'animejs';

export default function Home() {
	// State to control whether the splash screen should be shown or not
	const [showSplash, setShowSplash] = useState(true);

	useEffect(() => {
		// Start the anime.js animation
		anime({
			targets: '.animate-dot',
			translateY: [
				{ value: -10, duration: 500 },
				{ value: 0, duration: 500 },
			],
			delay: anime.stagger(100),
			loop: true,
		});

		// Hide the splash screen after a certain duration (e.g., 3 seconds)
		const timeoutId = setTimeout(() => {
			setShowSplash(false);
		}, 3000);

		// Cleanup timeout on component unmount
		return () => clearTimeout(timeoutId);
	}, []);

	return (
		<div className='h-screen w-full'>
			{showSplash ? (
				// Splash Screen
				<div className='flex h-screen w-full items-center justify-center bg-gray-900'>
					<div className='space-x-2'>
						<span className='animate-dot bg-white w-4 h-4 rounded-full inline-block'></span>
						<span className='animate-dot bg-white w-4 h-4 rounded-full inline-block'></span>
						<span className='animate-dot bg-white w-4 h-4 rounded-full inline-block'></span>
					</div>
				</div>
			) : (
				// Your main home page content goes here
				<div>
					<h1>Home Page</h1>
				</div>
			)}
		</div>
	);
}
