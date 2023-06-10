'use client'
import useGetTours from '@/app/hooks/useGetTours'
import { type DataTypeTours } from '@/app/Interfaces/getTours.interfaces'

import TitleSection from '../../TitleSection'
import Image from 'next/image'

export default function SectionTour(): JSX.Element {
	const { data, loading, error } = useGetTours()
	return (
		<section className="flex flex-col items-start w-full z-10 bg-transparent px-8">
			<TitleSection title="Tours" />
			<article className="w-full flex flex-col justify-center items-center mt-4 gap-12">
				{!error && !loading ? (
					data?.map((tour: DataTypeTours, index: number) => {
						return (
							<article key={tour?.id}>
								<Image
									priority={true}
									src={((tour?.imgUrl).length > 0) ? tour?.imgUrl : '/290132_gallery_image_photo_photography_picture_icon.png' }
									alt={tour?.description}
									width={350}
									height={250}
									quality='40'
									className="bg-transparent rounded-sm"
								/>
								<div>
									<div className="text-3xl font-display mt-2 text-white">{tour?.title}</div>
									<div className="bg-transparent mt-2 font-sans text-xs text-custom-whitePalo">
										<p className="text-xl text-custom-greenFalse font-display">Exhibition</p>
										{tour?.description.slice(3, tour?.description.length - 4)}
									</div>
									<div className="bg-custom-greenFalse text-custom-fullBlack w-max p-4 py-2 mt-4 rounded-sm">
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
		</section>
	)
}
