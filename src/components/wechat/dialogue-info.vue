<template>
  <div class="dialogue-info">
    <header id="wx-header">
      <!--<div class="other"><span>添加朋友</span></div>-->
      <div class="center">
        <div class="iconfont icon-return-arrow" v-on:click="$router.back()">
          <span>Back</span>
        </div>
        <span>Group({{$route.query.msgInfo.user.length}})</span>
      </div>
    </header>
    <div class="member">
      <ul class="chat-dialogue-entry-collect">
        <li v-for="item in $route.query.msgInfo.user">
          <div><img :src="item.headerUrl"></div>
          <p>{{item.remark||item.nickname}}</p>
        </li>
        <li>
          <div><span class="iconfont icon-chat-detail-add"></span></div>
        </li>
      </ul>
    </div>
    <div class="weui-cells">
      <div class="weui-cell weui-cell_access">
        <div class="weui-cell__bd">Group Name</div>
        <div class="weui-cell__ft">{{$route.query.msgInfo.group_name}}</div>
      </div>
      <div class="weui-cell weui-cell_access">
        <div class="weui-cell__bd">Group QR Code</div>
        <div class="weui-cell__ft"><img class="_align-middle" style="height:24px" src="../../assets/images/chat-info-qr.png"></div>
      </div>
      <div class="weui-cell weui-cell_access">
        <div class="weui-cell__bd">Group Notice</div>
        <div class="weui-cell__ft">Not Set</div>
      </div>
    </div>
    <div class="weui-cells">
      <div class="weui-cell weui-cell_switch">
        <div class="weui-cell__bd">Mute Notification</div>
        <div class="weui-cell__ft"><input type="checkbox" class="weui-switch" v-model="$route.query.msgInfo.quiet"></div>
      </div>
      <div class="weui-cell weui-cell_switch">
        <div class="weui-cell__bd">Sticky on Top</div>
        <div class="weui-cell__ft"><input type="checkbox" class="weui-switch"></div>
      </div>
      <div class="weui-cell weui-cell_switch">
        <div class="weui-cell__bd">Save to Contacts</div>
        <div class="weui-cell__ft"><input type="checkbox" class="weui-switch"></div>
      </div>

    </div>
    <div class="weui-cells">
      <div class="weui-cell weui-cell_access">
        <div class="weui-cell__bd">My Alias in Group</div>
        <div class="weui-cell__ft"></div>
      </div>
      <div class="weui-cell weui-cell_switch">
        <div class="weui-cell__bd">On-screen Names</div>
        <div class="weui-cell__ft"><input type="checkbox" class="weui-switch" v-model="showNickname"></div>
      </div>
    </div>
    <div class="weui-cells">
      <div class="weui-cell weui-cell_access">
        <div class="weui-cell__bd">Search History</div>
        <div class="weui-cell__ft"></div>
      </div>
      <div class="weui-cell weui-cell_access">
        <div class="weui-cell__bd">Background</div>
        <div class="weui-cell__ft"></div>
      </div>
      <div class="weui-cell weui-cell_access">
        <div class="weui-cell__bd">Report</div>
        <div class="weui-cell__ft"></div>
      </div>
    </div>
    <div class="weui-cells">
      <div class="weui-cell">
        <div class="weui-cell__bd">Clear Chat History</div>
        <div class="weui-cell__ft"></div>
      </div>
    </div>
    <span class="weui-btn weui-btn_warn" style="margin-top: 15px;padding: 0 20px; width:90%;">删除并退出</span>
  </div>
</template>
<script>
    export default {
        data() {
            return {
                showNickname: true
            };
        }
    };
</script>
<style>
    .dialogue-info {
        min-height: 100%;
        bottom: inherit;
        padding-bottom: 30px;
    }

    .chat-dialogue-entry-collect {
        background-color: #fff;
        position: relative;
        padding: 15px 10px 5px;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;
        color: #464646;
        font-size: 14px;
    }

    .chat-dialogue-entry-collect:before {
        content: "";
        position: absolute;
        width: 200%;
        left: 0;
        bottom: 0;
        transform: scale(.5);
        transform-origin: 0 0;
        -webkit-transform: scale(.5);
        -webkit-transform-origin: 0 0;
        background-color: #b7b7b7;
        height: 1px;
        z-index: 2;
    }

    .chat-dialogue-entry-collect li {
        float: left;
        flex-grow: 1;
        flex-basis: 25%;
        max-width: 25%;
        padding: 5px 10px;
        text-align: center;
    }

    .chat-dialogue-entry-collect li>div {
        position: relative;
        border-radius: 6px;
        overflow: hidden;
        width: 55px;
        height: 55px;
        margin: 0 auto;
        background-size: cover;
        border: 1px solid #eee;
    }

    .chat-dialogue-entry-collect li>div img {
        width: 100%;
    }

    .chat-dialogue-entry-collect li p {
        margin-top: 5px;
    }

    .chat-dialogue-entry-collect li .iconfont {
        font-size: 23px;
        color: #bbb;
        line-height: 55px
    }
</style>
