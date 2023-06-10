import { MenuIcon } from '../Icons'

export default function Header({ title, subTitle }: { title: string; subTitle: string }): JSX.Element {
	return (
		<>
			<section className="w-full flex justify-between px-8 pt-4 items-center">
				<p className="font-sans font-extrabold text-custom-whitePalo ">LiuChamp</p>
				<div className="w-max h-8 flex justify-center items-center gap-4 [&>svg]:text-custom-whitePalo">
					<MenuIcon size={8} />
				</div>
			</section>

			<div className="relative w-full h-[200px] px-8 overflow-x-hidden after:contents-[ ] after:h-44 after:w-44 after:bg-gradient-to-b after:from-custom-greenFalse after:to-custom-fullBlack after:absolute after:z-0 after:opacity-100 after:rounded-full  after:left-4 after:translate-y-4 after:translate-x-4 overflow-hidden">
				<h1 className="absolute text-7xl font-display text-custom-whitePalo z-10 mt-20 bg-transparent">
					{title}
				</h1>
				<h2 className="absolute z-10 text-7xl font-display text-custom-whitePalo mt-32 pt-2 bg-transparent">
					{subTitle}
				</h2>
			</div>
			<div className="container--mesagge mt-4 px-8 text-custom-whitePalo text-xs w-[91%]">
			<p className="">
				Sometimes you have to mess up the painting a little bit in order to finish it... (Eugène Delacroix)
			</p>
			<p className="mt-2 text-custom-greenFalse">
				(Eugène Delacroix)
			</p>

			</div>
		</>
	)
}
