import Vue from 'vue';
import App from './App.vue';
import router from './router';
import UI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../style/index.css';
import '../style/style.scss';


Vue.use(UI);

new Vue({
    el: '#root',
    router,
    render: h => h(App)
});