import axios from 'axios';

axios.setConfig = function (config){
    axios.defaults.baseURL = 'http://127.0.0.1:3000'
};

export const login = async (name,password) =>{
    console.log(name,password)
    return await axios.post('/login',{name:name,password:password})
};