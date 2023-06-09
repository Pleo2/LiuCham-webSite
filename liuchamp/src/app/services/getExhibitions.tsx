import { type ObjApi, type ApiResponse, type DataType } from '../Interfaces/getExhibition.interfaces'

export const fromApiResponseToExhibitions = (response: ApiResponse): DataType[] => {
	const { data = [] } = response
	if (Array.isArray(data)) {
		const exhibitions = data.map((exhibition: ObjApi) => {
			console.log()
			const { id, title } = exhibition
			const imageUrl = exhibition?.image_url
			const webUrl = exhibition?.web_url
			const description = exhibition?.short_description
			const date = {
				end: exhibition?.aic_start_at,
				start: exhibition?.aic_end_at,
			}
			return { id, title, imageUrl, webUrl, description, date }
		})
		return exhibitions
	}
	return []
}

export default async function getExhibitions(): Promise<DataType[]> {
	const res = await fetch('https://api.artic.edu/api/v1/exhibitions?limit=2')
	const data = await res.json()
	return fromApiResponseToExhibitions(data)
}
