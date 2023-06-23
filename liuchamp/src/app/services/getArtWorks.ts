import { PUBLIC_API_URL_ARTWORKS } from "../../../config";
import { type ApiResponse } from '../Interfaces/ApiResponse.interface'
import { type DataTypeArtWorks, type ObjApiArtWorks } from "../Interfaces/getArtWorks.interfaces";

const fromApiResponseToArtWorks = (response: ApiResponse): DataTypeArtWorks[] => {
    const iiifUrl = "https://www.artic.edu/iiif/2/"
	const { data = [] } = response
	if (Array.isArray(data)) {
		const artWorks = data.map((artWork: ObjApiArtWorks) => {
			const { id, title } = artWork
			const imgUrl = iiifUrl?.concat(artWork?.image_id)
            const artist = artWork?.artist_display
			return { id, title, imgUrl, artist}
		})
		return artWorks
	}
	return []
}

export default async function getArtWorks(): Promise<DataTypeArtWorks[]> {
	const res = await fetch(PUBLIC_API_URL_ARTWORKS)
	const data = await res.json()
	return fromApiResponseToArtWorks(data)
}
