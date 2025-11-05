import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json'
  }
})

// Interceptor para agregar token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// API de autenticación
export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData),
  verifyToken: () => api.get('/auth/verify')
}

// API de publicaciones
export const publicacionesAPI = {
  getAll: (params) => api.get('/publicaciones', { params }),
  getById: (id) => api.get(`/publicaciones/${id}`),
  create: (data) => api.post('/publicaciones', data),
  updateEstado: (id, estado) => api.put(`/publicaciones/${id}/estado`, { estado_publicacion: estado }),
  getByUser: (userId) => api.get(`/publicaciones/usuario/${userId}`),
  delete: (id) => api.delete(`/publicaciones/${id}`)
}

// API de categorías
export const categoriasAPI = {
  getAll: () => api.get('/categorias')
}

// API de conversaciones
export const conversacionesAPI = {
  getByUser: (userId) => api.get(`/conversaciones/${userId}`)
}

// API de mensajes
export const mensajesAPI = {
  getByConversacion: (conversacionId) => api.get(`/mensajes/${conversacionId}`),
  send: (data) => api.post('/mensajes', data)
}

// API de favoritos
export const favoritosAPI = {
  getByUser: (userId) => api.get(`/favoritos/${userId}`)
}

// API de valoraciones
export const valoracionesAPI = {
  getByUser: (userId) => api.get(`/valoraciones/${userId}`)
}

export default api