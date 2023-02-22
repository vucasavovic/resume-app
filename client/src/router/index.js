import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EnterView from '../views/EnterView.vue'
import DashboardView from '../views/DashboardView.vue'
import { useMainStore } from '../stores/main'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/enter/:mode',
      name: 'enter',
      component: EnterView
    } ,
    {
      path: '/dashboard',
      name: 'dasboard',
      component: DashboardView,
      meta:{auth:true}
    } 
  ]
})

router.beforeEach((to, from, next) => {
  const store = useMainStore();

  if(to.meta.auth && !store.userLogged){
   next('/enter/login')
  }
  else  next()
})

export default router
