'use client';
import Link from 'next/link';
export default function Navbar() {
	const sections = ['about', 'work', 'contact'];
	return (
		<div className='flex fixed z-50 w-full justify-end items-center p-3 md:p-5'>
			<nav>
				<ul className='space-x-10'>
					{sections.map((section) => (
						<Link
							key={section}
							href={`/${section}`}
							className='hover:hover:border-b-2 border-white'
						>
							{section}
						</Link>
					))}
				</ul>
			</nav>
		</div>
	);
}
