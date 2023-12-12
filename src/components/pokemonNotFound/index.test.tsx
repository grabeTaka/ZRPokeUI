import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import PokemonNotFound from './'


test('checks if pikachu images in document', () => {
    const { queryByTestId } = render(<PokemonNotFound />)
    const logo = queryByTestId('logo')

    expect(logo).toBeInTheDocument()
})