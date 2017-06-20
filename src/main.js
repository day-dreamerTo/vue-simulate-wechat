import Vue from 'vue';
import axios from 'axios';
import VueAxions from 'vue-axios'; // 必须按照 vue, axios, vue-axios的加载顺序
import Vuex from 'vuex';
import App from './App';
import router from './router';
import store from './vuex/store';
import FastClick from 'fastclick';
import filters from './filters';

Vue.use(VueAxions, axios, Vuex);

filters(Vue);// 注册自定义过滤器

Vue.config.productionTip = true;// 将此值设置为 false ,会关闭 Vue 启动时的提示信息，推荐

FastClick.attach(document.body);

/* eslint-disable no-new */ // 跳过校验
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
