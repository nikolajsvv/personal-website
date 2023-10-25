import { PiCodeFill } from 'react-icons/pi';
import { BiSolidBank } from 'react-icons/bi';
import { RiAdvertisementFill } from 'react-icons/ri';
import Image from 'next/image';

type ExperienceItemProp = {
	icon: string;
	title: string;
	description: string;
	tech: string[];
};

export default function ExperienceItem({
	icon,
	title,
	description,
	tech,
}: ExperienceItemProp) {
	return (
		<div className='flex w-full pt-[30px] group'>
			<div className='pr-3 md:pr-8'>
				{icon === 'engineer' && (
					<PiCodeFill className='h-[30px] w-[30px] md:h-[40px] md:w-[40px] text-night dark:text-ghost-white group-hover:scale-110 transition-transform duration-500' />
				)}
				{icon === 'bank' && (
					<BiSolidBank className='h-[30px] w-[30px] md:h-[40px] md:w-[40px] text-night dark:text-ghost-white group-hover:scale-110 transition-transform duration-500' />
				)}
				{icon === 'ad' && (
					<RiAdvertisementFill className='h-[30px] w-[30px] md:h-[40px] md:w-[40px] text-night dark:text-ghost-white group-hover:scale-110 transition-transform duration-500' />
				)}
			</div>
			<div className='flex flex-col -translate-y-[6px] md:-translate-y-1'>
				<h1 className='text-[24px] font-semibold group-hover:text-neon-blue transition-all select-none tracking-tight'>
					{title}
				</h1>
				<p className='text-[16px] tracking-tight select-none cursor-default'>
					{description}
				</p>
				<div className='flex w-full space-x-7 mt-[30px]'>
					{tech.map((imgSrc, index) => (
						<Image
							src={imgSrc}
							alt={imgSrc}
							key={index}
							className='hover:scale-125 transition duration-500 select-none object-contain'
						/>
					))}
				</div>
			</div>
		</div>
	);
}
