import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import PageTitle from './'

test('checks if two texts are visible', () => {
    const { getByText } = render(<PageTitle />)
  
    const text1 = getByText('Pokemon informations')
    const text2 = getByText('Ready to start your journey?')

    expect(text1).toBeInTheDocument()
    expect(text2).toBeInTheDocument()
})