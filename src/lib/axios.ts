import axios from 'axios'

//Todas las peticiones a la misma url
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

export default api