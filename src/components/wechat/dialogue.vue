<template>
  <div class="dialogue">
    <header id="wx-header">
      <div class="other">
        <!--右侧图标 群or个人-->
        <router-link :to="{path: '/wechat/dialogue/dialogue-info',query:{msgInfo: msgInfo}}" tag="span"
                     class="iconfont icon-chat-group"
                     v-show="$route.query.group_num&&$route.query.group_num!=1"></router-link>
        <router-link :to="{path:'/wechat/dialogue/dialogue-detail', query:{msgInfo: msgInfo}}" tag="span"
                     class="iconfont icon-chat-friends" v-show="$route.query.group_num == 1"></router-link>
      </div>
      <div class="center">
        <router-link to="/" tag="div" class="iconfont icon-return-arrow"><span>WeChat</span></router-link>
        <span>{{pageName}}</span>
        <span class="parenthese" v-show="$route.query.group_num&&$route.query.group_num!=1"></span>
      </div>
    </header>
    <section class="dialogue-section clearfix" @click="menuOutsideClick">
      <div class="row clearfix" v-for="item in msgInfo.msg">
        <img :src="item.headerUrl" class="header">
        <p class="text" v-more>{{item.text}}</p>
      </div>
      <span class="msg-more" id="msg-more">
        <ul>
          <li>Copy</li>
          <li>Forward</li>
          <li>Favorite</li>
          <li>Delete</li>
        </ul>
      </span>
    </section>
    <footer class="dialogue-footer">
      <div class="component-dialogue-bar-person">
        <span class="iconfont icon-dialogue-jianpan" v-show="!currentChatWay" @click="currentChatWay=true"></span>
        <span class="iconfont icon-dialogue-voice" v-show="currentChatWay" @click="currentChatWay=false"></span>
        <div class="chat-way" v-show="!currentChatWay">
          <div class="chat-say" v-press>
            <span class="one">Hold to Talk</span>
            <span class="two">Release to Send</span>
          </div>
        </div>
        <div class="chat-way" v-show="currentChatWay">
          <input class="chat-txt" type="text" @focus="focusIpt" @blur="blurIpt"/>
        </div>
        <span class="expression iconfont icon-dialogue-smile"></span>
        <span class="more iconfont icon-dialogue-jia"></span>
        <div class="recording" style="display: none;" id="recording">
          <div class="recording-voice" style="display: none;" id="recording-voice">
            <div class="voice-inner">
              <div class="voice-icon"></div>
              <div class="voice-volume">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <p class="cancel-one-hook">Release to Cancel</p>
            <p class="cancel-two-hook" style="display: none">Slide up to Cancel</p>
          </div>
          <div class="recording-cancel" style="display: none;">
            <div class="cancel-inner"></div>
            <p>Release to Cancel</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    data() {
      return {
        pageName: this.$route.query.name,
        currentChatWay: true, // true为键盘打字,false为语音输入
        timer: null
      };
    },
    computed: {
      msgInfo() {
        for (var i in this.$store.state.msgList.baseMsg) {
          if (this.$store.state.msgList.baseMsg[i].mid === Number(this.$route.query.mid)) {
            return this.$store.state.msgList.baseMsg[i];
          }
        }
      }
    },
    methods: {
      // 解决输入法被激活时 底部输入框被遮住问题
      focusIpt() {
        this.timer = setInterval(function () {
          document.body.scrollTop = document.body.scrollHeight;
        }, 100);
      },
      blurIpt() {
        clearInterval(this.timer);
      },
      // 点击空白区域,菜单被隐藏
      menuOutsideClick(e) {
        var msgMore = document.getElementById('msg-more');
        if (e.target.className === 'text') {

        } else {
          msgMore.style.display = 'none';
        }
      }
    },
    directives: {
      press: {
        bind(el, binding) {
          var startTx, startTy;
          el.addEventListener('touchstart', function (e) {
            // 每次注册监听器都要重新获取一次dom
            var recording = document.querySelector('.recording'),
              recordingVoice = document.querySelector('.recording-voice'),
              one = document.querySelector('.one'),
              two = document.querySelector('.two'),
              cancel_one = document.querySelector('.cancel-one-hook'),
              cancel_two = document.querySelector('.cancel-two-hook');
            el.className = 'chat-say say-active';
            one.style.display = 'none';
            two.style.display = 'block';
            cancel_one.style.display = 'none';
            cancel_two.style.display = 'block';
            recording.style.display = recordingVoice.style.display = 'block';
            var touches = e.touches[0];
            startTx = touches.clientX;
            startTy = touches.clientY;
            e.preventDefault();
          }, false);
          el.addEventListener('touchmove', function (e) {
            var recording = document.querySelector('.recording'),
              recordingVoice = document.querySelector('.recording-voice'),
              recordingCancel = document.querySelector('.recording-cancel');
            var touches = e.changedTouches[0],
              endTx = touches.clientX,
              endTy = touches.clientY,
              distanceY = startTy - endTy;
            if (distanceY > 10 && distanceY < 80) {
              // 控制范围 和谐掉之间抖动
              el.className = 'chat-say';
              recordingVoice.style.display = 'none';
              recordingCancel.style.display = 'block';
            } else if (distanceY > 80) {
              el.className = 'chat-say';
              recording.style.display = recordingCancel.style.display = 'none';
            }
          }, false);
          el.addEventListener('touchend', function (e) {
            var recording = document.querySelector('.recording'),
              recordingVoice = document.querySelector('.recording-voice'),
              recordingCancel = document.querySelector('.recording-cancel'),
              one = document.querySelector('.one'),
              two = document.querySelector('.two');
            el.className = "chat-say";
            one.style.display = 'block';
            two.style.display = 'none';
            recordingCancel.style.display = recording.style.display = recordingVoice.style.display = "none";
            e.preventDefault();
          }, false);
        }
      },
      more: {
        bind(el, binding) {
          let startTx;
          let startTy;
          el.addEventListener('touchstart', function (e) {
            let msgMore = document.getElementById('msg-more');
            console.log(msgMore);
            let touches = e.changedTouches[0];
            startTx = touches.clientX;
            startTy = touches.clientY;
            msgMore.style.left = ((startTx - 18) > 180 ? 180 : (startTx - 18)) + 'px';
            msgMore.style.top = (el.offsetTop - 33) + 'px';
            msgMore.style.display = 'block';
            e.preventDefault();
          }, false);
          el.addEventListener('touchend', function (e) {
            e.preventDefault();
          }, false);
        }
      }
    }
  };
</script>
<style>
  @import "../../assets/css/dialogue.css";






</style>
