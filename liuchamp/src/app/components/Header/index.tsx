import { HeaderSections } from '@/app/Mooks/sections'
import { MenuIcon, XmarkIcon } from '../Icons'
import HeaderHomeTitle from './HeaderHomeTitle'
import { type HeaderType } from './HeaderType'
import { NavBar } from '../NavBar'

export default function Header({ title, subTitle, isOpen, setOpen }: HeaderType): JSX.Element {
	return (
		<>
			<section className="w-full flex justify-between px-8 pt-4 items-center lg:mt-4">
				<p className="font-sans font-extrabold text-custom-whitePalo lg:text-2xl">Liu Champ</p>
				<ul className='hidden lg:flex lg:text-custom-whitePalo lg:gap-8 lg:font-semibold '>
				{HeaderSections.map(section => {
					return (
						<a href={`#${section.id}`} key={section.id} className='lg:hover:text-custom-greenFalse lg:cursor-pointer'>
							{section.name}
						</a>
						)
					})}
				</ul>
				<div className="w-max h-8 flex justify-center items-center gap-4 lg:hidden">
					<button
						onClick={() => {
							setOpen(prev => !prev)
						}}
						className="[&>svg]:text-custom-whitePalo"
					>
						{isOpen ? <XmarkIcon size={8} /> : <MenuIcon size={8} />}
					</button>
				</div>
			</section>
			{isOpen ? <NavBar setOpen={setOpen} /> : <HeaderHomeTitle title={title} subTitle={subTitle} />}
		</>
	)
}
