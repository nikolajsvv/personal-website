import { FaGithub, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';
export default function Header() {
	return (
		<section className='flex flex-col justify-start sm:items-center sm:w-650 w-full mt-10'>
			<div className='flex flex-col sm:flex-row p-5 sm:p-3 sm:items-center'>
				<h1 className='text-[40px] font-bold mr-[75px] w-1/3 md:w-full tracking-normal leading-10'>
					Nikolajs Veidis
				</h1>
				<p className='text-[16px] font-bold tracking-tight pt-4 sm:pt-0 '>
					I am a versatile software engineer currently based out of New York, NY
					with a distinctive blend of experience in web development, data
					analytics, and finance.
				</p>
			</div>
			<div className='flex justify-start items-start w-full space-x-[30px] p-5 sm:p-3 text-night dark:text-ghost-white '>
				<FaGithub className='w-[30px] h-[30px]  cursor-pointer hover:scale-125 hover:text-neon-blue transition-all duration-300' />
				<FaLinkedin className='w-[30px] h-[30px] cursor-pointer hover:scale-125 hover:text-neon-blue transition-all duration-300' />
				<IoMail className='w-[30px] h-[30px] cursor-pointer hover:scale-125 hover:text-neon-blue transition-all duration-300' />
				<FaTwitterSquare className='w-[30px] h-[30px] cursor-pointer hover:scale-125 hover:text-neon-blue transition-all duration-300' />
			</div>
		</section>
	);
}
