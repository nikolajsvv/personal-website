'use client';
import { useEffect } from 'react';
import { MdDarkMode } from 'react-icons/md';

export default function Navbar() {
	const toggleDarkMode = () => {
		document.documentElement.classList.toggle('dark');
	};

	useEffect(() => {
		const darkModeToggle = document.getElementById('darkModeToggle')!;
		darkModeToggle.addEventListener('click', toggleDarkMode);

		// Automatically enable dark mode
		document.documentElement.classList.add('dark');

		return () => {
			darkModeToggle.removeEventListener('click', toggleDarkMode);
		};
	}, []);

	return (
		<div className='flex fixed z-50 w-full justify-end items-center p-3 md:p-5 text-night dark:text-ghost-white uppercase '>
			<div>
				<button id='darkModeToggle'>
					<MdDarkMode className='text-night dark:text-ghost-white h-8 w-8 hover:scale-125 transform duration-200 ' />
				</button>
			</div>
		</div>
	);
}
