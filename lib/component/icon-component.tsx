import * as Vue from 'vue';

export type IconProps = {
  icon: string,
} & HTMLSpanElement;
const IconComponent = Vue.defineComponent<IconProps>({
  render() {
    const {icon, ...spanProps} = this.$attrs as IconProps;
    // @ts-ignore
    return (<span {...spanProps} innerHTML={icon}/>)
  }
});


(IconComponent as any).name = 'icon';

export default IconComponent;