<template>
    <div class="login">
        <div class="box">
            <div class="lg-box">
                <div>
                    <span>用户名:</span>
                    <el-input v-model="username" placeholder="输入账号"></el-input>
                </div>
                <div>
                    <span>密码:</span>
                    <el-input v-model="password" placeholder="输入密码" show-password small></el-input>
                </div>
                <div>
                    <el-button @click="join">注册</el-button>
                    <el-button @click="login">登录</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // import {login} from '../util/ajax';
    import {login} from '../util/socket';
export default {
    data() {
        return {
            lang: {},
            username: '',
            password: ''
        }
    },
    mounted() {

    },
    methods:{
        login(){
            login({name:this.username,password: this.password})
        },
        join(){

        }
    }
}
</script>

<style>

</style>