import ExperienceItem from './ExperienceItem';
import {
	NextLogo,
	VercelLogo,
	TailwindLogo,
	TsLogo,
	FigmaLogo,
	ExcelLogo,
	DataIcon,
	BloombergLogo,
	VBAIcon,
	SalesIcon,
	StrategyIcon,
	BudgetingIcon,
} from '@/utils/images';

export default function Experience() {
	return (
		<section className='flex flex-col sm:items-start sm:w-650 w-full mt-10 p-5 md:p-3 mb-20'>
			<h1 className='text-[24px] font-bold'>Experience</h1>
			<div className='space-y-6'>
				<ExperienceItem
					icon='engineer'
					title='Freelance developer'
					description='As showcased in my recent work, I worked as a freelance web developer.
					My latest freelance project was with Stanford University where
					designed, developed, and maintained the website for a course in the
					Environmental Humanities department.'
					tech={[VercelLogo, NextLogo, TailwindLogo, TsLogo, FigmaLogo]}
				/>
				<ExperienceItem
					icon='bank'
					title='Analyst'
					description='I worked as an analyst at Nomura Corporate Research & Asset Management. In this role, I evolved from overseeing trade operations to becoming a trading assistant, directly working with portfolio managers. Throughout my three-years, I transformed trading flows for more than 80 clients by diligently crafting sophisticated VBA applications and harnessing the power of Bloomberg BQL, markedly refining our operational efficiency.'
					tech={[ExcelLogo, DataIcon, BloombergLogo, VBAIcon]}
				/>
				<ExperienceItem
					icon='ad'
					title='Co-founder'
					description='What began as a humble hustle for a broke college student quickly transformed into my own guerilla advertising venture, Ad Apes Media. Concentrating on wild posting, digital projections, and stickering, we made our mark by providing the most competitive prices in New York City. Our diverse portfolio boasted collaborations with clients ranging from NFT collections to high fashion brands.'
					tech={[SalesIcon, StrategyIcon, BudgetingIcon]}
				/>
			</div>
		</section>
	);
}
