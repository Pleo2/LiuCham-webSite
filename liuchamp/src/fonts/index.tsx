import { Inter } from 'next/font/google'
import { Bodoni_Moda } from 'next/font/google'
import localFont from 'next/font/local'

export const blacker = localFont({
	src: '../../public/Blacker-Display-ExtraBold-trial.woff',
	variable: '--font-blacker',
})

export const blackerRegular = localFont({
	src: '../../public/Blacker-Display-Regular-trial.woff',
	variable: '--font-blacker-regular',
})

export const graphik = localFont({
	src: '../../public/Graphik-Regular.woff2',
	variable: '--font-graphik',
})

export const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
	weight: ['400', '700'],
})

export const bodoniModa = Bodoni_Moda({
	weight: ['400', '700'],
	subsets: ['latin'],
	variable: '--font-bodoni',
})
