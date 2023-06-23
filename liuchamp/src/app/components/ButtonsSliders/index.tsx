import React from 'react'
import { type ButtonType } from './ButtonType'
import  useScrollItems  from './useScrollItems'

export default function ButtonsSlider({ sliderIndex, setSliderIndex, maxSliders = 3 }: ButtonType): JSX.Element {
	const { scrollLeft, scrollRight } = useScrollItems(sliderIndex, setSliderIndex, maxSliders)
	return (
		<div className='flex mt-4 gap-4 items-center justify-center [&>button]:text-custom-whitePalo [&>button]:bg-transparent [&>button]:text-5xl'>
			<button type="button" className="" onClick={scrollLeft}>
				&#8249;
			</button>
			<button type="button" className="" onClick={scrollRight}>
				&#8250;
			</button>
		</div>
	)
}
