'use client'
import useGetExhibitions from '@/app/hooks/useGetExhibition'
import TitleSection from '../../TitleSection'
import Image from 'next/image'
import { type DataType } from '@/app/Interfaces/getExhibition.interfaces'
import { reformatDate } from '@/app/utils/reformatData'

export default function SectionExhibition(): JSX.Element {
	const exhibition = useGetExhibitions()
	const { data, loading, error } = exhibition

	return (
		<section className="flex flex-col items-start w-full z-10 bg-transparent">
			<TitleSection title="Exhibition" />
			<article className="w-full flex">
				{!loading &&
					!error &&
					data?.map((exhibition: DataType, index: number) => {
						const startdate = exhibition?.date?.start
						const enddate = exhibition?.date?.end

						const formatDate: string = reformatDate(startdate, enddate)

						return (
							<div key={exhibition?.id}>
								<Image
									src={exhibition?.imageUrl}
									alt={exhibition?.description}
									width={300}
									height={300}
									className="bg-transparent"
								/>
								<p className="bg-transparent">
									{exhibition?.description.slice(3, exhibition?.description.length - 4)}
								</p>
								<p className="bg-transparent">{formatDate}</p>
							</div>
						)
					})}
				{loading && error && <h3>loading...</h3>}
			</article>
		</section>
	)
}
