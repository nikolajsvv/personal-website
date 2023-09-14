// Determine how to fetch the data for the portfolios
//    - JSON (pull data from JSON files)
// Style the basic design for the portfolios using TailwindCSS (mobile, iPad, desktop)
// Implement animejs animations
import fsPromises from 'fs/promises';
import path from 'path';

export default function DemoPage() {
	return (
		<section className='flex h-screen items-center'>
			<div
				id='macbook-layout'
				className='w-1/2 h-[400px] md:h-[600px] lg:h-[800px] overflow-y-auto relative p-2 flex flex-col'
			>
				<div
					id='macbook-top-bar'
					className='top-0 rounded-t-xl bg-slate-300 flex items-center justify-start p-2'
				>
					<span className='mr-1.5 w-3 h-3 rounded-full bg-red-500'></span>
					<span className='mr-1.5 w-3 h-3 rounded-full bg-yellow-400'></span>
					<span className='mr-1.5 w-3 h-3 rounded-full bg-green-500'></span>
				</div>
				<div
					id='macbook-content'
					className='border-slate-300 border-solid border-2 h-96 flex justify-center items-center flex-grow'
				>
					<h1>Image Content</h1>
				</div>
			</div>
			<div
				id='content-layout'
				className='flex flex-col w-1/2 h-[300px] md:h-[500px] lg:h-[700px] overflow-y-auto bg-slate-300 text-slate-800 relative p-2'
			>
				{/* Title */}
				<h1 className='text-3xl pb-2'>Title</h1>
				<span className='bg-slate-800 w-full h-0.5'></span>

				{/* Description */}
				<p className='pt-3 flex-grow'>Description</p>

				{/* Tech Stack */}
				<div className='flex flex-wrap mb-1'>
					<div className='bg-slate-400 relative mr-2 w-40 md:w-48 lg:w-56'>
						<span className='absolute left-0 h-full w-1 bg-red-500'></span>
						<p className='pl-2 p-1'>Tech</p>
					</div>
					<div className='bg-slate-400 relative mr-2 w-40 md:w-48 lg:w-56'>
						<span className='absolute left-0 h-full w-1 bg-red-500'></span>
						<p className='pl-2 p-1'>Tech</p>
					</div>
				</div>

				{/* Link/s */}
				<button className='absolute bottom-0 right-0 bg-slate-500 w-40 h-12'>
					View Code
				</button>
			</div>
		</section>
	);
}

// export async function getStaticProps() {
// 	const filePath = path.join(process.cwd(), 'projects.json');
// 	const jsonData = await fsPromises.readFile(filePath);
// 	const objectData = JSON.parse(jsonData);
// 	return objectData;
// }
