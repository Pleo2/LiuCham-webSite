import Header from './components/Header'
import SectionExhibition from './components/Sections/SectionExhibition'
import Separator from './components/Separator'
import SectionTour from './components/Sections/sectionTours'
// import getExhibitions from './services/getExhibitions'

export default function Home(): JSX.Element {
	return (
		<>
			<Header title="Art" subTitle="Museum"></Header>
			<Separator mt={'mt-6'} />
			<main className="flex w-full min-h-screen flex-col items-center justify-between overflow-hidden">
				<SectionExhibition />
				<Separator mt={'mt-6'} />
				<SectionTour />
			</main>
			<footer></footer>
		</>
	)
}
