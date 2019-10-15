import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import "./registerServiceWorker";
// import "amfe-flexible";

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// import { Style } from "cube-ui";
// Vue.use(Style);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
