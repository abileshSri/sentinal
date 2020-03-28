import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import router from "./router/index.js";
import Sidebar from "./layouts/sidebar.vue";
import NoSidebar from "./layouts/NoSidebar.vue";
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(VueSidebarMenu)
Vue.use(BootstrapVue)
Vue.component("sidebar-layout", Sidebar)
Vue.component("no-sidebar-layout", NoSidebar)
Vue.config.productionTip = false
new Vue({
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app')
