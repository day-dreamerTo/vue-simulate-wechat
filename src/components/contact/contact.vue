<template>
  <div id="contact">
    <section>
      <div class="weui-cells_contact-head weui-cells weui-cells_access" style="margin-top:-1px">
        <router-link to="/contact/new-friends" class="weui-cell">
          <div class="weui-cell_hd"><img class="img-obj-cover" src="../../assets/images/contact_top-friend-notify.png">
          </div>
          <div class="weui-cell_bd weui-cell_primary">
            <p>新的朋友</p>
          </div>
        </router-link>
        <router-link to="/contact/group-list" class="weui-cell">
          <div class="weui-cell_hd"><img class="img-obj-cover" src="../../assets/images/contact_top-addgroup.png"></div>
          <div class="weui-cell_bd weui-cell_primary">
            <p>群聊</p>
          </div>
        </router-link>
        <router-link to="/contact/tags" class="weui-cell">
          <div class="weui-cell_hd"><img class="img-obj-cover" src="../../assets/images/contact_top-tag.png"></div>
          <div class="weui-cell_bd weui-cell_primary">
            <p>标签</p>
          </div>
        </router-link>
        <router-link to="/contact/official-accounts" class="weui-cell">
          <div class="weui-cell_hd"><img class="img-obj-cover" src="../../assets/images/contact_top-offical.png"></div>
          <div class="weui-cell_bd weui-cell_primary">
            <p>公众号</p>
          </div>
        </router-link>
      </div>

    </section>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    data() {
      return {

      };
    },
    mounted() {

    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
