import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue' // importe la home page seulement

const router = createRouter(
  {
    history: createWebHistory( import.meta.env.BASE_URL ),
    routes: [
      {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( '../views/AboutView.vue' ) // au clic importe la page AboutView
      },
      {
        path: '/counter',
        name: 'counter',
        component: () => import( '../views/Counter.vue' )
      },
      {
        path: '/counter2',
        name: 'counter2',
        component: () => import( '../views/Counter2.vue' )
      }
    ]
  }
)

export default router
