'use client'
import { motion } from 'framer-motion'
import { SECTIONS } from '@/app/Mooks/sections'
import useGetArtWorks from '@/app/hooks/useGetArtWorks'
import { type DataTypeArtWorks } from '@/app/Interfaces/getArtWorks.interfaces'
import TitleSection from '../../TitleSection'
import Image from 'next/image'
import React from 'react'

const { artWorks } = SECTIONS

function SectionArtWorks(): JSX.Element {
	const { data, loading, error } = useGetArtWorks()
	return (
		<motion.section
			className="flex flex-col items-start w-full z-10 bg-transparent px-8 min-h-[4400px] sm:min-h-[2300px] h-max lg:min-h-0"
			initial={{ opacity: 0, translateX: '-100%' }}
			animate={{ opacity: 1, translateX: 0 }}
			exit={{ opacity: 0, translateX: '100%' }}
			transition={{ duration: 0.5, delay: 0.3 }}
		>
			<TitleSection title={artWorks.name} id={artWorks.id} />
			<article className="w-full flex flex-col justify-center items-center mt-4 gap-12 sm:m-0 min-h-[2000px] sm:min-h-max h-max sm:flex-wrap sm:flex-row sm:justify-around sm:items-stretch sm:mt-8 sm:mb-8">
				{!error && !loading ? (
					data?.map((artWork: DataTypeArtWorks) => {
						return (
							<article key={artWork?.id} className="sm:w-72 sm:px-4">
								<div
									style={{
										backgroundImage: 'url(./290132_gallery_image_photo_photography_picture_icon.png)',
										backgroundSize: 'cover',
										backgroundPosition: 'center',
										backgroundRepeat: 'no-repeat',
									}}
								>
									<Image
										priority={true}
										src={
											artWork?.imgUrl?.length > 0
												? `${artWork?.imgUrl}/full/843,/0/default.jpg`
												: '/290132_gallery_image_photo_photography_picture_icon.png'
										}
										alt={artWork?.title}
										width={350}
										height={300}
										quality="40"
										className="bg-transparent rounded-sm object-cover object-center w-full h-full"
									/>
								</div>
								<div>
									<div className="text-md font-display text-2xl mt-2 text-white">{artWork?.title}</div>
									<div className="font-sans text-custom-greenFalse mt-0 rounded-sm w-[90%]">{artWork?.artist}</div>
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

export default React.memo(SectionArtWorks)