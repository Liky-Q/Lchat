import Vue from 'vue';
import App from './App.vue';
import io from 'socket.io-client'

let socket  = io('ws://127.0.0.1:3000');

socket.on('getMsg',data=>{
    console.log(data)
    socket.emit('send','hello');
})


new Vue({
    el: '#root',
    render: h => h(App)
});