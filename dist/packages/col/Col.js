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
import { defineComponent, inject, computed, openBlock, createElementBlock, normalizeClass, normalizeStyle, renderSlot } from "vue";
import { L as LAYOUT_KEY } from "../types-02143cb6.js";
import { w as withInstall } from "../with-install-783bc31f.js";
const prefixCls = "nut-col";
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, {
  name: "NutCol"
}), {
  __name: "col.taro",
  props: {
    span: { default: 24 },
    offset: { default: 0 }
  },
  setup(__props) {
    const props = __props;
    const gutter = inject(LAYOUT_KEY);
    const classes = computed(() => {
      return {
        [prefixCls]: true,
        [prefixCls + "-gutter"]: gutter,
        ["nut-col-" + props.span]: true,
        ["nut-col-offset-" + props.offset]: true
      };
    });
    const style = computed(() => {
      return {
        paddingLeft: gutter / 2 + "px",
        paddingRight: gutter / 2 + "px"
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("view", {
        class: normalizeClass(classes.value),
        style: normalizeStyle(style.value)
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 6);
    };
  }
}));
withInstall(_sfc_main);
export {
  _sfc_main as Col,
  _sfc_main as default
};
