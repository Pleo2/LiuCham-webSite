'use client'
import React, { createContext, useState } from 'react'
import { type HeaderProviderType } from './HeaderContextType'

export const HeaderContext = createContext<HeaderProviderType>({
	isOpen: false,
	setOpen: () => {},
})

export function HeaderProvider({ children }: { children: React.ReactNode }): JSX.Element {
	const [isOpen, setOpen] = useState<boolean>(false)
	return (
		<HeaderContext.Provider
			value={{
				isOpen,
				setOpen,
			}}
		>
			{children}
		</HeaderContext.Provider>
	)
}
