'use client';
import anime from 'animejs';
import { useEffect } from 'react';

export default function Loading() {
	useEffect(() => {
		anime({
			targets: '.animate-dot',
			translateY: [
				{ value: -10, duration: 500 },
				{ value: 0, duration: 500 },
			],
			delay: anime.stagger(100),
			loop: true,
		});
	}, []);
	return (
		<div className='flex h-screen w-full items-center justify-center bg-night'>
			<div className='space-x-2'>
				<span className='animate-dot bg-white w-4 h-4 rounded-full inline-block'></span>
				<span className='animate-dot bg-white w-4 h-4 rounded-full inline-block'></span>
				<span className='animate-dot bg-white w-4 h-4 rounded-full inline-block'></span>
			</div>
		</div>
	);
}
