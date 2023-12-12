import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import AbilityHeader from './'


test('checks if pikachu images in document', () => {
    const { queryByTestId } = render(<AbilityHeader pokemonName='Charizard'/>)
    const leftLogo = queryByTestId('leftImage')
    const rigthLogo = queryByTestId('rigthImage')

    expect(leftLogo).toBeInTheDocument()
    expect(rigthLogo).toBeInTheDocument()
})