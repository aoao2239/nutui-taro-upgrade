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
import { defineComponent, computed, openBlock, createElementBlock, renderSlot, createCommentVNode, createTextVNode, createElementVNode, createBlock, normalizeClass, normalizeStyle, Fragment, renderList } from "vue";
import { N as NutAvatar } from "../index.taro-c051759b.js";
import { w as withInstall } from "../with-install-783bc31f.js";
import "../component-669c158a.js";
import "../_plugin-vue_export-helper-cc2b3d55.js";
const _hoisted_1 = { key: 0 };
const _hoisted_2 = {
  key: 1,
  class: "nut-skeleton"
};
const _hoisted_3 = {
  key: 0,
  class: "nut-skeleton-animation"
};
const _hoisted_4 = { class: "nut-skeleton-content" };
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, {
  name: "NutSkeleton"
}), {
  __name: "skeleton.taro",
  props: {
    width: { default: "100px" },
    height: { default: "15px" },
    animated: { type: Boolean, default: false },
    avatar: { type: Boolean, default: false },
    avatarShape: { default: "round" },
    avatarSize: { default: "50px" },
    loading: { type: Boolean, default: true },
    round: { type: Boolean, default: false },
    row: { default: "1" },
    title: { type: Boolean, default: true }
  },
  setup(__props) {
    const props = __props;
    const avatarClass = computed(() => {
      const prefixCls = "avatarClass";
      return {
        [prefixCls]: true,
        [`${prefixCls}--${props.avatarShape}`]: props.avatarShape
      };
    });
    const getBlockClass = (prefixCls) => {
      return {
        [prefixCls]: true,
        [`${prefixCls}--round`]: props.round
      };
    };
    const avatarStyle = computed(() => {
      return {
        width: props.avatarSize,
        height: props.avatarSize
      };
    });
    return (_ctx, _cache) => {
      return !_ctx.loading ? (openBlock(), createElementBlock("view", _hoisted_1, [
        renderSlot(_ctx.$slots, "default")
      ])) : (openBlock(), createElementBlock("view", _hoisted_2, [
        _ctx.animated ? (openBlock(), createElementBlock("view", _hoisted_3)) : createCommentVNode("", true),
        _cache[2] || (_cache[2] = createTextVNode()),
        createElementVNode("view", _hoisted_4, [
          _ctx.avatar ? (openBlock(), createBlock(NutAvatar, {
            key: 0,
            class: normalizeClass(avatarClass.value),
            shape: _ctx.avatarShape,
            style: normalizeStyle(avatarStyle.value)
          }, null, 8, ["class", "shape", "style"])) : createCommentVNode("", true),
          _cache[1] || (_cache[1] = createTextVNode()),
          createElementVNode("view", {
            class: "nut-skeleton-content__line",
            style: normalizeStyle({ width: _ctx.width })
          }, [
            _ctx.title ? (openBlock(), createElementBlock("view", {
              key: 0,
              class: normalizeClass(getBlockClass("nut-skeleton-blockTitle")),
              style: normalizeStyle({ height: _ctx.height })
            }, null, 6)) : createCommentVNode("", true),
            _cache[0] || (_cache[0] = createTextVNode()),
            (openBlock(true), createElementBlock(Fragment, null, renderList(Number(_ctx.row), (_) => {
              return openBlock(), createElementBlock("view", {
                key: _,
                class: normalizeClass(getBlockClass("nut-skeleton-blockLine")),
                style: normalizeStyle({ height: _ctx.height })
              }, null, 6);
            }), 128))
          ], 4)
        ])
      ]));
    };
  }
}));
withInstall(_sfc_main);
export {
  _sfc_main as Skeleton,
  _sfc_main as default
};
