import Vue from 'vue'
// 挂载vue-router
import Router from 'vue-router'

// 导入页面
const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')

// 安装
Vue.use(Router)

// 路由配置
const routes = [
  {
    path: '',
    redirect: '/home'
  }, {
    path: '/home',
    component: Home
  }, {
    path: '/category',
    component: Category
  }, {
    path: '/cart',
    component: Cart
  }, {
    path: '/profile',
    component: Profile
  }
]
// 创建路由实例
const router = new Router({
  routes,
  mode: 'history'
})

// 导出router
export default router