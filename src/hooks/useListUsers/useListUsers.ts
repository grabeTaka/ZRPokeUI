/* eslint-disable import/no-unresolved */
import { useContext } from 'react'
import { UserContext } from 'context/user/index'

export const useListUsers = () => {
    const context = useContext(UserContext)
    if (!context) {
        throw new Error('You must use useListUser hook inside the useListUsersProvider')
    }

    return { users: context.users, list: context.list, loading: context.loading, handleChangeInput: context.handleChangeInput }
}