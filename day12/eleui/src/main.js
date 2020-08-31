import Vue from 'vue'
import App from './App.vue'
import { Button,Select,Option,MessageBox} from "element-ui"
// import './plugins/element.js'
import 'element-ui/lib/theme-chalk/index.css'

// Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Select)
Vue.use(Option)
Vue.use(MessageBox)

new Vue({
  render: h => h(App),
}).$mount('#app')
