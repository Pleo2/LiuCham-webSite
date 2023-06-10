'use client'
import useGetExhibitions from '@/app/hooks/useGetExhibition'
import TitleSection from '../../TitleSection'
import Image from 'next/image'
import { type DataTypeExhibitions } from '@/app/Interfaces/getExhibition.interfaces'

export default function SectionExhibition(): JSX.Element {
	const { data, loading, error } = useGetExhibitions()
	return (
		<section className="flex flex-col items-start w-full z-10 bg-transparent px-8">
			<TitleSection title="Exhibition" />
			<article className="w-full flex flex-col justify-center items-center mt-4 gap-12">
				{(!error && !loading && !(data == null)) ? (
					data?.map((exhibition: DataTypeExhibitions, index: number) => {
						return (
							<article key={exhibition?.id}>
								<Image
									priority={true}
									src={((exhibition?.imgUrl).length > 0) ? exhibition?.imgUrl : '/290132_gallery_image_photo_photography_picture_icon.png' }
									alt={exhibition?.description}
									width={350}
									height={250}
									quality='40'
									className="bg-transparent rounded-sm"
								/>
								<div>
									<div className="text-3xl font-display mt-2 text-white">{exhibition?.title}</div>
									<div className="bg-transparent mt-2 font-sans text-xs text-custom-whitePalo">
										<p className="text-xl text-custom-greenFalse font-display">Exhibition</p>
										{exhibition?.description.slice(3, exhibition?.description.length - 4)}
									</div>
									<div className="bg-custom-greenFalse text-custom-fullBlack w-max p-4 py-2 mt-4 rounded-sm">
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
		</section>
	)
}
