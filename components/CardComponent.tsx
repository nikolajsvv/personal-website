import Image from 'next/image';
import {
	TaskManagerLogo,
	StanfordLogo,
	DenoLogo,
	TwitchLogo,
} from '@/utils/images';

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
	const { id, title, description, image, tech, link, styling, imageStyling } =
		data;
	return (
		<div className={`${styling} h-[257px] w-[197px] cursor-pointer relative`}>
			<h1 className='text-[16px] pt-[30px] pr-[6px] text-right tracking-tight leading-5'>
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
