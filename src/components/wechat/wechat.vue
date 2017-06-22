<template>
  <div id="wechat">
    <ul class="wechat-list">
      <msg-item v-for="baseMsgObj in $store.state.msgList.baseMsg" :item="baseMsgObj" class="list-row line-bottom" :key="baseMsgObj.mid"></msg-item>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
  import msgItem from './msg-item.vue';
  export default{
    components: {
      msgItem
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
