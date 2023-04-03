import { render } from '@testing-library/svelte'
import CurrencyStat from '$lib/components/CurrencyStat.svelte'

it('displays the given value formatted', () => {
	const value = 123
	const { getByText } = render(CurrencyStat, { value })
	expect(getByText(`US$${value}`)).toBeInTheDocument()
})
