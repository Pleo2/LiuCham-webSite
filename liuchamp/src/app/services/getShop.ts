import { PUBLIC_API_URL_SHOP } from '../../../config'
import { type ApiResponse } from '../Interfaces/ApiResponse.interface'
import { type DataTypeShop, type ObjApiShop } from '../Interfaces/getShop.interface'

const fromApiResponseToShop = (response: ApiResponse): DataTypeShop[] => {
	const { data = [] } = response
	if (Array.isArray(data)) {
		const shop = data?.map((item: ObjApiShop) => {
			const { id, title } = item
			const imgUrl = item?.image_url
			const price = item?.max_current_price
			const link = item?.web_url
			return { id, title, imgUrl, price, link }
		})
		return shop
	}
	return []
}

export default async function getShop(): Promise<DataTypeShop[]> {
	const res = await fetch(PUBLIC_API_URL_SHOP)
	const data = await res.json()
	return fromApiResponseToShop(data)
}
