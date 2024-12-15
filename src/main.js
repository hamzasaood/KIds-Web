// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router
//import axios from 'axios';
/*
axios.interceptors.request.use((config) => {
    const token = localStorage.getItem('auth_token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});
*/


// Use the router in your Vue app
createApp(App).use(router).mount('#app');
