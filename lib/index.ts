import * as Icon from './icons/index';
import {App} from "@vue/runtime-core";



export {Icon};
export default {
  install(app: App) {
    Object.entries(Icon).forEach(([name, component]) => {
      app.component(`Icon${name}`, component);
    })
  }
}