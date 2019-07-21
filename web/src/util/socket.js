import io from 'socket.io-client';

let socket  = io('ws://127.0.0.1:3000');

export const login = function(params){
    socket.emit('login',params);
}