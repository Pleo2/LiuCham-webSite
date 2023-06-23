export interface ObjApiShop {
	id: string
	api_model: string
	api_link: string
	title: string
	external_sku: string
	image_url: string
	web_url: string
	description: string
	price_display: string
	min_compare_at_price: number
	max_compare_at_price: number
	min_current_price: number
	max_current_price: number
	artist_ids: []
	artwork_ids: []
	exhibition_ids: []
	source_updated_at: string
	updated_at: string
	timestamp: string
}

// Api Response
export interface DataTypeShop {
	id: string
	title: string
	imgUrl: string
    price: number
	link: string
}

export interface GetShop {
	data: DataTypeShop[] | null
	loading: boolean
	error: boolean
}
