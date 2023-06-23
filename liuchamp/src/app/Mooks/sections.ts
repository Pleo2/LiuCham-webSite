interface sectionContentType {
    name: string,
    id: string
}

interface SectionType {
        exhibitions : sectionContentType
        tours: sectionContentType
        artWorks : sectionContentType
        fromTheShop: sectionContentType
    }


export const SECTIONS:SectionType = {
    exhibitions: { name: 'EXHIBITIONS', id: 'Exhibition' },
    tours: { name: 'TOURS', id: 'Tours' },
    artWorks: { name: 'ARTWORKS', id: 'ArtWorks' },
    fromTheShop: { name: 'FROM THE SHOP', id: 'Fromtheshop' },
}

export const HeaderSections =  [
    SECTIONS.exhibitions,
    SECTIONS.tours,
    SECTIONS.artWorks,
    SECTIONS.fromTheShop
]
