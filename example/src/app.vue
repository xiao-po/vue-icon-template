<template>
  <div class="container flex-col">
    <header class="header">
      <span class="title">Icon Library</span>
    </header>
    <div class="container">
      <div :style="{ padding: '0 10px' }" class="nav">
        <app-menu :active="selectedMenuKey" @select="handleMenuSelect">
          <app-menu-item key="icon">Icon</app-menu-item>
          <app-menu-item key="read-me">Read-me</app-menu-item>
        </app-menu>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<script>
import {Message} from './message';
import IconPreviewList from './icon-preview';
import {onMounted, ref} from "vue";
import { useRoute } from 'vue-router';


export default ({
  components: {
    IconPreviewList: IconPreviewList,
  },
  setup(_, context) {
    console.log('created');
    const route = useRoute();
    const selectedMenuKey = ref();
    switch (route.path) {
      case '/icon': selectedMenuKey.value = 'icon';break;
      case '/read-me': selectedMenuKey.value = 'read-me';break;
    }
    return {selectedMenuKey, Message};
  },
  methods: {
    handleMenuSelect(key) {
      switch (key) {
        case 'icon': this.$router.push('/icon');break;
        case 'read-me': this.$router.push('/read-me');break;
      }

    }
  }
});
</script>