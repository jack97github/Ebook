import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/store'
    },
    {
      path: '/ebook',
      component: () => import('./views/ebook/index.vue'),
      children: [
        {
          path: ':fileName',
          component: () => import('./components/ebook/EbookReader.vue')
        }
      ]
    },
    {
      path: '/store',
      component: () => import('./views/store/index.vue'),
      redirect: '/store/shelf',
      children: [
        {
          path: 'home',
          component: () => import('./views/store/StoreHome.vue')
        },
        {
          path: 'list',
          component: () => import('./views/store/StoreList.vue')
        },
        {
          path: 'detail',
          component: () => import('./views/store/StoreDetail.vue')
        },
        {
          path: 'category',
          component: () => import('./views/store/StoreCategory.vue')
        },
        {
          path: 'shelf',
          component: () => import('./views/store/StoreShelf.vue')
        },
        {
          path: 'speaking',
          component: () => import('./views/store/StoreSpeaking.vue')
        }
      ]
    }
  ]
})
