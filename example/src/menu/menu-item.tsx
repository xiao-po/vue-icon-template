import {defineComponent} from "vue";

export default defineComponent({
  name: 'app-menu-item',
  props: {
    key: String,
  },
  setup(props) {
    return {key: props.key};
  },
  render() {
    return (null);
  }
})