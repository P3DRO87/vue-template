import Vue from "vue";
import Vueapp from "./Vueapp.vue";
import VueRouter from "vue-router";
import routes from "./routes";
import store from "./store";

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

new Vue({
  el: "#vueApp",
  render: h => h(Vueapp),
  store,
  router
});
