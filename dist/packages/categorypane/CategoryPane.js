import { c as createComponent } from "../component-669c158a.js";
import { openBlock, createElementBlock, Fragment, renderList, createElementVNode, toDisplayString, createTextVNode, createCommentVNode } from "vue";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-cc2b3d55.js";
const { create } = createComponent("category-pane");
const _sfc_main = create({
  props: {
    // 分类模式
    type: {
      type: String,
      default: "classify"
    },
    // 右侧导航数据
    categoryChild: {
      type: Array,
      default: () => []
    },
    // 模式传入自定义数据
    customCategory: {
      type: Array,
      default: () => []
    }
  },
  setup(props, { emit }) {
    const onChange = (sku) => {
      emit("onChange", sku);
    };
    return {
      onChange
    };
  }
});
const _hoisted_1 = { class: "nut-category-pane" };
const _hoisted_2 = {
  key: 0,
  class: "nut-category-pane__cateListRight"
};
const _hoisted_3 = { class: "nut-category-pane__childTitle" };
const _hoisted_4 = {
  key: 0,
  class: "nut-category-pane__childItemList"
};
const _hoisted_5 = ["onClick"];
const _hoisted_6 = ["src"];
const _hoisted_7 = { class: "nut-category-pane__skuImg" };
const _hoisted_8 = {
  key: 1,
  class: "nut-category-pane__cateListRight"
};
const _hoisted_9 = { class: "nut-category-pane__childTitle" };
const _hoisted_10 = {
  key: 0,
  class: "nut-category-pane__childItemList"
};
const _hoisted_11 = ["onClick"];
const _hoisted_12 = { class: "nut-category-pane__skuName" };
const _hoisted_13 = {
  key: 2,
  class: "nut-category-pane__selfItemList"
};
const _hoisted_14 = ["onClick"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", _hoisted_1, [
    _ctx.type == "classify" ? (openBlock(), createElementBlock("div", _hoisted_2, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.categoryChild, (item, index) => {
        return openBlock(), createElementBlock("div", { key: index }, [
          createElementVNode("div", _hoisted_3, toDisplayString(item == null ? void 0 : item.catName), 1),
          _cache[1] || (_cache[1] = createTextVNode()),
          (item == null ? void 0 : item.catType) == 1 ? (openBlock(), createElementBlock("div", _hoisted_4, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(item.childCateList, (sku, key) => {
              return openBlock(), createElementBlock("div", {
                key,
                class: "nut-category-pane__childItem",
                onClick: ($event) => _ctx.onChange(sku)
              }, [
                createElementVNode("img", {
                  class: "nut-category-pane__childImg",
                  src: sku.backImg
                }, null, 8, _hoisted_6),
                _cache[0] || (_cache[0] = createTextVNode()),
                createElementVNode("div", _hoisted_7, toDisplayString(sku == null ? void 0 : sku.catName), 1)
              ], 8, _hoisted_5);
            }), 128))
          ])) : createCommentVNode("", true)
        ]);
      }), 128))
    ])) : createCommentVNode("", true),
    _cache[3] || (_cache[3] = createTextVNode()),
    _ctx.type == "text" ? (openBlock(), createElementBlock("div", _hoisted_8, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.categoryChild, (item, index) => {
        return openBlock(), createElementBlock("div", { key: index }, [
          createElementVNode("div", _hoisted_9, toDisplayString(item == null ? void 0 : item.catName), 1),
          _cache[2] || (_cache[2] = createTextVNode()),
          (item == null ? void 0 : item.catType) == 1 ? (openBlock(), createElementBlock("div", _hoisted_10, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(item.childCateList, (sku, key) => {
              return openBlock(), createElementBlock("div", {
                key,
                class: "nut-category-pane__childItem",
                onClick: ($event) => _ctx.onChange(sku)
              }, [
                createElementVNode("div", _hoisted_12, toDisplayString(sku == null ? void 0 : sku.catName), 1)
              ], 8, _hoisted_11);
            }), 128))
          ])) : createCommentVNode("", true)
        ]);
      }), 128))
    ])) : createCommentVNode("", true),
    _cache[4] || (_cache[4] = createTextVNode()),
    _ctx.type == "custom" ? (openBlock(), createElementBlock("div", _hoisted_13, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.customCategory, (sku, key) => {
        return openBlock(), createElementBlock("div", {
          key,
          class: "nut-category-pane__skuName",
          onClick: ($event) => _ctx.onChange(sku)
        }, toDisplayString(sku == null ? void 0 : sku.catName), 9, _hoisted_14);
      }), 128))
    ])) : createCommentVNode("", true)
  ]);
}
const index_taro = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index_taro as default
};
