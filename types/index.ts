import { StaticImageData } from 'next/image';

export interface RecentWorkModalProps {
	cardData: CardProps;
	isOpen: boolean;
	onClose: () => void;
}

export type CardProps = {
	id: string;
	title: string;
	description: string;
	image: string | StaticImageData;
	tech: string[];
	link: string;
	styling: string;
	imageStyling: string;
};

export interface CardComponentProps {
	data: CardProps;
}
