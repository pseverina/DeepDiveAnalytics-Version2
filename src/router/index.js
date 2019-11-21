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
      path: '/codeMd',
      name: 'CodeMD',
      component: () => import(/* webpackChunkName: 'Home' */ '@/pages/CodeMD')
    },
    {
      path: '/customServices',
      name: 'CustomServices',
      component: () => import(/* webpackChunkName: 'Home' */ '@/pages/CustomServices')
    },
    {
      path: 'termsAndServices',
      name: 'TermsServices',
      component: () => import(/* webpackChunkName: 'Home' */ '@/pages/TermsServices')
    },
    {
      path: 'legalInfo',
      name: 'LegalInfo',
      component: () => import(/* webpackChunkName: 'Home' */ '@/pages/LegalInfo')
    },
    {
      path: '/supplyChain',
      name: 'SupplyChain',
      component: () => import(/* webpackChunkName: 'Home' */ '@/pages/SupplyChain')
    }
  ]
})

export default router