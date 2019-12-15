import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
<<<<<<< HEAD
import iView from 'iview' // 引入iview依赖
import 'iview/dist/styles/iview.css' // 引入iview css样式


Vue.config.productionTip = false
Vue.use(iView) //使用iview组件 
=======

Vue.config.productionTip = false
>>>>>>> a5b846e31b530d198b00bdb2dbd5ccde37889eb6

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
