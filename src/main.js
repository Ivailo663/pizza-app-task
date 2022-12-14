import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import store from "./plugins/store";
import router from "./plugins/router";
import { capitalize, uppercase } from "./filters";

Vue.config.productionTip = false;

Vue.filter(capitalize.name, capitalize.filter);
Vue.filter(uppercase.name, uppercase.filter);

new Vue({
  vuetify,
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
