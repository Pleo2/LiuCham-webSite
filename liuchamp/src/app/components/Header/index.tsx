'use client'
import { motion } from 'framer-motion'
import { HeaderSections } from '@/app/Mooks/sections'
import HeaderHomeTitle from './HeaderHomeTitle'
import { type HeaderType } from './HeaderType'
import { NavBar } from '../NavBar'
import LogoNavBar from '../LogoNavBar'
import ButtonNavbar from '../ButtonOpenNav'

export default function Header({ title, subTitle, isOpen, setOpen }: HeaderType): JSX.Element {
	return (
		<>
			<section className="w-full flex justify-between px-8 pt-4 items-center lg:mt-4">
				<LogoNavBar />
				<motion.ul className="hidden lg:flex lg:text-custom-whitePalo lg:gap-8 lg:font-semibold"
				
				>
					{HeaderSections.map(section => {
						return (
							<a href={`#${section.id}`} key={section.id} className="lg:hover:text-custom-greenFalse lg:cursor-pointer">
								{section.name}
							</a>
						)
					})}
				</motion.ul>
				<ButtonNavbar isOpen={isOpen} setOpen={setOpen}/>
			</section>
			{isOpen ? <NavBar setOpen={setOpen} /> : <HeaderHomeTitle title={title} subTitle={subTitle} />}
		</>
	)
}
