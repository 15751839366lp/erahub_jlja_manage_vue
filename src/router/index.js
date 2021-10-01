import Vue from 'vue'
import VueRouter from 'vue-router'
import system from './modules/system'
import monitor from './modules/monitor'
import business from './modules/business'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import( '../views/login.vue'), //登入页面
    },

    {
        path: '/home',
        component: () => import( '../views/home.vue'), //后台主体框架
        redirect: '/system/welcome',
        children: []
            .concat(system)
            .concat(monitor)
            .concat(business)
    },
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

import store from '../store'//引入store

//白名单页面
const whiteList=[
    '/business/product/add-stocks',
    '/business/product/publish'
];

//路由导航守卫
router.beforeEach((to, from, next) => {

    const token = LocalStorage.get(LOCAL_KEY_XINGUAN_ACCESS_TOKEN);
    if (to.path === '/login') {
        if (!token) {
            return next();
        } else {
            return next({path: '/home'})
        }
    }

    if (to.path === '/error/401') {
        return next();
    }

    if (!token) {
        return next('/login');
    } else {
        //判断是否有访问该路径的权限
        const urls = store.state.userInfo.url;
        //如果是管理员
        if (store.state.userInfo.isAdmin) {
            return next();
        } else {
            if (urls.indexOf(to.path) > -1|| whiteList.indexOf(to.path)>-1) {
                //则包含该元素
                window.sessionStorage.setItem("activePath", to.path);
                return next();
            } else {
                return next("/error/401");
            }
        }
    }
})

export default router
