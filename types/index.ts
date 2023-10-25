import { StaticImageData } from 'next/image';

export interface Project {
	backgroundImage: StaticImageData;
	title: string;
	description: string;
	tech: string[];
	link: string;
}

export type RecentWorkCardProps = {
	project: Project;
	onClick: () => void;
};

export interface RecentWorkModalProps {
	project: Project;
	isOpen: boolean;
	onClose: () => void;
}
