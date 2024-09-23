import type { Metadata } from 'next';
import './globals.css';

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
				{children}
			</body>
		</html>
	);
}
