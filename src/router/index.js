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
    default: require('../components/wechat/wechat.vue'),
    subPage: require('../components/wechat/dialogue.vue')
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
}, {
  path: '/contact',
  name: '',
  component: require('../components/contact/contact.vue')
}, {
  path: '/contact/add-friend',
  name: '',
  components: {
    default: require('../components/contact/contact.vue'),
    subPage: require('../components/contact/add-friend.vue')
  }
}, {
  path: '/contact/details',
  name: '',
  components: {
    default: require('../components/contact/contact.vue'),
    subPage: require('../components/contact/details.vue')
  }
}, {
  path: '/contact/official-accounts',
  name: '',
  components: {
    default: require('../components/contact/contact.vue'),
    subPage: require('../components/contact/official-accounts.vue')
  }
}, {
  path: '/contact/group-list',
  name: '',
  components: {
    default: require('../components/contact/contact.vue'),
    subPage: require('../components/contact/group-list.vue')
  }
}, {
  path: '/contact/new-friends',
  name: '',
  components: {
    default: require('../components/contact/contact.vue'),
    subPage: require('../components/contact/new-friends.vue')
  }
}, {
  path: '/contact/tags',
  name: '',
  components: {
    default: require('../components/contact/contact.vue'),
    subPage: require('../components/contact/tags.vue')
  }
}, {
  path: '/explore',
  name: '',
  component: require('../components/explore/explore.vue')
}, {
  path: '/explore/moments',
  name: '',
  components: {
    default: require('../components/explore/explore.vue'),
    subPage: require('../components/explore/moments.vue')
  }
}, {
  path: '/self',
  name: '',
  component: require('../components/self/self.vue')
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
