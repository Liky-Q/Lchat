import Vue from 'vue';
import App from './App.vue';
import router from './router';
import io from 'socket.io-client';
import UI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../static/index.css';

// let socket  = io();

// socket.on('getMsg',data=>{
//     // window.location.reload();
//     socket.emit('send','hello');
// });

Vue.use(UI);

new Vue({
    el: '#root',
    router,
    render: h => h(App)
});