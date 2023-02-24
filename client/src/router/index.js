import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EnterView from '../views/EnterView.vue'
import DashboardView from '../views/DashboardView.vue'
import ResumeView from '../views/ResumeView.vue'
import PublicResumeView from '../views/PublicResumeView.vue'

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
    ,
    {
      path: '/resume',
      name: 'resume',
      component: ResumeView,
      meta:{auth:true}
    } 
    ,
    {
      path: '/resume/:mode',
      name: 'resume-edit',
      component: ResumeView,
      meta:{auth:true}
    },
    {
      path: '/resume/public/:id',
      name: 'resume-public',
      component: PublicResumeView,
    } 
  ]
})

router.beforeEach((to, from, next) => {
  const store = useMainStore();

  if(to.meta.auth && !store.userLogged){
   return next('/enter/login')
  }
  else if(store.userLogged && to.name==='enter'){
    return next('/dashboard')
  }
  
  else  next()
})

export default router
