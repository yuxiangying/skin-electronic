import Vue from 'vue'
import App from './App'

Vue.config.productionTip = true

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
