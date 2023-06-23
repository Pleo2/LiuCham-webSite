'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { SECTIONS } from '@/app/Mooks/sections'
import useGetShop from '@/app/hooks/useGetShop'
import { type DataTypeShop } from '@/app/Interfaces/getShop.interface'
import TitleSection from '../../TitleSection'
import ButtonsSliders from '../../ButtonsSliders'
import Image from 'next/image'

const { fromTheShop } = SECTIONS

function SectionShop(): JSX.Element {
	const [sliderIndex, setSliderIndex] = useState<number>(0)
	const { data, loading, error } = useGetShop()
	return (
		<motion.section
			className="relative flex flex-col items-start w-full h-96 z-10 bg-transparent px-8 mb-16 lg:h-max"
			initial={{ opacity: 0, translateX: '-100%' }}
			animate={{ opacity: 1, translateX: 0 }}
			exit={{ opacity: 0, translateX: '100%' }}
			transition={{ duration: 0.5, delay: 0.3 }}
		>
			<TitleSection title={fromTheShop.name} id={fromTheShop.id}>
				<div className="">
					<ButtonsSliders
						key={'button-shop'}
						sliderIndex={sliderIndex}
						setSliderIndex={setSliderIndex}
						maxSliders={7}
					/>
				</div>
			</TitleSection>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1}}
				exit={{ opacity: 0}}
				transition={{ duration: 0.5, delay: 0.9}}
				className="flex gap-8 mt-4 sm:mt-8 scroll-pl-6 snap-x overflow-x-clip lg:h-[500px] lg:mt-8	"
				style={{
					transform: `translateX(calc(${sliderIndex} * -10%))`,
					transition: 'transform 550ms ease-in-out',
				}}
			>
				{!error && !loading && !(data == null) ? (
					data?.map((item: DataTypeShop) => {
						return (
							<div className="w-[250px] h-52 px-4 snap-center rounded-sm lg:w-[500px]" key={item?.id}>
								<div className="w-[220px] p-4 bg-custom-whitePalo m-auto lg:w-[400px]">
									<a href={item?.link}>
										<Image
											priority={true}
											src={
												item?.imgUrl?.length > 0
													? item?.imgUrl
													: '/290132_gallery_image_photo_photography_picture_icon.png'
											}
											alt={item?.title}
											width={350}
											height={300}
											quality="40"
											className="rounded-sm w-full h-44 m-auto object-cover lg:h-96"
										/>
									</a>
								</div>
								<div className="text-custom-greenFalse font-sans text-sm mt-6 rounded-sm lg:text-2xl lg:text-center lg:w-[400px] m-auto">{item?.title}</div>
							</div>
						)
					})
				) : (
					<h3>Loading...</h3>
				)}
			</motion.div>
		</motion.section>
	)
}

export default React.memo(SectionShop)