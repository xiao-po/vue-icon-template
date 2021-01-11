import { defineComponent } from "vue";
import {Icon}  from "../../../lib";
import IconPreviewItem from "./icon-preview-item";

const IconPreviewList = defineComponent(() => {
  return () => (
    <div class="icon-preview-list">
      {Object.entries(Icon).map(([name, Icon]) => (
        <IconPreviewItem name={name} key={name} v-slots={{
          icon: () => <Icon />
        }} />
      ))}
    </div>
  );
});

export default IconPreviewList;
