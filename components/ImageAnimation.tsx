import { useEffect } from 'react';
import anime from 'animejs';
import Image from 'next/image';

export default function ImageAnimation() {
	useEffect(() => {
		anime({
			targets: '#animatedImage',
			opacity: [0, 1], // Fade in
			scale: [0.5, 1], // Scale up from 50% to 100%
			duration: 2000, // Duration of 2 seconds
			easing: 'easeOutCubic', // Easing function for smoothness
		});
	}, []);

	return (
		<div className='flex h-screen w-full items-center justify-center bg-gray-900'>
			<Image
				src='/public/images/profile_current.png'
				alt='Profile image of Nikolajs'
				id='animatedImage'
			/>
		</div>
	);
}
