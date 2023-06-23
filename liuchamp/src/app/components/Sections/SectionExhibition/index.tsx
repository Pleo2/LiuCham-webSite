'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { SECTIONS } from '@/app/Mooks/sections'
import useGetExhibitions from '@/app/hooks/useGetExhibition'
import TitleSection from '../../TitleSection'
import Image from 'next/image'
import { type DataTypeExhibitions } from '@/app/Interfaces/getExhibition.interfaces'

const { exhibitions } = SECTIONS

function SectionExhibition(): JSX.Element {
	const { data, loading, error } = useGetExhibitions()
	return (
		<motion.section
			className="flex flex-col items-start w-full z-10 bg-transparent px-8 min-h-[920px] sm:min-h-[620px] lg:min-h-[310px] h-max"
			initial={{ opacity: 0, translateX: '-100%' }}
			animate={{ opacity: 1, translateX: 0 }}
			exit={{ opacity: 0, translateX: '100%' }}
			transition={{ duration: 0.5, delay: 0.3 }}
		>
			<TitleSection title={exhibitions.name} id={exhibitions.id} />
			<article className="w-full flex flex-col justify-center items-center mt-4 gap-12 sm:mt-8 lg:flex-row">
				{!error && !loading && !(data == null) ? (
					data?.map((exhibition: DataTypeExhibitions) => {
						return (
							<article
								key={exhibition?.id}
								className="sm:bg-custom-greenFalse  sm:rounded-sm sm:p-4 sm:flex sm:gap-4 sm:justify-center sm:items-center lg:min-h-80 lg:h-80 lg:w-full"
							>
								<Image
									priority={true}
									src={
										(exhibition?.imgUrl).length > 0
											? exhibition?.imgUrl
											: '/290132_gallery_image_photo_photography_picture_icon.png'
									}
									alt={exhibition?.description}
									width={350}
									height={250}
									quality="40"
									className="bg-transparent sm:rounded-lg sm:h-64 lg:h-72 lg:w-72"
								/>
								<div>
									<div className="text-3xl font-display mt-2 text-white sm:text-custom-fullBlack">
										{exhibition?.title}
									</div>
									<div className="bg-transparent mt-2 font-sans text-xs text-custom-whitePalo sm:text-custom-fullBlack">
										<p className="text-xl text-custom-greenFalse font-display sm:text-custom-fullBlack">Exhibition</p>
										{exhibition?.description?.slice(3, exhibition?.description.length - 4)}
									</div>
									<div className="bg-custom-greenFalse text-custom-fullBlack w-max p-4 py-2 mt-4 rounded-sm sm:bg-custom-fullBlack sm:text-custom-whitePalo">
										{exhibition?.date}
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

export default React.memo(SectionExhibition)