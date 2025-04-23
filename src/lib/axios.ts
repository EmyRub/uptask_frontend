import axios from 'axios'

//Todas las peticiones a la misma url
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

// Antes de cada request, se manda el token
api.interceptors.request.use(config => {
    const token = localStorage.getItem('AUTH_TOKEN')

    if (token) {
        // Se manda el token desde headers
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

export default api