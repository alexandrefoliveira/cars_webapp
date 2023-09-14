import './globals.css';
import type { Metadata } from 'next';
import { Navbar, Footer } from '@/components';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'CarHub',
	description: 'Discover your best car',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className='relative'>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
