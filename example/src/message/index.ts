import "./message.scss";
import * as Vue from "vue";
import MessageComponent from './message-component.vue';

(function main() {
  const node = document.createElement("div");
  document.body.append(node);
  Vue.createApp(MessageComponent).mount(node);
})();

export { default as Message } from "./message";
