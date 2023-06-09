export interface ObjApi {
	id: number
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

export interface ApiResponse {
	data: {
		pagination: {
			total: string
			limit: number
			offset: number
			total_pages: number
			current_page: number
			next_url: string
		}
		data: ObjApi[]
		info: {
			license_text: string
			license_links: string[]
			version: string
		}
		config: { iiif_url: string; website_url: string }
	}
}

// ApiResponse
export interface DataType {
	id: number
	title: string
	imageUrl: string
	webUrl: string
	description: string
	date: {
		start: string
		end: string
	}
}

export interface GetExhibitions {
	data: DataType[] | null
	loading: boolean
	error: boolean
}
