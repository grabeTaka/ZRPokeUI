import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import StartJorney from './'


test('checks if pikachu images in document', () => {
    const { queryByTestId } = render(<StartJorney />)
    const logo = queryByTestId('logo')

    expect(logo).toBeInTheDocument()
})