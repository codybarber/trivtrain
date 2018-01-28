import Vue from 'vue'
import Router from 'vue-router'
import Trivia from '@/components/Trivia'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Trivia',
      component: Trivia
    }
  ]
})
