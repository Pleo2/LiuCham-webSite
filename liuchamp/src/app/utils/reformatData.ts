function getMonthName(number: number): string {
	const myDate = new Date()
	if (number > 0 && number <= 12) {
		myDate.setMonth(number - 1)
		return new Intl.DateTimeFormat('en-US', { month: 'long' }).format(myDate)
	}
	return ''
}

export const reformatDate = (start: string, end: string): string => {
	const startDate = new Date(start)
	const endDate = new Date(end)

	const startDateObj = {
		day: startDate.getDay(),
		month: startDate.getMonth(),
		year: startDate.getFullYear(),
	}

	const endDateObj = {
		day: endDate.getDay(),
		month: endDate.getMonth(),
		year: endDate.getFullYear(),
	}

	const startMonthName: string = getMonthName(startDateObj.month)
	const endMonthName: string = getMonthName(endDateObj.month)

	if (startDateObj.year === endDateObj.year) {
		const dateFormat: string = `${startMonthName} ${startDateObj.day} - ${endMonthName} ${endDateObj.day}, ${startDateObj.year}`
		return dateFormat
	} else {
		const dateFormatDiferenceYear: string = `${startMonthName} ${startDateObj.day}, ${startDateObj.year} - ${endMonthName} ${endDateObj.day}, ${endDateObj.year}`
		return dateFormatDiferenceYear
	}
}
