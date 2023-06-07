import './globals.css'
import { inter, bodoniModa, graphik, blacker, blackerRegular } from '@/fonts'

export const metadata = {
	title: 'Liuchamp',
	description: 'Mouseum, Events, art, Tours & shop',
}

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
	return (
		<html
			className={`${inter.variable} ${bodoniModa.variable} ${graphik.variable} ${blacker.variable} ${blackerRegular.variable}`}
			lang="en"
		>
			<body className='overflow-hidden'>{children}</body>
		</html>
	)
}
