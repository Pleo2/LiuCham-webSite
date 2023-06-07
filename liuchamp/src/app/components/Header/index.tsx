import Separator from '../Separator'
import { LogoIcon, MenuIcon } from '../Icons'

export default function Header({ title, subTitle }: { title: string; subTitle: string }): JSX.Element {
	return (
		<>
			<section className="w-full flex justify-between px-4 pt-4 items-center">
				<span className="w-8 h-8 [&>svg]:opacity-80">
					<LogoIcon size={8} />
				</span>
				<span className="w-10 h-10">
					<MenuIcon size={10} />
				</span>
			</section>

			<div className="relative w-full h-[240px] overflow-x-hidden after:contents-[ ] after:h-44 after:w-44 after:bg-gradient-to-b after:from-custom-orageLife after:to-custom-whitePalo after:absolute after:z-0 after:opacity-100 after:rounded-full  after:left-4 after:translate-y-4 after:translate-x-4 ">
				<h1 className="absolute text-7xl font-display text-custom-vinoBrow z-10 mt-20 ml-2 bg-transparent">
					{title}
				</h1>
				<h2 className="absolute z-10 text-8xl font-display text-custom-vinoBrow mt-32 pt-2 ml-2 bg-transparent">
					{subTitle}
				</h2>
			</div>

			<p className="font-sans ml-2 mt-4">Exibitons, tours, videos, artWorks</p>
			<Separator />
		</>
	)
}
