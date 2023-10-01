import './globals.css';
import Head from 'next/head';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Nikolajs Veidis',
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
			<body className={`${inter.className} bg-soft-black text-white`}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
