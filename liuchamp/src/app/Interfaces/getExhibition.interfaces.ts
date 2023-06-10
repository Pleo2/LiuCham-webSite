export interface ObjApiExhibition {
	id: string
	api_model: string
	api_link: string
	title: string
	is_featured: boolean
	short_description: string
	web_url: string
	image_url: string
	status: string
	aic_start_at: string
	aic_end_at: string
	gallery_id: number
	gallery_title: string
	artwork_ids: []
	artwork_titles: []
	artist_ids: []
	site_ids: []
	image_id: null
	alt_image_ids: []
	document_ids: []
	suggest_autocomplete_boosted: string
	suggest_autocomplete_all: {
		input: string[]
		contexts: { groupings: string[] }
	}
	source_updated_at: string
	updated_at: string
	timestamp: string
}

// ApiResponse
export interface DataTypeExhibitions {
	id: string
	title: string
	imgUrl: string
	webUrl: string
	description: string
	date: string
}

export interface GetExhibitions {
	data: DataTypeExhibitions[] | null
	loading: boolean
	error: boolean
}
