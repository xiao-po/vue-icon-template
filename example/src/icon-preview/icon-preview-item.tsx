import { Message } from "../message";
import copy from "copy-to-clipboard";
import {defineComponent} from "vue";

type IconPreviewItemProps = {
  name: string;
};
const IconPreviewItem = defineComponent<IconPreviewItemProps>((_, {attrs, slots}) => {
  const { name } = attrs;
  const {icon} = slots;
  const CopyCode = ()=> {
    copy(`<Icon${name} />`);

    Message.info(`icon ${name} code copied`);
  };

  return () => (
    <div class="icon-preview-item" onClick={CopyCode}>
        <span class="icon-preview-item-wrapper">
          <span class="icon-preview-item--icon">
            {icon()}
          </span>
          <span class="icon-preview-item--name">{name}</span>
        </span>
    </div>
  );
});

IconPreviewItem.displayName = "IconPreviewItem";

export default IconPreviewItem;
