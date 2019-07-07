import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes:[
    {
      path: '/',
      name: 'Home',
      component: () => import(/* webpackChunkName: 'Home' */ '@/pages/Home')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import(/* webpackChunkName: 'Home' */ '@/pages/About')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import(/* webpackChunkName: 'Home' */ '@/pages/Contact')
    },
    {
      path: '/services',
      name: 'Services',
      component: () => import(/* webpackChunkName: 'Home' */ '@/pages/Services')
    },
    {
      path: '/productsServices',
      name: 'ProdServPage',
      component: () => import(/* webpackChunkName: 'Home' */ '@/pages/Products_Services')
    },
    {
      path: '/predictiveAnalytics',
      name: 'PredAnalytics',
      component: () => import(/* webpackChunkName: 'Home' */ '@/pages/Predictive_Analytics')
    },
    {
      path: '/prescriptiveAnalytics',
      name: 'PresAnalytics',
      component: () => import(/* webpackChunkName: 'Home' */ '@/pages/Prescriptive_Analytics')
    },
    {
      path: '/customSolutionDeployment',
      name: 'CusSolDeployment',
      component: () => import(/* webpackChunkName: 'Home' */ '@/pages/Custom_Solution_Deployment')
    }  
  ]
})

export default router