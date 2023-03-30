const formatter = Intl.NumberFormat('en-gb', {
	style: 'currency',
	currency: 'USD',
	minimumFractionDigits: 0
})

export const formatCurrency = (value: number) => formatter.format(value)
