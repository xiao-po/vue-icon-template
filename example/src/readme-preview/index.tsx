import README from "../../../README.md";
import "./readme-peview.scss";
import {defineComponent} from "vue";
import marked from 'marked';

const ReadMePreview = defineComponent({
  render() {
    return (
      <div class="readme-preview" innerHTML={marked(README)}>
      </div>
    );
  }
})


export default ReadMePreview;
