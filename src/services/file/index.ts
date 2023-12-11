import api from '../api/index'
import { fileServiceInterface } from './index.d'

class FileService implements fileServiceInterface {
    async send(file: any) {

        try {
            const formData = new FormData()
            formData.append('file', file)
            const response = await api.post('/files/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            console.info(response)
            return {status: response.status, message: response.data.message}
        } catch (error: any) {
            console.info(error.response)
            return {status: error.response.data.code, message: error.response.data.message}
        }
    }
}

const fileService = new FileService()
export default fileService
