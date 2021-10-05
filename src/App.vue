<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
  import echarts from 'echarts'
  import { provide } from 'vue'
  import {useStore} from "vuex";
  import {useRouter,useRoute} from "vue-router";

  export default {
    name: 'app',
    setup(){
      const store = useStore();

      // // 在页面加载时读取sessionStorage
      // if (sessionStorage.getItem('store')) {
      //     this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem('store'))))
      // }
      // // 在页面刷新时将store保存到sessionStorage里
      // window.addEventListener('beforeunload', () => {
      //     sessionStorage.setItem('store', JSON.stringify(this.$store.state))
      // })

      //在页面加载时读取localStorage里的状态信息
      window.localStorage.getItem("store") && store.replaceState(Object.assign(store.state,JSON.parse(window.localStorage.getItem("store"))));

      //在页面刷新时将vuex里的信息保存到localStorage里
      window.addEventListener("beforeunload",()=>{
        window.localStorage.setItem("store",JSON.stringify(store.state))
      })
    }
  };
</script>
<style>
html,body{margin: 0px;padding: 0px;width: 100%;height: 100%;}
#app{width: 100%;height: 100%!important;margin: 0px;padding: 0px;position: absolute;background: #2d3a4b;
}
 #nprogress .bar {
      background: rgb(96, 47, 231) !important;
}
</style>

