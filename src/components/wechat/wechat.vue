<template>
  <div id="wechat">
    <ul class="wechat-list">
      <msg-item v-for="baseMsgObj in $store.state.msgList.baseMsg" :item="baseMsgObj" class="list-row line-bottom"
                :key="baseMsgObj.mid"></msg-item>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
  import msgItem from './msg-item.vue';
  export default{
    data() {
      return {};
    },
    components: {
      msgItem
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .wechat-list
    position: relative
    overflow: hidden
    z-index: 1
    .list-row
      height: 64px
      position: relative
      overflow: hidden
      &.item-hide
        transition: all 0.3s
        height: 0
      .list-info
        position: relative
        z-index: 2
        left: 0
        width: 100%
        height: 64px
        padding: 8px
        background-color: #fff
        .header-box
          position: relative
          float: left
          width: 48px
          height: 48px
          margin-right: 10px
          .header
            height: 100%
            border-radius: 5px
            display: flex
            display: -webkit-flex
            flex-direction: row
            flex-wrap: wrap
            align-items: flex-start
            overflow: hidden
            background: #dddbdb
            img
              width: 10%
              height: auto
              flex-grow: 2
              border: 0
            &.multi-header
              img
                margin: 1px
        .desc-box
          overflow: hidden
          .desc-time
            float: right
            color: #b8b8b8
          .desc-author
            height: 25px
            line-height: 25px
            font-size: 16px
            color: #000
          .desc-msg
            height: 23px
            line-height: 23px
            font-size: 14px
            color: #888
            .desc-mute
              float: right
              color: #b8b8b8
      .operate-box
        position: absolute
        z-index: 1
        height: 100%
        right: 0
        top: 0
        display: flex
        & > div
          display: flex
          justify-content: center
          align-items: center
          background-color: #c7c7cc
          color: #fff
          font-size: 14px
          padding: 0 12px
        .operate-del
          background-color: #ff3b30
</style>
