import Vue from 'vue';
import Router from 'vue-router';
/**
 * 导入功能模块
 * 1、Chat 聊天室
 * 2、Login 登录
 * 3、User 用户
 * 4、Settings 设置中心
 */

 import Chat from './chat';
 import Login from './login';
 import User from './user';
 import Settings from './settings';

Vue.use(Router);

/**
 * 配置路由
 */
const router = new Router({
    routes: [
        {
            path: '/',
            component: Login
        },
        {
            path: '/chat',
            component: Chat
        },
        {
            path: '/user',
            component: User
        },
        {
            path: '/settings',
            component: Settings
        }
    ]
});

export default router;