<template>
    <div class="login">
        <div class="box">
            <div class="lg-box">
                <h2>登录</h2>
                <div>
                    <span>用户名:</span>
                    <el-input v-model="username" placeholder="输入账号"></el-input>
                </div>
                <div>
                    <span>密码:</span>
                    <el-input v-model="password" placeholder="输入密码" show-password></el-input>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import chat from 'socket.io-client';
export default {
    data() {
        return {
            lang: {},
            username: '',
            password: ''
        }
    },
    mounted() {
        console.log('chat abc...');
        let socket = chat();
        socket.on('getMsg', data => {
            socket.emit('send', 'hello chat room');
        });
    },
}
</script>

<style>
.login {
    width: 100%;
    height: 100%;
    background: linear-gradient(#db1df9 0%, #1dc2e2 50%, #9c55f3 100%);
}
.login .box {
    width: 0;
    height: 50%;
    margin: 0 auto;
    position: relative;
}
.lg-box {
    width: 480px;
    height: 540px;
    position: absolute;
    background: #ffffff;
    border-radius: 8px;
    left: -240px;
    bottom: -270px;
}
</style>