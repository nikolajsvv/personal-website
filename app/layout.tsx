import './globals.css';
import Head from 'next/head';
import type { Metadata } from 'next';
import { Maven_Pro } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
// import Navbar from '../components/Navbar';

const mavenPro = Maven_Pro({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Nikolajs Veidis',
	description:
		"Nikolajs' personal website showcasing a curated selection of his work and professional experience in software engineering.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<Head>
				<link
					rel='icon'
					href='/icon?<generated>'
					type='image/<generated>'
					sizes='<generated>'
				/>
			</Head>
			<body className={`${mavenPro.className} bg-ghost-white dark:bg-night`}>
				{/* <Navbar /> */}
				{children}
				<Analytics />
			</body>
		</html>
	);
}
