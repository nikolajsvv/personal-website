import { PiCodeFill } from 'react-icons/pi';
import { BiSolidBank } from 'react-icons/bi';
import { RiAdvertisementFill } from 'react-icons/ri';
import Image from 'next/image';
import { ExperienceItemProp, IconMapType } from '@/types';

const ICON_MAP: IconMapType = {
	engineer: (
		<PiCodeFill className='h-[30px] w-[30px] md:h-[40px] md:w-[40px] text-night dark:text-ghost-white group-hover:text-neon-blue transition-all duration-500' />
	),
	bank: (
		<BiSolidBank className='h-[30px] w-[30px] md:h-[40px] md:w-[40px] text-night dark:text-ghost-white group-hover:text-neon-blue transition-all duration-500' />
	),
	ad: (
		<RiAdvertisementFill className='h-[30px] w-[30px] md:h-[40px] md:w-[40px] text-night dark:text-ghost-white group-hover:text-neon-blue transition-all duration-500' />
	),
};

export default function ExperienceItem({
	icon,
	title,
	description,
	tech,
}: ExperienceItemProp) {
	return (
		<div className='flex w-full pt-[30px] group'>
			<div className='pr-3 md:pr-8'>{ICON_MAP[icon]}</div>
			<div className='flex flex-col -translate-y-[6px] md:-translate-y-1'>
				<h1 className='text-[24px] font-semibold select-none tracking-tight group-hover:text-neon-blue transition-all duration-500'>
					{title}
				</h1>
				<p className='text-[16px] tracking-tight select-none cursor-default'>
					{description}
				</p>
				<div className='flex w-full space-x-7 mt-[20px]'>
					{tech.map((imgSrc, index) => (
						<Image
							src={imgSrc}
							alt={imgSrc}
							key={index}
							className='hover:scale-125 transition duration-300 select-none object-contain '
						/>
					))}
				</div>
			</div>
		</div>
	);
}
