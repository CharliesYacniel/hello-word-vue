import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'

// import Drawflow from 'drawflow'
// import styleDrawflow from 'drawflow/dist/drawflow.min.css'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  // Drawflow,
  // styleDrawflow,
  render: h => h(App)
}).$mount('#app')
