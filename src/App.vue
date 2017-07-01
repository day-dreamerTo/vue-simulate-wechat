<template>
  <div id="app">
    <welcome></welcome>
    <div class="outer" :class="{'hideLeft':$route.path.split('/').length > 2}">
      <!--头部-->
      <header class="app-header" :class="{'header-hide':!$store.state.headerStatus}">
        <wx-header :pageName="pageName"></wx-header>
      </header>
      <search v-show="$route.path.indexOf('explore') === -1 && $route.path.indexOf('self') === -1"></search>
      <section class="app-content">
        <!--同级页面跳转时只替换该部分-->
        <keep-alive>
          <router-view name="default"></router-view>
        </keep-alive>
      </section>
      <footer class="app-footer">
        <wx-nav></wx-nav>
      </footer>
    </div>
    <!--当有二级页面或更深层级时显示-->
    <transition name="custom-classes-transition" :enter-active-class="enterAnimate" :leave-active-class="leaveAnimate">
      <router-view name="subPage" class="sub-page"></router-view>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  import welcome from './components/common/welcome';
  import wxHeader from './components/common/wx-header';
  import wxNav from './components/common/wx-nav';
  import search from './components/common/search';
  import mixin from './vuex/mixin.js';
  window.mixin = mixin;// 把minxin混合暴露在窗口对象中,某些组件需要时直接提取window.minxin
  export default {
    data() {
      return {
        pageName: '',
        enterAnimate: '',
        leaveAnimate: ''
      };
    },
    components: {
      welcome,
      wxHeader,
      wxNav,
      search
    },
    watch: {
      // 监听 $route 为层级页面跳转时设置不同的过渡效果
      '$route' (to, from) {
        const toDepth = to.path.split('/').length;
        const fromDepth = from.path.split('/').length;
        // 同一级页面无需设置过渡效果
        if (toDepth === fromDepth) {
          return;
        }
        this.enterAnimate = toDepth > fromDepth ? 'animated fadeInRight' : 'animated fadeInLeft';
        this.leaveAnimate = toDepth > fromDepth ? 'animated fadeOutLeft' : 'animated fadeOutRight';
        // 设置最后一页离开的方式
        if (toDepth === 3) {
          this.leaveAnimate = 'animated fadeOutRight';
        }
      }
    }
  };
</script>

<style>
 /*将公用的样式统一在此导入*/
  @import 'assets/css/base.css';
  @import 'assets/css/common.css';
  @import "assets/css/wx-header.css";
  /*阿里 fonticon*/
  @import 'assets/css/lib/iconfont.css';
  /*过渡效果需要的动画库*/
  @import 'assets/css/lib/animate.css';
  /*weui 样式库 非常适合高仿微信*/
  @import 'assets/css/lib/weui.min.css';


</style>
