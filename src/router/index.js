import {createRouter, createWebHistory} from 'vue-router'
import EventListView from '../views/EventListView.vue' // importe la home page seulement

const router = createRouter(
  {
    history: createWebHistory( import.meta.env.BASE_URL ),
    routes: [
      {
        path: '/',
        name: 'event-list',
        component: EventListView
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
      },
      {
        path: '/event-detail',
        name: 'eventdetail',
        component: () => import( '../views/EventDetail.vue' )
      }
    ]
  }
)

export default router
