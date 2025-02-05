import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'
import Home from '../veiws/Home.vue'
import About from '../veiws/About.vue'


const routes = [
  {
    path: '/',
    component: MainLayout, // The layout component that includes the navbar
    children: [
      {
        path: '', // This will be the default view for '/'
        name: 'Home',
        component: Home
      },
      {
        path: 'about',
        name: 'About',
        component: About
      },
      
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router