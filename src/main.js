import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import "@/scss/main.scss";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')