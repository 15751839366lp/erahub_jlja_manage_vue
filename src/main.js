import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import echarts from 'echarts'
import ZkTable from 'vue-table-with-tree-grid'
import {hasPermission} from './utils/permissionDirect'
const Plugins = [hasPermission]

Plugins.map((plugin) => {
    Vue.use(plugin)
})
Vue.use(ZkTable)
Vue.use(echarts)
NProgress.configure({ease: 'ease', speed: 500});
NProgress.configure({minimum: 0.3});

/**
 * 自定义权限指令
 */
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
