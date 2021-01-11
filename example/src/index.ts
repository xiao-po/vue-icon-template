import * as Vue from "vue";
import App from "./app.vue";
import './icon.scss';
import './index.scss';
import Router from './router';
import Menu from './menu';

const app = Vue.createApp(App);

app.use(Router);
app.use(Menu);

app.mount('#root');