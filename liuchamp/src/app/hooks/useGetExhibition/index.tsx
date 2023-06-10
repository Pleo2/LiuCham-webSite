'use client'
import { useState, useEffect } from 'react'
import getExhibitions from '../../services/getExhibitions'
import { type GetExhibitions, type DataTypeExhibitions } from '@/app/Interfaces/getExhibition.interfaces'
import { initialData } from './initialData'

export default function useGetExhibitions(): GetExhibitions {
	const [data, setData] = useState<DataTypeExhibitions[]>(initialData)
	const [error, setError] = useState(false)
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		getExhibitions()
			.then((exhibition): void => {
				setData(exhibition)
			})
			.catch(error => {
				error.name === 'AbortError' ? console.log('cancelled request') : setError(true)
			})
			.finally((): void => {
				setLoading(false)
			})
	}, [])

	return { data, error, loading}
}
