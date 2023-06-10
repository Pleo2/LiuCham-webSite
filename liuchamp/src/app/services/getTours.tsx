import { type ObjApiTours, type DataTypeTours } from '../Interfaces/getTours.interfaces'
import { type ApiResponse } from '../Interfaces/ApiResponse.interface'
import { PUBLIC_API_URL_TOURS } from '../../../config'
import { reformatDateToHour } from '../utils/reformatOneDate'

const fromApiResponseToTours = (response: ApiResponse): DataTypeTours[] => {
	const { data = [] } = response
	if (Array.isArray(data)) {
		const tours = data.map((tour: ObjApiTours) => {
			const { id, title } = tour
			const imgUrl = tour?.image
			const description = tour?.description.slice(0, tour?.description.length - 1)
			const date = reformatDateToHour(tour?.updated_at)
			return { id, title, imgUrl, description, date }
		})
		return tours
	}
	return []
}

export default async function getTours(): Promise<DataTypeTours[]> {
	const res = await fetch(PUBLIC_API_URL_TOURS)
	const data = await res.json()
	return fromApiResponseToTours(data)
}


