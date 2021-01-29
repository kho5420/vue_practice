import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import {router} from "../src/router/index.js";
import axios from 'axios';
import "core-js/stable";
import "regenerator-runtime/runtime";
import "@babel/polyfill";
import store from "../src/store/index.js"
import select2 from "../src/components/Select2.vue"

Vue.prototype.$axios = axios;
Vue.use(Vuex)
Vue.component(select2.name, select2)

new Vue({
    render: h => h(App),
    router,
    store
  }).$mount('#app')