import Vue from "vue";
import Router from "vue-router";
import Report from "@/views/Report.vue";

Vue.use(Router);

const routerMap = [
  {
    path: "/report",
    name: "report",
    component: Report
  }
];

export default new Router({
  routes: routerMap
});
