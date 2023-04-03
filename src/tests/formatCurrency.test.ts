import { formatCurrency } from '../lib/utils/formatCurrency'

it('adds $ before value', () => {
	const result = formatCurrency(1)
	expect(result).toBe('US$1')
})

it('adds commas every 3 digits', () => {
	const res = formatCurrency(1234)
	expect(res).toBe('US$1,234')
})
