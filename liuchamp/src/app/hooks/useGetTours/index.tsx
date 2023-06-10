'use client'

import { useState, useEffect } from 'react'
import getTours from '@/app/services/getTours'
import { type GetTours, type DataTypeTours } from '@/app/Interfaces/getTours.interfaces'
import { initialData } from './initialData'

export default function useGetTours(): GetTours {
	const [data, setData] = useState<DataTypeTours[]>(initialData)
	const [error, setError] = useState(false)
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		getTours()
			.then((tours): void => {
				setData(tours)
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
