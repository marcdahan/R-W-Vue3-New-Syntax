
import {createRouter, createWebHistory} from 'vue-router'
import EventListView from '../views/EventListView.vue'
//EventDetailsView from '../views/EventDetail.vue'
//import AboutView from '../views/AboutView.vue'

const router = createRouter( {
  history: createWebHistory( import.meta.env.BASE_URL ),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventListView,
    },
    {
      path: '/about',
      name: 'about',
      //component: AboutView,
      component: () => import( '../views/AboutView.vue' ) // au clic importe la page AboutView
    },
    {
      path: '/event/:id',
      props: true,
      name: 'event-details',
      //component: EventDetailsView,
      component: () => import( '../views/EventDetail.vue' )
    },
  ],
} )

export default router
