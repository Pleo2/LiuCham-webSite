'use client'
import { motion } from 'framer-motion'
export default function Separator({ mt, delayTime }: { mt: string; delayTime: number }): JSX.Element {
	return (
		<motion.div
			className="w-full h-max px-8"
			initial={{ opacity: 0, translateX: '-100%' }}
			animate={{ opacity: 1, translateX: 0 }}
			exit={{ opacity: 0, translateX: '100%' }}
			transition={{ duration: 0.5, delay: delayTime }}
		>
			<div className={`w-full h-[1px]  bg-custom-whitePalo ${mt} m-auto rounded-sm sm:hidden`}></div>
		</motion.div>
	)
}
