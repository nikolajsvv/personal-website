import Image from 'next/image';
import {
	TaskManagerLogo,
	StanfordLogo,
	DenoLogo,
	TwitchLogo,
} from '@/utils/images';
import { useState } from 'react';

interface CardComponentProps {
	data: CardProps;
}

type CardProps = {
	id: string;
	title: string;
	description: string;
	image: string;
	tech: string[];
	link: string;
	styling: string;
	imageStyling: string;
};

type GenerateImageProps = {
	image: string;
	imageStyling: string;
};

export default function CardComponent({ data }: CardComponentProps) {
	const [showFullView, setShowFullView] = useState(false);

	const { title, image, styling, imageStyling } = data;

	return (
		<div
			className={`${styling} h-[350px] w-[250px] md:h-[400px] md:w-[300px] cursor-pointer relative shadow-default hover:-translate-y-3 transition-all duration-500`}
		>
			<h1 className='absolute right-0 w-full md:w-2/3 text-[20px] pt-[30px] pr-[8px] font-semibold text-right tracking-tight leading-5'>
				{title}
			</h1>
			<GenerateImage image={image} imageStyling={imageStyling} />
		</div>
	);
}

function GenerateImage({ image, imageStyling }: GenerateImageProps) {
	if (image === 'TaskManagerLogo')
		return (
			<Image src={TaskManagerLogo} alt='Task  Logo' className={imageStyling} />
		);
	if (image === 'StanfordLogo')
		return (
			<Image src={StanfordLogo} alt='Stanford Logo' className={imageStyling} />
		);
	if (image === 'DenoLogo')
		return <Image src={DenoLogo} alt='Deno Logo' className={imageStyling} />;

	if (image === 'TwitchLogo')
		return (
			<Image src={TwitchLogo} alt='Twitch Logo' className={imageStyling} />
		);
}
