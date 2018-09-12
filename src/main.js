import Vue from 'vue'
import routes from './routes'
import VueRouter from 'vue-router'
import router from "./routes.js"
import Vuex from "vuex"
//import Mint from 'mint-ui';
//Vue.use(Mint);
//import 'mint-ui/lib/style.css';
 Vue.use(VueRouter)
 Vue.use(Vuex)
   Vue.config.productionTip=false
 Vue.config.performance=true
   Vue.config.silent = false
const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      const matchingView = routes[this.currentRoute]
      return matchingView
        ? require('./pages/' + matchingView + '.vue')
        : require('./pages/404.vue')
    }
  },
  render (h) {
    return h(this.ViewComponent)
  }
})

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})
Vue.config.warnHandler = function (msg, vm, trace) {
  // `trace` 是组件的继承关系追踪
  console.log(msg)
  console.log(vm)
  console.log(trace)
}
Vue.config.keyCodes = {
  v: 86,
  f1: 112,
  // camelCase 不可用
  mediaPlayPause: 179,
  // 取而代之的是 kebab-case 且用双引号括起来
  "media-play-pause": 179,
  up: [38, 87]
}