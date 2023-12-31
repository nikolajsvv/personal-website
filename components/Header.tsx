'use client';
import { FaGithub, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';
import { motion } from 'framer-motion';

const titleVariants = {
	hidden: {
		opacity: 0,
		y: 10,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.2,
		},
	},
};

const descriptionVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 0.2,
			delay: 0.4,
		},
	},
};

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			when: 'beforeChildren',
			staggerChildren: 0.2,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			type: 'spring',
			stiffness: 200,
		},
	},
};

export default function Header() {
	return (
		<section className='flex flex-col justify-start sm:items-center sm:w-650 w-full mt-10 select-none'>
			<div className='flex flex-col sm:flex-row p-5 md:p-3 sm:items-center'>
				<motion.h1
					variants={titleVariants}
					initial='hidden'
					animate='visible'
					className='text-[40px] font-extrabold mr-[75px] w-1/3 md:w-full tracking-normal leading-10'
				>
					Nikolajs Veidis
				</motion.h1>
				<motion.p
					variants={descriptionVariants}
					initial='hidden'
					animate='visible'
					className='text-[16px] font-semibold tracking-tight pt-4 sm:pt-0 translate-y-2'
				>
					I am a versatile software engineer currently based out of New York, NY
					with a distinctive blend of experience in web development, data
					analytics, and finance.
				</motion.p>
			</div>
			<motion.div
				className='flex justify-start items-start w-full space-x-[30px] p-5 md:p-3 text-night dark:text-ghost-white'
				variants={containerVariants}
				initial='hidden'
				animate='visible'
			>
				<motion.a
					href='https://github.com/nikolajsvv'
					target='_blank'
					aria-label='navigation'
					rel='noreferrer noopener'
					variants={itemVariants}
				>
					<FaGithub className='w-[30px] h-[30px]  cursor-pointer hover:scale-125 hover:text-neon-blue transition-transform duration-500' />
				</motion.a>
				<motion.a
					href='https://www.linkedin.com/in/nikolajsveidis'
					target='_blank'
					aria-label='navigation'
					rel='noreferrer noopener'
					variants={itemVariants}
				>
					<FaLinkedin className='w-[30px] h-[30px] cursor-pointer hover:scale-125 hover:text-neon-blue transition-transform duration-500' />
				</motion.a>
				<motion.a
					href='mailto:nikolajsvv@gmail.com'
					target='_blank'
					aria-label='navigation'
					rel='noreferrer noopener'
					variants={itemVariants}
				>
					<IoMail className='w-[30px] h-[30px] cursor-pointer hover:scale-125 hover:text-neon-blue transition-transform duration-500' />
				</motion.a>
				<motion.a
					href='https://twitter.com/_nikolajs'
					target='_blank'
					aria-label='navigation'
					rel='noreferrer noopener'
					variants={itemVariants}
				>
					<FaTwitterSquare className='w-[30px] h-[30px] cursor-pointer hover:scale-125 hover:text-neon-blue transition-transform duration-500' />
				</motion.a>
			</motion.div>
		</section>
	);
}
