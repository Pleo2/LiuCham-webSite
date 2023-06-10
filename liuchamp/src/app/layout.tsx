import './globals.css'
import { inter, graphik, blacker, blackerRegular } from '@/fonts'

export const metadata = {
	title: 'Liuchamp',
	description: 'Mouseum, Events, art, Tours & shop',
}

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
	return (
		<html
			className={`${inter.variable} ${graphik.variable} ${blacker.variable} ${blackerRegular.variable}`}
			lang="en"
		>
			<head>
				<link rel="shortcut icon" href="
				/louvre-pyramid.svg" />
			</head>
			<body className="overflow-x-hidden">{children}</body>
		</html>
	)
}
