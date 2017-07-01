<template>
    <!--添加好友组件 还需要完善-->
    <div class="add-friend">
        <header id="wx-header">
            <div class="center">
                <div v-on:click="$router.back()" class="iconfont icon-return-arrow">
                    <span>Contacts</span>
                </div>
                <span>Add Contacts</span>
            </div>
        </header>
        <div class="search-line">
            <span class="iconfont icon-search"></span>
            <input type="text" placeholder="Wechat ID/Phone">
        </div>
        <p style="padding-top:8px;text-align: center;">
            <span>My Wechat ID:h864412219</span>
            <span>10086</span>
            <router-link to="/self/profile/my-qrcode">&nbsp;<img src="../../assets/images/contact_add-friend-my-qr.png" style="vertical-align: middle;;width:24px" class="_align-middle"></router-link>
        </p>
        <div class="weui-cells">
            <a class="weui-cell weui-cell_access">
                <div class="weui-cell__hd"><img src="../../assets/images/contact_add-friend-reda.png" alt=""></div>
                <div class="weui-cell__bd">
                    <p>Friend Radar</p>
                    <p>Quickly add friends in your vicinity</p>
                </div>
                <div class="weui-cell__ft"></div>
            </a>
            <a class="weui-cell weui-cell_access">
                <div class="weui-cell__hd"><img src="../../assets/images/contact_add-friend-addgroup.png" alt=""></div>
                <div class="weui-cell__bd">
                    <p>Join Private Group</p>
                    <p>Join a group with friends nearby</p>
                </div>
                <div class="weui-cell__ft"></div>
            </a>
            <a class="weui-cell weui-cell_access">
                <div class="weui-cell__hd"><img src="../../assets/images/contact_add-friend-scanqr.png" alt=""></div>
                <div class="weui-cell__bd">
                    <p>Scan QR Code</p>
                    <p>Scan contact's QR Code</p>
                </div>
                <div class="weui-cell__ft"></div>
            </a>
            <a class="weui-cell weui-cell_access">
                <div class="weui-cell__hd"><img src="../../assets/images/contact_add-friend-contacts.png" alt=""></div>
                <div class="weui-cell__bd">
                    <p>Mobile Contacts</p>
                    <p>Add from phone, LinkedIn, etc</p>
                </div>
                <div class="weui-cell__ft"></div>
            </a>
            <a class="weui-cell weui-cell_access">
                <div class="weui-cell__hd"><img src="../../assets/images/contact_add-friend-offical.png" alt=""></div>
                <div class="weui-cell__bd">
                    <p>Official Accounts</p>
                    <p>Get more info and services</p>
                </div>
                <div class="weui-cell__ft"></div>
            </a>
        </div>
    </div>
</template>
<script>
    export default {};
</script>
<style>
    .add-friend .search-line {
        position: relative;
        height: 50px;
        padding-left: 30px;
        padding-top: 5px;
        padding-bottom: 5px;
        background-color: #fff;
        border-top: 1px solid #d9d9d9;
        border-bottom: 1px solid #d9d9d9;
        margin-top: 20px;
    }

    .add-friend .icon-search {
        color: #40b938;
    }

    .add-friend .search-line input {
        width: calc(100% - 30px);
        font-size: 16px;
        height: 100%;
        border: 0;
        outline: none;
        vertical-align: middle;
    }

    .add-friend .weui-cell__hd img {
        width: 35px;
        display: block;
        margin-right: 10px;
    }

    .add-friend .weui-cell__bd p:last-child {
        font-size: 12px;
        color: #b7b7b7;
    }

    .add-friend.weui-cell__bd p:first-child {
        font-size: 15px
    }
</style>
