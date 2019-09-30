import Vue from 'vue'
import Router from 'vue-router'
import Index from "../pages/index"
import GoodsList from '../components/goods/goodsList'
import HuFu from '../components/goods/hufu'
import MuYu from '../components/goods/muyu'
import HuShou from '../components/goods/hushou'
import RunChun from '../components/goods/runchun'
import XieZhaung from '../components/goods/xiezhuang'
import MianMo from '../components/goods/mianmo'
import AboutUs from '../components/goods/aboutus'
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',component:Index},
    {path: '/index',component: Index},
    {path:'/goodsList',component:GoodsList},
    {path:'/hufu',component:HuFu},
    {path:'/muyu',component:MuYu},
    {path:'/hushou',component:HuShou},
    {path:'/runchun',component:RunChun},
    {path:'/xiezhuang',component:XieZhaung},
    {path:'/mianmo',component:MianMo},
    {path:'/aboutus',component:AboutUs}

  ]
})
