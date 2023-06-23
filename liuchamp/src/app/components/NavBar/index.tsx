'use client'

import { motion } from 'framer-motion'
import { HeaderSections } from '@/app/Mooks/sections'
import { type Dispatch, type SetStateAction } from 'react'
import { ArrowIcon } from '../Icons'

export function NavBar({ setOpen }: { setOpen: Dispatch<SetStateAction<boolean>> }): JSX.Element {
	return (
		
			<motion.div
				initial={{ opacity: 0, translateX: '100%' }}
				animate={{ opacity: 1, translateX: 0 }}
				exit={{ opacity: 0, translateX: '-100%' }}
				transition={{ duration: 0.5 }}
				className=" w-screen h-[80vh]"
			>
				<div className="flex flex-col gap-10 mt-12">
					<div className="bg-custom-whitePalo h-[1px] w-full"></div>
					{HeaderSections?.map((section, index) => {
						return (
							<div key={`${section.id}${index}`}>
								<div
									onClick={() => {
										setOpen(false)
									}}
									className="flex text-4xl font-display justify-between px-8 text-custom-whitePalo"
								>
									<a href={`#${section.id}`}>{section.name}</a>
									<ArrowIcon size={8} />
								</div>
								<div className="bg-custom-whitePalo h-[1px] mt-10 w-full"></div>
							</div>
						)
					})}
				</div>
			</motion.div>
	)
}
