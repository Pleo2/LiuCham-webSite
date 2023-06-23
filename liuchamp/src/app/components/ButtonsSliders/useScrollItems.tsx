import { useCallback } from 'react'

export default function useScrollItems(sliderIndex: number, setSliderIndex: any, maxSliders: number): { scrollLeft: () => void; scrollRight: () => void } {
	const scrollLeft = useCallback(() => {
		if (sliderIndex > 0) {
			setSliderIndex((prev: number) => prev - 1)
		}
	}, [setSliderIndex, sliderIndex])

	const scrollRight = useCallback(() => {
		if (sliderIndex < maxSliders) {
			setSliderIndex((prev: number) => prev + 1)
		}
	}, [setSliderIndex, sliderIndex, maxSliders])
	return { scrollLeft, scrollRight }
}
