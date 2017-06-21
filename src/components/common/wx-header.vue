<template>
  <div id="wx-header">
    <div class="other">
      <!--在"微信"页面显示'+'-->
      <span class="iconfont icon-tips-jia" v-show="$route.path === '/'"
            @click="$store.commit('toggleTipsStatus')"></span>
      <ul class="tips-menu" :class="[$store.state.tipsStatus?'tips-open':'tips-close']"
          @click="$store.commit('toggleTipsStatus',-1)">
        <li>
          <span class="iconfont icon-tips-xiaoxi"></span>
          <span>New Chat</span>
        </li>
        <router-link tag="li" to="/wehchat/add-friend">
          <span class="iconfont icon-tips-add-friend"></span>
          <span>Add Contacts</span>
        </router-link>
        <li><span class="iconfont icon-tips-saoyisao"></span>
          <span>Scan QR Code</span>
        </li>
        <li><span class="iconfont icon-tips-fukuan"></span>
          <span>Money</span>
        </li>
      </ul>
    </div>
    <div class="center">
      <span>{{$store.state.currentPageName}}</span>
      <span class="parentheses" v-show="$route.query.group_num && $route.query.group_num != 1">{{$route.query.group_num}}</span>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    props: ['pageName']
  };
</script>
<style lang="stylus">
  #wx-header
    position: relative
    z-index: 99
    height: 45px
    padding: 0 15px 0 10px
    line-height: 45px
    backgound: #1b1b1b
    opacity: 1
    user-select: none
    -webkit-user-select: none
    transition: all 0.3s liner
    .center
      margin: 0 auto
      text-align: center
      font-size: 17px
      span
        font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Noto Sans CJK SC, WenQuanYi Micro Hei, Arial, sans-serif
      .icon-return-arrow
        position: absolute
        left: 10px
        font-size: 16px
    .other
      position: absolute
      right: 10px
      cursor: pointer
      & > span
        font-size: 16px
        display: inline-block
      .icon-tips-jia
        margin-right: 8px
        font-size: 16px
      .tips-masker
        position: fixed
        left: 0
        top: 45px
        width: 100%
        z-index: 1
      .tips-menu
        position: absolute
        right: 0
        top: 54px
        width: 155px
        z-index: 2
        padding: 0 15px
        font-size: 14px
        text-align: left
        border-radius: 2px
        background-color: #49484b
        -webkit-transform-origin: 90% 0
        transform-origin: 90% 0

  .tips-open
    -webkit-transition: initial
    transition: initial
    opacity: 1

  .tips-close
    opacity: 0
    -webkit-transition: .2s opacity ease, .6s transform ease
    transition: .2s opacity ease, .6s transform ease
    -webkit-transform: scale(0)
    transform: scale(0)

  .other .tips-menu
    li
      position: relative
      height: 40px
      line-height: 40px
      .iconfont
        margin-right: 15px
      &:not(:last-child)::after
        content: ""
        width: 200%
        position: absolute
        bottom: 0
        left: 0
        height: 1px
        background-color: #5b5b5d
        -webkit-transform: scale(0.5)
        transform: scale(0.5)
        -webkit-transform-origin: 0 100%
        transform-origin: 0 100%
    &::before
      width: 0
      height: 0
      position: absolute
      top: -7px
      right: 10px
      content: ""
      border-width: 0 6px 8px
      border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #49484b rgba(0, 0, 0, 0)
      border-style: solid
    .iconfont
      float: left
      font-size: 16px
      margin-right: 15px
</style>
