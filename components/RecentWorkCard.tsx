import Image from 'next/image';
import { RecentWorkCardProps } from '../types';
import { useState } from 'react';

export default function RecentWorkCard({
	project,
	onClick,
}: RecentWorkCardProps) {
	const [showFullView, setShowFullView] = useState(false);
	const { title, backgroundImage } = project;

	const handleViewClick = () => {
		setShowFullView(!showFullView);
	};

	return (
		<div
			className='bg-white dark:bg-gray-800 p-4 shadow-default cursor-pointer transition-transform transform hover:scale-105'
			onClick={onClick}
		>
			<Image
				src={project.backgroundImage}
				alt='project-icon'
				className='mb-4'
			/>
			<h2 className='text-xl font-medium text-gray-800 dark:text-gray-100 mb-2'>
				{project.title}
			</h2>
		</div>
	);
}
