'use client'
import getShop from '@/app/services/getShop'
import { type GetShop, type DataTypeShop } from '@/app/Interfaces/getShop.interface'
import { useState, useEffect } from 'react'
import { initialData } from './initialData'

export default function useGetShop():GetShop {
	const [data, setData] = useState<DataTypeShop[]>(initialData)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)

	useEffect(() => {
		setLoading(true)
        getShop()
            .then((res):void => {setData(res)})
            .catch((error): void =>	{error.name === 'AbortError' ? console.log('cancelled request') : setError(true)})
            .finally(():void => {setLoading(false)})
	}, [])

    return {
        data,
        loading,
        error
    }
}
