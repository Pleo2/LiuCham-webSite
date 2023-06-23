import { type HeaderProviderType } from "@/app/contexts/HeaderContextType"
import { MenuIcon, XmarkIcon } from "../Icons"


export default function ButtonNavbar({setOpen, isOpen}: HeaderProviderType):JSX.Element {
	return <div className="w-max h-8 flex justify-center items-center gap-4 lg:hidden">
		<button
			onClick={() => {
				setOpen((prev: boolean) => !prev)
			}}
			className="[&>svg]:text-custom-whitePalo"
		>
			{isOpen ? <XmarkIcon size={8} /> : <MenuIcon size={8} />}
		</button>
	</div>
}