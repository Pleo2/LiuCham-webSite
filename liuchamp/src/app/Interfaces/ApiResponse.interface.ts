import { type ObjApiArtWorks } from './getArtWorks.interfaces'
import { type ObjApiExhibition } from './getExhibition.interfaces'
import { type ObjApiTours } from './getTours.interfaces'

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
		data: ObjApiExhibition[] | ObjApiTours[] | ObjApiArtWorks[]
		info: {
			license_text: string
			license_links: string[]
			version: string
		}
		config: { iiif_url: string; website_url: string }
	}
}
