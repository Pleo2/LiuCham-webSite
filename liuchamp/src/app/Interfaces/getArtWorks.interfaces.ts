export interface ObjApiArtWorks {
	id: string
	api_model: string
	api_link: string
	is_boosted: boolean
	title: string
	alt_titles: null
	thumbnail: {
		lqip: string
		width: number
		height: number
		alt_text: string
	}
	main_reference_number: string
	has_not_been_viewed_much: boolean
	boost_rank: null
	date_start: number
	date_end: number
	date_display: string
	date_qualifier_title: string
	date_qualifier_id: null
	artist_display: string
	place_of_origin: string
	dimensions: string
	dimensions_detail: [
		{
			depth_cm: number
			depth_in: number
			width_cm: number
			w7idth_in: number
			height_cm: number
			height_in: number
			diameter_cm: number
			diameter_in: number
			clarification: null
		}
	]
	medium_display: string
	inscriptions: null
	credit_line: string
	catalogue_display: null
	publication_history: string
	exhibition_history: string
	provenance_text: string
	edition: null
	publishing_verification_level: string
	internal_department_id: number
	fiscal_year: number
	fiscal_year_deaccession: null
	is_public_domain: boolean
	is_zoomable: boolean
	max_zoom_window_size: number
	copyright_notice: null
	has_multimedia_resources: boolean
	has_educational_resources: boolean
	has_advanced_imaging: boolean
	colorfulness: number
	color: {
		h: number
		l: number
		s: number
		percentage: number
		population: number
	}
	latitude: null
	longitude: null
	latlon: null
	is_on_view: boolean
	on_loan_display: string
	gallery_title: null
	gallery_id: null
	artwork_type_title: string
	artwork_type_id: number
	department_title: string
	department_id: string
	artist_id: number
	artist_title: string
	alt_artist_ids: []
	artist_ids: number[]
	artist_titles: string[]
	category_ids: string[]
	category_titles: string[]
	term_titles: string[]
	style_id: string
	style_title: string
	alt_style_ids: []
	style_ids: string[]
	style_titles: string[]
	classification_id: string
	classification_title: string
	alt_classification_ids: string[]
	classification_ids: string[]
	classification_titles: string[]
	subject_id: string
	alt_subject_ids: string[]
	subject_ids: string[]
	subject_titles: string[]
	material_id: string
	alt_material_ids: []
	material_ids: string[]
	material_titles: string[]
	technique_id: null
	alt_technique_ids: []
	technique_ids: []
	technique_titles: []
	theme_titles: []
	image_id: string
	alt_image_ids: []
	document_ids: []
	sound_ids: []
	video_ids: []
	text_ids: []
	section_ids: number[]
	section_titles: string[]
	site_ids: []
	suggest_autocomplete_all: [
		{
			input: number[]
			contexts: {
				groupings: string[]
			}
		},
		{
			input: string[]
			weight: number
			contexts: {
				groupings: string[]
			}
		}
	]
	source_updated_at: string
	updated_at: string
	timestamp: string
}

// Api Response
export interface DataTypeArtWorks {
	id: string
	title: string
	artist: string
	imgUrl: string
}

export interface GetArtWorks {
	data: DataTypeArtWorks[] | null
	loading: boolean
	error: boolean
}
