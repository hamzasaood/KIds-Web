// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import AboutPage from '../components/AboutPage.vue';
import ClassPage from '../components/ClassPage.vue';
import GalleryPage from '../components/GalleryPage.vue';
import ContactPage from '../components/ContactPage.vue';







// Define the routes
const routes = [
  { path: '/', component: HomePage, name: 'Home' },
  { path: '/About-us', component: AboutPage, name: 'About' },
  { path: '/Classes', component: ClassPage, name: 'Class' },
  { path: '/Our-Gallery', component: GalleryPage, name: 'Gallery' },
  { path: '/Contact-us', component: ContactPage, name: 'Contact' },

 

];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
