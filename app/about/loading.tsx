'use client';
import anime from 'animejs';
import Image from 'next/image';
import currentProfileImg from 'public/images/profile_current.png';
import { useEffect } from 'react';

export default function Loading() {
	useEffect(() => {
		anime({
			targets: '.animatedImage',
			opacity: [0, 1],
			scale: [0.5, 1],
			duration: 2000,
			easing: 'easeOutCubic',
		});
	}, []);
	return (
		<div className='animatedImage flex h-screen w-full items-center justify-center bg-night '>
			<Image
				src={currentProfileImg}
				alt='Image of Nikolajs'
				width={300}
				height={300}
				className='animate-splash-spin'
			/>
		</div>
	);
}
