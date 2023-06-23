'use client'
import { motion } from 'framer-motion'

export default function LogoNavBar():JSX.Element {
	return (
		<motion.p
			className="font-sans font-extrabold text-custom-whitePalo lg:text-2xl"
			initial={{ opacity: 0, translateX: '-100%' }}
			animate={{ opacity: 1, translateX: 0 }}
			exit={{ opacity: 0, translateX: '100%' }}
			transition={{ duration: 0.5, delay: 0.3 }}
		>
			Liu Champ
		</motion.p>
	)
}
