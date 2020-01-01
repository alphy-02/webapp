// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import SlideVerify from 'vue-monoplasty-slide-verify';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import VueAxios from 'vue-axios';
import $ from 'jquery'
import 'bootstrap'
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css'


Vue.config.productionTip = false
Vue.use(SlideVerify);
Vue.use(ElementUI);
Vue.use(VueAxios,axios);
Vue.use(mavonEditor)
// Vue.prototype.websiteUrl='http://localhost:8080'
Vue.prototype.websiteUrl='http://139.129.231.231:8080'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
