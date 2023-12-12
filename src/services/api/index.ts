import axios from 'axios'

const {
    REACT_APP_API_ENDPOINT,
} = process.env

const api = axios.create({
    baseURL: REACT_APP_API_ENDPOINT || 'https://zrpokeapi.onrender.com',
})


export default api
