<template>
<div id="contact">
  <section>
    <div class="weui-cells_contact-head weui-cells weui-cells_access" style="margin-top:-1px">
      <router-link to="/contact/new-friends" class="weui-cell">
        <div class="weui-cell_hd"><img class="img-obj-cover" src="../../assets/images/contact_top-friend-notify.png">
        </div>
        <div class="weui-cell_bd weui-cell_primary">
          <p>New Friends</p>
        </div>
      </router-link>
      <router-link to="/contact/group-list" class="weui-cell">
        <div class="weui-cell_hd"><img class="img-obj-cover" src="../../assets/images/contact_top-addgroup.png"></div>
        <div class="weui-cell_bd weui-cell_primary">
          <p>Group Chat</p>
        </div>
      </router-link>
      <router-link to="/contact/tags" class="weui-cell">
        <div class="weui-cell_hd"><img class="img-obj-cover" src="../../assets/images/contact_top-tag.png"></div>
        <div class="weui-cell_bd weui-cell_primary">
          <p>Tags</p>
        </div>
      </router-link>
      <router-link to="/contact/official-accounts" class="weui-cell">
        <div class="weui-cell_hd"><img class="img-obj-cover" src="../../assets/images/contact_top-offical.png"></div>
        <div class="weui-cell_bd weui-cell_primary">
          <p>Official Accounts</p>
        </div>
      </router-link>
    </div>
    <!-- 联系人集合 -->
    <template v-for="(value, key) in contactsList">
        <!-- 首字母 -->
        <div class="weui-cells__title">{{key}}</div>
        <div class="weui-cells">
          <router-link  :to="{path:'/contact/details', query:{wxid:item.wxid}}" class="weui-cell weui-cell_access" v-for="item in value" :key="item.wxid"  tag="div">
            <div class="weui-cell__hd">
              <img :src="item.headerUrl" class="home__mini-avatar___1nSrW" alt="">
            </div>
            <div class="weui-cell__bd">
              {{item.remark?item.remark:item.nickname}}
            </div>
          </router-link>
        </div>
      </template>
  </section>
</div>
</template>
<script type="text/ecmascript-6">
export default {
  mixins: [window.mixin],
  data() {
    return {
      pageName: 'Contact'
    };
  },
  mounted() {
    this.$store.commit('toggleTipsStatus', -1);
  },
  computed: {
    contactsInitialList() {
      return this.$store.getters.contactsInitialList;
    },
    contactsList() {
      return this.$store.getters.contactsList;
    }
  }
};
</script>
<style>
  @import "../../assets/css/contact.css";
</style>
