var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { defineComponent, computed, openBlock, createElementBlock, createElementVNode, normalizeStyle, renderSlot, createCommentVNode, createTextVNode, toDisplayString } from "vue";
import { p as pxCheck } from "../pxCheck-a27490eb.js";
import { u as useLocale } from "../index-3b6ff56c.js";
import { w as withInstall } from "../with-install-783bc31f.js";
import "nutui-taro-upgrade/dist/packages/locale/lang";
import "../util-f26975e1.js";
const _hoisted_1 = { class: "nut-empty" };
const _hoisted_2 = ["src"];
const _hoisted_3 = { class: "nut-empty__description" };
const cN = "NutEmpty";
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, {
  name: cN
}), {
  __name: "empty.taro",
  props: {
    image: { default: "empty" },
    imageSize: { default: "" },
    description: { default: "" }
  },
  setup(__props) {
    const props = __props;
    const translate = useLocale(cN);
    const defaultStatus = {
      empty: "https://static-ftcms.jd.com/p/files/61a9e3183985005b3958672b.png",
      error: "https://ftcms.jd.com/p/files/61a9e33ee7dcdbcc0ce62736.png",
      network: "https://static-ftcms.jd.com/p/files/61a9e31de7dcdbcc0ce62734.png"
    };
    const style = computed(() => {
      if (props.imageSize) {
        return {
          width: pxCheck(props.imageSize),
          height: pxCheck(props.imageSize)
        };
      }
      return {};
    });
    const src = computed(() => /^https?:\/\/|^\/\//.test(props.image) ? props.image : defaultStatus[props.image]);
    const descriptionText = computed(() => props.description || translate("noData"));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("view", _hoisted_1, [
        createElementVNode("view", {
          class: "nut-empty__box",
          style: normalizeStyle(style.value)
        }, [
          renderSlot(_ctx.$slots, "image", {}, () => [
            src.value ? (openBlock(), createElementBlock("img", {
              key: 0,
              class: "nut-empty__box--img",
              src: src.value
            }, null, 8, _hoisted_2)) : createCommentVNode("", true)
          ])
        ], 4),
        _cache[0] || (_cache[0] = createTextVNode()),
        renderSlot(_ctx.$slots, "description", {}, () => [
          createElementVNode("view", _hoisted_3, toDisplayString(descriptionText.value), 1)
        ]),
        _cache[1] || (_cache[1] = createTextVNode()),
        renderSlot(_ctx.$slots, "default")
      ]);
    };
  }
}));
withInstall(_sfc_main);
export {
  _sfc_main as Empty,
  _sfc_main as default
};
