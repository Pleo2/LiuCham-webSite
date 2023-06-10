import { type ObjApiExhibition, type DataTypeExhibitions } from '../Interfaces/getExhibition.interfaces'
import { type ApiResponse } from '../Interfaces/ApiResponse.interface'
import { PUBLIC_API_URL_EXHIBITIONS } from '../../../config'
import { reformatDate } from '../utils/reformatData'

export const fromApiResponseToExhibitions = (response: ApiResponse): DataTypeExhibitions[] => {
	const { data = [] } = response
	if (Array.isArray(data)) {
		const exhibitions = data.map((exhibition: ObjApiExhibition) => {
			const { id, title } = exhibition
			const imgUrl = exhibition?.image_url
			const webUrl = exhibition?.web_url
			const description = exhibition?.short_description
			const date = reformatDate(exhibition?.aic_end_at, exhibition?.aic_start_at)
			return { id, title, imgUrl, webUrl, description, date }
		})
		return exhibitions
	}
	return []
}

export default async function getExhibitions(): Promise<DataTypeExhibitions[]> {
	const res = await fetch(PUBLIC_API_URL_EXHIBITIONS)
	const data = await res.json()
	return fromApiResponseToExhibitions(data)
}
