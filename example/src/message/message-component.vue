

<template>
  <div class="message-root">
      <MessageItem
          v-for="data in messageList"
          :key="data.createTime"
          :data="data"
          @exited="deleteByCreateTime"
      ></MessageItem>
  </div>
</template>

<script>
import MessageItem from './message-item.vue';
import * as Vue from "vue";
import channel, {MessageAddEventName} from './message-event-channel';

export default {
  name: "message",
  components: {
    MessageItem
  },
  setup() {
    const messageList = Vue.ref([]);
    const deleteByCreateTime = (time) => {
      const newList = messageList.value.filter(
          ({ createTime }) => createTime !== time
      );
      messageList.value = (newList);
    };

    // message event handler
    const messageReceiverAbort = Vue.watchEffect((onInvalidate) => {
      function receiveMessage(e) {
        if (!(e instanceof CustomEvent)) return;
        if (e.type !== MessageAddEventName) return;
        console.log(`new message receive: ${e.detail}`);
        messageList.value.push({
          message: e.detail,
          createTime: Date.now(),
        });
      }
      channel.addEventListener(MessageAddEventName, receiveMessage);
      onInvalidate(() => {
        channel.removeEventListener(MessageAddEventName, receiveMessage);
      })
    });

    Vue.onUnmounted(() => {
      messageReceiverAbort();
    })



    return {messageList, deleteByCreateTime}
  }
}
</script>
