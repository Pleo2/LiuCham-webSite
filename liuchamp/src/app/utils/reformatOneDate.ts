export const reformatDateToHour = (start: string):string => {
	const startDate = new Date(start)
    const Time = startDate.getTime()
    const format = new Intl.DateTimeFormat('en-US', { timeStyle:'short'}).format(Time)
	return `Every saturday | ${format}`
}
