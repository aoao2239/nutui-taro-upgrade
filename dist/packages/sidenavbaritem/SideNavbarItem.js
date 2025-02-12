import { c as createComponent } from "../component-669c158a.js";
import { openBlock, createElementBlock, createElementVNode, toDisplayString } from "vue";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-cc2b3d55.js";
const { create } = createComponent("side-navbar-item");
const _sfc_main = create({
  props: {
    title: {
      type: String,
      default: ""
    }
  }
});
const _hoisted_1 = { class: "nut-side-navbar-item" };
const _hoisted_2 = { class: "nut-side-navbar-item__title" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", _hoisted_1, [
    createElementVNode("span", _hoisted_2, toDisplayString(_ctx.title), 1)
  ]);
}
const index_taro = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index_taro as default
};
