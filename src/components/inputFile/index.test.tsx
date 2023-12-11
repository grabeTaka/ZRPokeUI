import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import InputFile from './'

const handleOnChange = () => {
    return
}
test('checks if spinner is visible', () => {
    const { queryByTestId } = render(<InputFile handleOnChange={handleOnChange}/>)
    const input = queryByTestId('inputFile')

    expect(input).toBeInTheDocument()
})