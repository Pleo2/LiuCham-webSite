'use client'
import { motion } from 'framer-motion'
import { SECTIONS } from '@/app/Mooks/sections'
import useGetTours from '@/app/hooks/useGetTours'
import { type DataTypeTours } from '@/app/Interfaces/getTours.interfaces'

import TitleSection from '../../TitleSection'
import Image from 'next/image'
import React from 'react'

const { tours } = SECTIONS

function SectionTour(): JSX.Element {
	const { data, loading, error } = useGetTours()
	return (
		<motion.section 
			className="flex flex-col items-start w-full z-10 bg-transparent px-8 min-h-[1000px] sm:min-h-[620px] h-max lg:min-h-0"
			initial={{ opacity: 0, translateX: '-100%' }}
			animate={{ opacity: 1, translateX: 0 }}
			exit={{ opacity: 0, translateX: '100%' }}
			transition={{ duration: 0.5, delay: 0.3 }}	
		>
			<TitleSection title={tours.name} id={tours.id} />
			<article className="w-full flex flex-col justify-center items-center mt-4 gap-12 sm:mt-8 lg:flex-row lg:w-full">
				{!error && !loading ? (
					data?.map((tour: DataTypeTours, index: number) => {
						return (
							<article
								key={tour?.id}
								className="sm:bg-custom-greenFalse  sm:rounded-sm sm:p-4 sm:flex sm:gap-4 sm:justify-center sm:items-center lg:min-h-80 lg:h-80 lg:w-full lg:justify-start"
							>
								<Image
									priority={true}
									src={
										(tour?.imgUrl).length > 0
											? tour?.imgUrl
											: '/290132_gallery_image_photo_photography_picture_icon.png'
									}
									alt={tour?.description}
									width={350}
									height={250}
									quality="40"
									className="bg-transparent rounded-sm sm:h-64 sm:rounded-lg lg:h-72 lg:w-72"
								/>
								<div>
									<div className="text-3xl font-display mt-2 text-white sm:text-custom-fullBlack lg:w-full">
										{tour?.title}
									</div>
									<div className="bg-transparent mt-2 font-sans text-xs text-custom-whitePalo sm:text-custom-fullBlack lg:w-full">
										<p className="text-xl text-custom-greenFalse font-display sm:text-custom-fullBlack">Exhibition</p>
										{tour?.description.slice(3, tour?.description.length - 4)}
									</div>
									<div className="bg-custom-greenFalse text-custom-fullBlack w-max p-4 py-2 mt-4 rounded-sm sm:text-custom-whitePalo sm:bg-custom-fullBlack">
										{tour?.date}
									</div>
								</div>
							</article>
						)
					})
				) : (
					<h3>Loading...</h3>
				)}
			</article>
		</motion.section>
	)
}

export default React.memo(SectionTour)