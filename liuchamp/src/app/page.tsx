'use client'
import Header from './components/Header'
import SectionExhibition from './components/Sections/SectionExhibition'
import Separator from './components/Separator'
import SectionTour from './components/Sections/sectionTours'
import SectionArtWorks from './components/Sections/SectionArtWorks'
import SectionShop from './components/Sections/sectionShop'
import { useContext } from 'react'
import { HeaderContext } from './contexts/HeaderContext'

export default function Home(): JSX.Element {
	const { isOpen, setOpen } = useContext(HeaderContext)
	return (
		<>
			<Header title="Art" subTitle="Museum" isOpen={isOpen} setOpen={setOpen}></Header>
			{isOpen ? (
				<></>
			) : (
				<>
					<Separator mt={'mt-6'} />
					<main className="flex w-full min-h-screen flex-col items-center justify-between overflow-hidden">
						<SectionExhibition />
						<Separator mt={'mt-6'} />
						<SectionTour />
						<Separator mt={'mt-6'} />
						<SectionArtWorks />
						<Separator mt={'mt-6'} />
						<SectionShop />
					</main>
					<footer></footer>
				</>
			)}
		</>
	)
}
