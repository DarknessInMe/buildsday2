import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';

export const metadata: Metadata = {
	title: 'Buildsday2',
  	description: 'Collection of public builds for Payday 2 game',
};

export default function RootLayout({
	children,
}: Readonly<{
  	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body>
            <Navbar />
            <div className='container mx-auto pt-16'>
				   {children}
            </div>
			</body>
		</html>
	);
}
