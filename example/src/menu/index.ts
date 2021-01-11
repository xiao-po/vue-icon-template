import {App} from "@vue/runtime-core";
import Menu from './menu';
import MenuItem from './menu-item';
import './menu.scss';

export default {
  install(app: App) {
    app.component('app-menu', Menu);
    app.component('app-menu-item', MenuItem);
  }
}