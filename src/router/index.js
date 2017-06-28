import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [{
  path: '/',
  name: '',
  component: require('../components/wechat/wechat.vue')
}, {
  path: '/wechat/dialogue',
  name: '',
  components: {
    'default': require('../components/wechat/wechat.vue'),
    'subPage': require('../components/wechat/dialogue.vue')
  }
}, {
  path: '/wechat/dialogue/dialogue-info',
  name: '',
  components: {
    subPage: require('../components/wechat/dialogue-info.vue')
  }
}, {
  path: '/wechat/dialogue/dialogue-detail',
  name: '',
  components: {
    subPage: require('../components/wechat/dialogue-detail.vue')
  }
}];
export default new Router({
  base: '/',
  routes
  // scrollBehavior(to, from, savedPosition) {
  //     if (savedPosition) {
  //         return savedPosition
  //     } else {
  //         return { x: 0, y: 0 }
  //     }
  // }
});
