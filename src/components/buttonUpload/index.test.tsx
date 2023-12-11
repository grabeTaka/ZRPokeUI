import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ButtonUpload from './'
const handleOnSubmit = () => {
    return
}
test('checks if button is disabled', () => {
    const { getByRole } = render(<ButtonUpload  handleOnSubmit={handleOnSubmit} file={null} submitingCsv={false}/>)
    const button = getByRole('button')

    expect(button).toBeDisabled()
})