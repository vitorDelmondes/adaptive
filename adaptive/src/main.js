import Vue from 'vue'
import App from './App.vue'

// Vuesax Component Framework
import Vuesax from 'vuesax';
import 'material-icons/iconfont/material-icons.css'; //Material Icons
import 'vuesax/dist/vuesax.css'; // Vuesax
Vue.use(Vuesax);

// Tailwind
import './assets/main.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
