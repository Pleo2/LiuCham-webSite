export interface ObjApiTours {
	id: string
	api_model: string
	api_link: string
	title: string
	image: string
	description: string
	intro: string
	weight: boolean
	intro_link: null
	intro_transcript: string
	artwork_titles: string[]
	artist_titles: []
	suggest_autocomplete_boosted: string
	suggest_autocomplete_all: {
		input: string[]
		contexts: {
			groupings: string[]
		}
	}
	source_updated_at: null
	updated_at: string
	timestamp: string
}

// Api Response

export interface DataTypeTours {
	id: string
	title: string
	imgUrl: string
	description: string
	date: string
}

export interface GetTours {
	data: DataTypeTours[] | null
	loading: boolean
	error: boolean
}
