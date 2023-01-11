import Vue from 'vue'
import App from './App'
import store from './store'
import LsxmRequest from './service/LsxmRequest.js'
import lsxmRequest from './service/config.js'
import apis from './service/apis.js'
import tools from './common/tools.js'
import MescrollBody from "./components/mescroll-uni/mescroll-body.vue"
import MescrollUni from "./components/mescroll-uni/mescroll-uni.vue"
Vue.config.productionTip = false

Vue.prototype.$store = store
Vue.prototype.$tools = tools
Vue.prototype.baseURL = lsxmRequest.getConfig().baseURL
App.mpType = 'app'
Vue.component('MescrollBody',MescrollBody)
Vue.component('MescrollUni',MescrollUni)
Vue.use(LsxmRequest)

Date.prototype.format = tools.formatDate
const app = new Vue({
	store,
	apis,
    ...App
})
app.$mount()
