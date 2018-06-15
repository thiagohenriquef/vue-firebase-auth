import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/components/Login')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('@/components/SignUp')
    },
    {
      path: '/hello',
      name: 'hello',
      component: () => import('@/components/Hello'),
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) {
    alert('You\'re not logged in!')
    next('login')
    return
  }
  if (!requiresAuth && currentUser) {
    next('hello')
    return
  }
  next()
})

export default router
