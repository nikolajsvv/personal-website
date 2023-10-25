import Image from 'next/image';
import { CardComponentProps } from '@/types';

export default function CardComponent({ data }: CardComponentProps) {
	const { title, image, styling, imageStyling } = data;

	return (
		<div
			className={`${styling} h-[350px] w-[250px] md:h-[400px] md:w-[300px] cursor-pointer relative shadow-default hover:-translate-y-3 transition-all duration-500`}
		>
			<h1 className='absolute right-0 w-full md:w-2/3 text-[20px] pt-[30px] pr-[8px] font-semibold text-right tracking-tight leading-5'>
				{title}
			</h1>
			<Image src={image} alt={title} className={imageStyling} />
		</div>
	);
}
