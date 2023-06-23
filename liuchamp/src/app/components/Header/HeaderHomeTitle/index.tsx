'use client'
import { motion } from 'framer-motion'

export default function HeaderHomeTitle({ title, subTitle }: { title: string; subTitle: string }): JSX.Element {
	return (
		<motion.div
			initial={{ opacity: 0, translateX: '-100%' }}
			animate={{ opacity: 1, translateX: 0 }}
			exit={{ opacity: 0, translateX: '100%' }}
			transition={{ duration: 0.5, delay: 0.2 }}
		>
			<div className="relative w-full h-[200px] sm:h-[230px] sm:mt-6 px-8 overflow-x-hidden after:contents-[ ] after:h-44 after:w-44 after:bg-gradient-to-b after:from-custom-greenFalse after:to-custom-fullBlack after:absolute after:z-0 after:opacity-100 after:rounded-full  after:left-4 after:translate-y-4 after:translate-x-4 overflow-hidden lg:after:left-1/2 lg:after:h-60 lg:h-[270px]">
				<h1 className="absolute text-7xl sm:text-8xl font-display text-custom-whitePalo z-10 mt-20 bg-transparent lg:left-1/2 lg:-translate-x-1/2 lg:mt-20 lg:text-9xl">
					{title}
				</h1>
				<h2 className="absolute z-10 text-7xl sm:text-8xl mt-32 sm:mt-36 font-display text-custom-whitePalo pt-2 bg-transparent lg:left-1/2 lg:-translate-x-1/2 lg:text-9xl">
					{subTitle}
				</h2>
			</div>
			<div className="mt-4 px-8 text-custom-whitePalo text-xs sm:text-md w-[91%] lg:flex lg:justify-center lg:text-xl lg:flex-col lg:place-items-center lg:px-0 lg:m-auto lg:mt-0">
				<p>Sometimes you have to mess up the painting a little bit in order to finish it...</p>
				<p className="mt-2 text-custom-greenFalse">(Eugène Delacroix)</p>
			</div>
		</motion.div>
	)
}
