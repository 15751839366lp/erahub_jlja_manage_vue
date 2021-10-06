import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
// import NProgress from 'nprogress'
// import 'nprogress/nprogress.css'
import ZkTable from 'vue-table-with-tree-grid'
// import i18n from './utils/language/i18n'

const app = createApp(App)
installElementPlus(app)

app.directive('hasPermission', (el, binding) => {
    let flag = false;//默认不显示
    let userInfo = store.state.login.userInfo;

    let value = binding.value;

    if (userInfo.isAdmin) {
        //如果是超级管理员
        flag = true;
    } else if (userInfo.perms.indexOf(value) != -1) {
        //如果有该权限按钮显示
        flag = true;
    }
    if (!flag) {
        // if (!el.parentNode) {
        //   el.style.display = 'none'
        // } else {
        //   el.parentNode.removeChild(el);
        // }
        el.setAttribute("disabled", true);
        el.classList.add("is-disabled");
    }
})

app
    .use(ZkTable)
    .use(store)
    // .use(i18n)
    .use(router)
    .mount('#app')

// NProgress.configure({ease: 'ease', speed: 500});
// NProgress.configure({minimum: 0.3});

