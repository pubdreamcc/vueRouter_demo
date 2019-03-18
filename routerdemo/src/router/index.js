import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main.vue'
import Person from '../components/Person.vue'
import User from '../components/User.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    {
      path: '/person',
      name: 'Person',
      component: Person,
      children: [
        {
          path: 'user',
          name: 'User',
          component: User
        }
      ]
    }
  ]
})
