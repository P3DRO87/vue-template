import Vue from "vue";
import Vueapp from "./Vueapp.vue";
import VueRouter from "vue-router";
import routes from "./routes";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
});

new Vue({
  el: "#vueApp",
  render: (h) => h(Vueapp),
  store,
  router,
  vuetify,
});
