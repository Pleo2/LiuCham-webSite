import Header from './components/Header'

export default function Home(): JSX.Element {
	return (
		<>
			<Header title="Liu" subTitle="Champ" ></Header>
			<main className="flex min-h-screen flex-col items-center justify-between overflow-hidden">
				{/* background gradient 👇 */}
				<div className='absolute w-[30rem] h-96 bg-gradient-to-l from-custom-orageLife to-white  rounded-full blur-3xl ml-28'></div>

			</main>
			<footer></footer>
		</>
	)
}
