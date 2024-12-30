// import axios from 'axios';

// const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// const api = axios.create({
//   baseURL: API_URL,
//   headers: {
//     'Content-Type': 'application/json'
//   }
// });

// // Request interceptor
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem('token');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// }, (error) => {
//   return Promise.reject(error);
// });

// // Response interceptor
// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     console.error('API Error:', error.response); // Debug log
//     if (error.response?.status === 401) {
//       localStorage.removeItem('token');
//       window.location.href = '/login';
//     }
//     return Promise.reject(error.response?.data || { message: 'Network error occurred' });
//   }
// );

// export const authService = {
//   signup: async (userData) => {
//     try {
//       const response = await api.post('/auth/signup', userData);
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   },

//   login: async (credentials) => {
//     try {
//       console.log('Sending login request with:', credentials); // Debug log
//       const response = await api.post('/auth/login', credentials);
//       console.log('Login response:', response.data); // Debug log
//       return response.data;
//     } catch (error) {
//       console.error('Login API error:', error);
//       throw error;
//     }
//   },

//   getCurrentUser: async () => {
//     try {
//       const response = await api.get('/auth/me');
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   },

//   logout: () => {
//     localStorage.removeItem('token');
//   }
// };

// export default api; 
// import axios from 'axios';

// const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// const api = axios.create({
//   baseURL: API_URL,
//   headers: {
//     'Content-Type': 'application/json'
//   }
// });

// // Request interceptor
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem('token');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// }, (error) => {
//   return Promise.reject(error);
// });

// // Response interceptor
// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.code === 'ERR_CONNECTION_REFUSED') {
//       console.error('Server connection refused. Please ensure backend server is running on port 5000');
//       return Promise.reject({ message: 'Server is not running. Please try again later.' });
//     }
//     return Promise.reject(error.response?.data || { message: 'Network error occurred' });
//   }
// );

// export const authService = {
//   signup: async (userData) => {
//     try {
//       const response = await api.post('/auth/signup', userData);
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   },

//   login: async (credentials) => {
//     try {
//       console.log('Sending login request with:', credentials); // Debug log
//       const response = await api.post('/auth/login', credentials);
//       console.log('Login response:', response.data); // Debug log
//       return response.data;
//     } catch (error) {
//       console.error('Login API error:', error);
//       throw error;
//     }
//   },

//   getCurrentUser: async () => {
//     try {
//       const response = await api.get('/auth/me');
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   },

//   logout: () => {
//     localStorage.removeItem('token');
//   }
// };

// export default api; 


import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api; 