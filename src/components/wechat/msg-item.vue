<template>
  <!--消息列表组件 数据交互频繁-->
  <!--进入 dialogue 页面，携带参数 mid name group_num -->
  <li :class="{'item-hide':deleteMsg}">
    <!--自定义指令 v-swiper 用于对每个消息进行滑动处理-->
    <router-link
      :to="{path: '/wechat/dialogue', query: {mid: item.mid,name: item.group_name || (item.user[0].remark || item.user[0].nickname), group_num: item.user.length}}"
      tag="div" class="list-info" v-swiper @click.native="toggleMsgRead($event, 'enter')">
      <div class="header-box">
        <!--未读并且未屏蔽 才显示新信息数量-->
        <i class="new-msg-count" v-show="!read&&!item.quiet">{{item.msg.length}}</i>
        <!--未读并且屏蔽 只显示小红点-->
        <i class="new-msg-do" v-show="!read&&item.quiet"></i>
        <!--如果是私聊，只显示一个头像； 如果是群聊，则显示多个头像，flex 控制样式-->
        <div class="header" :class="[item.type=='group'? 'multi-header': '']">
          <img v-for="userInfo in item.user" :src="userInfo.headerUrl">
        </div>
      </div>
    </router-link>
    <div class="desc-box">
      <div class="desc-time">{{item.msg[item.msg.length-1].date | fmtDate('hh:ss')}}</div>
      <div class="desc-author" v-if="item.type=='group'">{{item.group_name}}</div>
      <div class="desc-author" v-else>{{item.user[0].remark || item.user[0].nickname}}</div>
      div.desc
    </div>
  </li>
</template>
<script type="text/ecmascript-6">
  export default{
    props: ['item'],
    data() {
      return {
        deletMsg: false // 用来做css过渡
      };
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
