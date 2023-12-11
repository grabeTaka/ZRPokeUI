import axios from 'axios'

const {
    REACT_APP_API_ENDPOINT,
} = process.env

const api = axios.create({
    baseURL: REACT_APP_API_ENDPOINT || 'http://localhost:3000/api',
})


export default api
