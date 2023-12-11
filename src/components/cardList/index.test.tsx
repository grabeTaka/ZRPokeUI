import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CardList from './'

const users = [{
    id: '1',
    name: 'John Doe',
    city: 'New York',
    country: 'United States',
    favoriteSport: 'Basketball'

}]

test('checks if spinner is visible', () => {
    const { queryByTestId } = render(<CardList users={[]} loading={true} />)
    const spinner = queryByTestId('spinner')

    expect(spinner).toBeInTheDocument()
})

test('checks if icon no users visible', () => {
    const { queryByTestId } = render(<CardList users={[]} loading={false} />)
    const noUser = queryByTestId('nouser')

    expect(noUser).toBeInTheDocument()
})

test('checks if icon no users visible', () => {
    const { queryByTestId } = render(<CardList users={users} loading={false} />)
    const noUser = queryByTestId('withuser')

    expect(noUser).toBeInTheDocument()
})