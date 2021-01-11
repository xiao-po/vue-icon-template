import {defineComponent, VNode} from "vue";

export default defineComponent({
  name: 'app-menu',
  props: {
    active: String,
  },
  emits: {
    select: String,
  },
  setup(_, context) {
    const {attrs, slots, emit} = context;
    const children: VNode[] = slots.default().filter(node => node.key);
    const handleMenuItemClick = (key: string) => {
      emit('select', key);
    }
    return {
      attrs,
      children,
      handleMenuItemClick
    }
  },
  render() {
    return (
      <ul class="app-menu">
        {this.children.map((node: VNode) => (
          <li
            class={{
              "app-menu-item": true,
              "active": this.$props.active === node.key
            }}
            onClick={() => this.handleMenuItemClick(node.key)}
            key={node.key}>
            {
              // @ts-ignore
              node.children?.default?.()
            }
          </li>)
        )}
      </ul>
    );
  }
})