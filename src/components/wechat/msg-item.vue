<template>
  <!--消息列表组件 数据交互频繁-->
  <!--进入 dialogue 页面，携带参数 mid name group_num -->
  <li :class="{'item-hide':deleteMsg}">
    <!--自定义指令 v-swiper 用于对每个消息进行滑动处理-->
    <router-link
      :to="{path: '/wechat/dialogue', query: {mid: item.mid,name: item.group_name || (item.user[0].remark || item.user[0].nickname), group_num: item.user.length}}"
      v-swiper="wid"
      tag="div" class="list-info" @click.native="toggleMsgRead($event,'enter')">
      <!--头像-->
      <div class="header-box">
        <!--未读并且未屏蔽 才显示新信息数量-->
        <i class="new-msg-count" v-show="!read&&!item.quiet">{{item.msg.length}}</i>
        <!--未读并且屏蔽 只显示小红点-->
        <i class="new-msg-dot" v-show="!read&&item.quiet"></i>
        <!--如果是私聊，只显示一个头像； 如果是群聊，则显示多个头像，flex 控制样式-->
        <div class="header" :class="[item.type=='group'? 'multi-header': '']">
          <img v-for="userInfo in item.user" :src="userInfo.headerUrl">
        </div>
      </div>
      <!--消息-->
      <div class="desc-box">
        <div class="desc-time">{{item.msg[item.msg.length-1].date | fmtDate('hh:ss')}}</div>
        <div class="desc-author" v-if="item.type=='group'">{{item.group_name}}</div>
        <div class="desc-author" v-else>{{item.user[0].remark || item.user[0].nickname}}</div>
        <div class="desc-msg">
          <div class="desc-mute iconfont icon-mute" v-show="item.quiet"></div>
          <span v-show="item.type=='group'">{{item.msg[item.msg.length-1].name}}:</span>
          <span>{{item.msg[item.msg.length-1].text}}</span>
        </div>
      </div>
    </router-link>
    <div class="operate-box">
      <div class="operate-unread" v-if="read" @click="toggleMsgRead">Mark as Unread</div>
      <div class="operate-read" v-else @click="toggleMsgRead">Mark as read</div>
      <div class="operate-del" @click="deleteMsgEvent">Delete</div>
    </div>
  </li>
</template>
<script type="text/ecmascript-6">
  export default{
    props: ['item'],
    data() {
      return {
        read: this.item.read,
        deleteMsg: false // 用来做css过渡
      };
    },
    computed: {
      wid() {
        return this.read ? 188 : 170; // 控制滑动距离
      }
    },
    methods: {
      toggleMsgRead(event, status) {
        // 直接点击
        if (status === 'enter') {
          if (this.read) {
            return;
          }
          this.read = true;
        } else {
          // 触发标记
          this.read = !this.read;
        }
        if (!this.item.quiet) {
          if (this.read) {
            this.$store.commit('minusNewMsg');
          } else {
            this.$store.commit('addNewMsg');
          }
        }
        event.target.parentNode.parentNode.firstChild.style.marginLeft = 0;
      },
      deleteMsgEvent() {
        // 没有被禁掉的情况下
        if (!this.item.quiet) {
          this.deleteMsg = true;
          // 未阅读
          if (!this.read) {
            this.$store.commit('minusNewMsg');
          }
        }
      }
    },
    directives: {
      swiper: {
        bind: function (element, binding) {
          var isTouchMove, startTx, startTy;
          element.addEventListener('touchstart', function (e) {
            var touches = e.touches[0];
            startTx = touches.clientX;
            startTy = touches.clientY;
            isTouchMove = false;
          }, false);
          element.addEventListener('touchmove', function (e) {
            /* eslint-disable one-var */
            var touches = e.changedTouches[0],
              endTx = touches.clientX,
              endTy = touches.clientY,
              distanceX = startTx - endTx,
              distanceY = startTy - endTy;
            if (distanceX < 0) { //右滑
              if (Math.abs(distanceX) >= Math.abs(distanceY)) {
                if (Math.abs(distanceX) > 20) {
                  element.style.transition = "0.3s";
                  element.style.marginLeft = 0 + "px";
                }
              }
            } else { //左滑
              if (Math.abs(distanceX) >= Math.abs(distanceY)) {
                if (distanceX < binding.value && distanceX > 20) {
                  e.preventDefault();
                  element.style.transition = "0s";
                  element.style.marginLeft = -distanceX + "px";
                  isTouchMove = true;
                }
              }
            }
            // e.preventDefault()
          }, false);
          element.addEventListener('touchend', function (e) {
            if (!isTouchMove) {
              return;
            }
            /* eslint-disable one-var */
            var touches = e.changedTouches[0],
              endTx = touches.clientX,
              endTy = touches.clientY,
              distanceX = startTx - endTx,
              distanceY = startTy - endTy;
            if (Math.abs(distanceX) >= Math.abs(distanceY)) {
              if (distanceX < 0) {
                return;
              }
              if (Math.abs(distanceX) < 60) {
                element.style.transition = "0.3s";
                element.style.marginLeft = 0 + "px";
              } else {
                element.style.transition = "0.3s";
                console.log(binding.value);
                element.style.marginLeft = `-${binding.value}px`;
              }
            }
          }, false);
        },
        update: function (element, binding) {
          var isTouchMove, startTx, startTy;
          element.addEventListener('touchstart', function (e) {
            var touches = e.touches[0];
            startTx = touches.clientX;
            startTy = touches.clientY;
            isTouchMove = false;
          }, false);
          element.addEventListener('touchmove', function (e) {
            /* eslint-disable one-var */
            var touches = e.changedTouches[0],
              endTx = touches.clientX,
              endTy = touches.clientY,
              distanceX = startTx - endTx,
              distanceY = startTy - endTy;
            if (distanceX < 0) { //右滑
              if (Math.abs(distanceX) >= Math.abs(distanceY)) {
                if (Math.abs(distanceX) > 20) {
                  element.style.transition = "0.3s";
                  element.style.marginLeft = 0 + "px";
                }
              }
            } else { //左滑
              if (Math.abs(distanceX) >= Math.abs(distanceY)) {
                if (distanceX < 188 && distanceX > 20) {
                  e.preventDefault();
                  element.style.transition = "0s";
                  element.style.marginLeft = -distanceX + "px";
                  isTouchMove = true;
                }
              }
            }
            // e.preventDefault()
          }, false);
          element.addEventListener('touchend', function (e) {
            if (!isTouchMove) {
              return;
            }
            /* eslint-disable one-var */
            var touches = e.changedTouches[0],
              endTx = touches.clientX,
              endTy = touches.clientY,
              distanceX = startTx - endTx,
              distanceY = startTy - endTy;
            if (Math.abs(distanceX) >= Math.abs(distanceY)) {
              if (distanceX < 0) {
                return;
              }
              if (Math.abs(distanceX) < 60) {
                element.style.transition = "0.3s";
                element.style.marginLeft = 0 + "px";
              } else {
                element.style.transition = "0.3s";
                element.style.marginLeft = `-${binding.value}px`;
              }
            }
          }, false);
        }
      }
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
