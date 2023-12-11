import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import WithAction from './'


test('checks if spinner is visible', () => {
    const { queryByTestId } = render(<WithAction/>)
    const logo = queryByTestId('logo')

    expect(logo).toBeInTheDocument()
})