import type { Metadata } from 'next';
import { Smooch_Sans } from 'next/font/google';
import './globals.css';

const smooch = Smooch_Sans({
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${smooch.className} antialiased min-h-screen bg-slate-100`}
			>
				{children}
			</body>
		</html>
	);
}
