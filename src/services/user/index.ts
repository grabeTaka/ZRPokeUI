import api from '../api/index'
import { ApiException } from '../api/exception'
import { userServiceInterface } from './index.d'

class UserService implements userServiceInterface {
    async list(query?: string) {
        try {

            let url = ''
            if (query)
                url = `/users/?q=${query}`
            else
                url = '/users/'

            const response = await api.get(url)
            return response.data
        } catch (error: any) {
            throw new ApiException(error.message)
        }
    }
}

const userService = new UserService()
export default userService
