import Vue from 'vue'
import Router from 'vue-router'
import General from '@/components/General'
import Run from '@/components/Run'
import Charge from '@/components/Charge'
import Drive from '@/components/Drive'
import Diagnosis from '@/components/Diagnosis'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/general',
      name: 'General',
      component: General
    },
    {
      path: '/run',
      name: 'Run',
      component: Run
    },
    {
      path: '/charge',
      name: 'Charge',
      component: Charge
    },
    {
      path: '/drive',
      name: 'Drive',
      component: Drive
    },
    {
      path: '/diagnosis',
      name: 'Diagnosis',
      component: Diagnosis
    },
    {
      path: '/',
      redirect: '/general'
    }
  ]
})
