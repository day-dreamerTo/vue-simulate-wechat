<template>
  <!--显示搜索组件时并没有发生路由-->
  <!--当头部隐藏时,搜索被激活,与搜索有关的部分都显示出来,头部隐藏-->
  <div id="search" :class="{'search-open':!$store.state.headerStatus}">
    <div class="weui-search-bar" id="search_bar" :class="{'weui-search-bar_focusing':!$store.state.headerStatus}">
      <form class="weui-search-bar__form">
        <div class="weui-search-bar__box">
          <i class="weui-icon-search"></i>
          <input type="search" v-model="searchIpt" class="weui-search-bar__input" id="search_input" placeholder="Search"
                 @focus="closeHeader"/>
          <a class="weui-icon-clear" @click="searchClear"></a>
        </div>
        <label for="search_input" class="weui-search-bar__label" id="search_text">
          <i class="weui-icon-search"></i>
          <span>Search</span>
        </label>
      </form>
      <a class="weui-search-bar__cancel-btn" id="search_cancel" @click="$store.commit('toggleHeaderStatus',true)">Cancel</a>
    </div>
    <article>
      <h3 class="weui-media-box__desc">Search Specified Content</h3>
      <div class="tag"><span>Moments</span><span>Aticles</span><span>Official Accounts</span><span>Novel</span><span>Music</span><span>Sticker</span>
      </div>
      <div class="weui-cells">
        <a class="weui-cell weui-cell_access" href="javascript:;">
          <div class="weui-cell__hd"><img src="../../assets/images/book.png" alt=""
                                          style="width:20px;margin-right:5px;display:block"></div>
          <div class="weui-cell__bd">
            <p>Hot Article</p>
          </div>
          <div class="weui-cell__ft"></div>
        </a>
      </div>
    </article>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    data() {
      return {
        searchIpt: ''
      };
    },
    methods: {
      closeHeader() {
        if (this.$store.state.headerStatus) {
          this.$store.commit('toggleHeaderStatus', false);
        }
      },
      searchClear() {
        this.searchIpt = '';
      }
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  #search
    position: relative
    .weui-search-bar__label
      line-height: 1.8
    &.search-open
      z-index: 10
      height: 100%
      width: 100%
      transition: 0.3s
      article
        display: block
    input
      font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Noto Sans CJK SC, WenQuanYi Micro Hei, Arial, sans-serif
    article
      position: absolute
      height: 800px
      display: none
      z-index: 5
      overflow: hidden
      padding-top: 30px
      background: #fff
      width: 100%
      opacity: 0.99
      h3
        text-align: center
      .tag
        margin: 20px 0
        span
          font-size: 14px
          text-align: center
          width: 33.33%
          display: inline-block
          box-sizing: border-box
          color: #09bb07
          border-right: 1px solid rgba(220, 220, 220, 0.67)
          margin-bottom: 15px
          &:nth-child(3n)
            border-right-color: transparent
      .weui-cells
        background-color: transparent
        width: 85%
        margin: 0 auto
        .weui-cell
          padding: 15px
        .weui-cell__hd
          img
            width: 16px
        .weui-cell__bd
          color: #999
          font-size: 13px
    .weui-search-bar__label
      transition: 0.3s
    .weui-search-bar_focusing
      .weui-search-bar__label
        display: block
        transform: translate3d(-100%, 0, 0)
        opacity: 0.0
</style>
