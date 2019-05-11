import Vue from 'vue';
import App from './App.vue';
import io from 'socket.io-client'

let socket  = io();

socket.on('getMsg',data=>{
    console.log(data)
    window.location.reload();
    socket.emit('send','hello');
})


new Vue({
    el: '#root',
    render: h => h(App)
});