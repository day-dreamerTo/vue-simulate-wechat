<template>
  <div id="wx-nav">
    <nav>
      <router-link to="/" tag="dl" exact>
        <dt class="iconfont icon-wechat">
          <i class="new-msg-count" v-show="$store.state.newMsgCount">{{$store.state.newMsgCount}}</i>
        </dt>
        <dd>Chats</dd>
      </router-link>
      <router-link to="/contact" tag="dl">
        <dt class="iconfont icon-contact">

        </dt>
        <dd>Contacts</dd>
      </router-link>
      <router-link to="/explore" tag="dl">
        <dt class="iconfont icon-find">
          <i class="new-msg-dot"></i>
        </dt>
        <dd>Discover</dd>
      </router-link>
      <router-link to="/self" tag="dl">
        <dt class="iconfont icon-me">

        </dt>
        <dd>Me</dd>
      </router-link>
    </nav>
  </div>
</template>
<script type="text/ecmascript-6">
   export default{};
</script>
<style lang="stylus" rel="stylesheet/stylus">
  #wx-nav nav
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
    width: 100%
    height: 50px
    padding-top: 8px
    overflow: hidden
    background: #f9f9f9
    font-size: 12px
    dl
      flex: 1
      line-height: 1;
      cursor: pointer
      user-select: none
      text-align: center
      &.router-link-active
        dd, dt
          color: #0bb908
      dt
        position: relative
        width: 28px
        height: 28px
        margin: 0 auto
        margin-bottom: 2px
        color: #797979
        font-size: 28px
      dd
        color: #929292
        -webkit-transform-origin: 50% 0
        transform-origin: 50% 0
        -webkit-transform: scale(0.9)
        color: #929292
</style>
