import { render, fireEvent } from '@testing-library/react'
import SearchInput from './index'
const handleChangeInput = () => {
    return
}
test('renders SearchInput and checks input change', () => {
    const { getByPlaceholderText } = render(<SearchInput handleChangeInput={handleChangeInput}/>)
    const input = getByPlaceholderText('Search Users')  as HTMLInputElement

    fireEvent.change(input, { target: { value: 'test' } })
    expect(input.value).toBe('test')
})