'use client'

import { useState, useEffect } from 'react'
import getArtWorks from '@/app/services/getArtWorks'
import { type GetArtWorks, type DataTypeArtWorks } from '@/app/Interfaces/getArtWorks.interfaces'
import { initialData } from './initialData'

export default function useGetArtWorks(): GetArtWorks {
	const [data, setData] = useState<DataTypeArtWorks[]>(initialData)
	const [error, setError] = useState(false)
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		getArtWorks()
			.then((artWorks): void => {
				setData(artWorks)
			})
			.catch(error => {
				error.name === 'AbortError' ? console.log('canceled request') : setError(true)
			})
			.finally((): void => {
				setLoading(false)
			})
	}, [])

	return { data, loading, error }
}
