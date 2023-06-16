import React from "react";

export default function TitleSection({ title, id, children }: { title: string, id:string, children?: React.ReactNode }): JSX.Element {
	return (
		<div id={id} className="flex items-center justify-between w-full">
			<h2 className="text-4xl font-display text-custom-whitePalo sm:text-6xl sm:mt-20 mt-6 bg-transparent lg:text-7xl lg:mt-32">{title}</h2>
			{children}
		</div>
	)
}
