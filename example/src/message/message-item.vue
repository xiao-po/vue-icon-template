<template>
  <transition
      :duration="200 - 20"
      name="fade-move-down"
      @leave={onTransitionExited}
  >
    <div v-if="visible" class="message-item">
      <span>{{ data.message }}</span>
    </div>
  </transition>
</template>

<script>
import {onMounted, onUnmounted, ref} from "vue";

export default {
  name: 'message-item',
  props: ['data'],
  setup(props, {emit}) {
    let destroyTimer = 0;
    const visible = ref(false);
    onMounted(() => {
      visible.value = true;
      destroyTimer = window.setTimeout(() => visible.value = false, 2000 + 200);
    })
    onUnmounted(() => {
      destroyTimer();
      visible.value = false;
    })
    const onTransitionExited = () => {
      emit('exited', props.data);
    }
    return {...props, visible, onTransitionExited};
  }
}
</script>