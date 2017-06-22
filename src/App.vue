<template>
  <div id="app">
    <welcome></welcome>
    <div class="outer">
      <!--头部-->
      <header class="app-header" :class="{'header-hide':!$store.state.headerStatus}">
        <wx-header :pageName="pageName"></wx-header>
      </header>
      <search v-show="$route.path.indexOf('explore') === -1 && $route.path.indexOf('self') === -1"></search>
      <section class="app-content">
        <keep-alive>
          <router-view name="default"></router-view>
        </keep-alive>
      </section>
      <footer class="app-footer">
        <wx-nav></wx-nav>
      </footer>
    </div>
  </div>
</template>

<script>
  import welcome from './components/common/welcome';
  import wxHeader from './components/common/wx-header';
  import wxNav from './components/common/wx-nav';
  import search from './components/common/search';
  import wechat from './components/wechat/wechat';
  export default {
    data() {
      return {
        'pageName': ''
      };
    },
    components: {
      welcome,
      wxHeader,
      wxNav,
      search,
      wechat
    }
  };
</script>

<style>
 /*将公用的样式统一在此导入*/
  @import 'assets/css/base.css';
  @import 'assets/css/common.css';
  /*阿里 fonticon*/
  @import 'assets/css/lib/iconfont.css';
  /*过渡效果需要的动画库*/
  @import 'assets/css/lib/animate.css';
  /*weui 样式库 非常适合高仿微信*/
  @import 'assets/css/lib/weui.min.css';
</style>
