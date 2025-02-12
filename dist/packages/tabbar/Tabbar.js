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
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import { defineComponent, ref, watch, onMounted, openBlock, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, unref, renderSlot } from "vue";
import Taro from "@tarojs/taro";
import { u as useTaroRect } from "../index-d9b20e11.js";
import { u as useChildren } from "../useChildren-d6132357.js";
import { T as TABBAR_KEY } from "../types-3a341f39.js";
import { w as withInstall } from "../with-install-783bc31f.js";
const _hoisted_1 = ["id"];
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, {
  name: "NutTabbar"
}), {
  __name: "tabbar.taro",
  props: {
    modelValue: { default: 0 },
    bottom: { type: Boolean, default: false },
    unactiveColor: { default: "" },
    activeColor: { default: "" },
    safeAreaInsetBottom: { type: Boolean, default: false },
    placeholder: { type: Boolean, default: false },
    beforeSwitch: { type: Function, default: () => true }
  },
  emits: ["tabSwitch", "update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const refRandomId = Math.random().toString(36).slice(-8);
    const height = ref("auto");
    const nutTabbarRef = ref(null);
    const activeIndex = ref(props.modelValue);
    const { children, linkChildren } = useChildren(TABBAR_KEY);
    const changeIndex = (index, active) => __async(this, null, function* () {
      const res = yield props.beforeSwitch(children[index], active);
      if (res === false) {
        return Promise.reject();
      }
      activeIndex.value = active;
      emit("update:modelValue", active);
      emit("tabSwitch", children[index], active);
    });
    linkChildren({ props, activeIndex, changeIndex });
    watch(
      () => props.modelValue,
      (val) => {
        activeIndex.value = val;
      }
    );
    const updateHeight = () => {
      if (props.bottom && props.placeholder) {
        Taro.nextTick(() => {
          useTaroRect(nutTabbarRef).then(
            (rect) => {
              height.value = `${rect.height}px`;
            },
            () => {
            }
          );
        });
      }
    };
    onMounted(updateHeight);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("view", {
        class: normalizeClass({ "nut-tabbar__placeholder": _ctx.bottom && _ctx.placeholder }),
        style: normalizeStyle({ height: height.value })
      }, [
        createElementVNode("view", {
          id: `nut-tabbar-${unref(refRandomId)}`,
          ref_key: "nutTabbarRef",
          ref: nutTabbarRef,
          class: normalizeClass(["nut-tabbar", { "nut-tabbar-bottom": _ctx.bottom, "nut-tabbar-safebottom": _ctx.safeAreaInsetBottom }])
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 10, _hoisted_1)
      ], 6);
    };
  }
}));
withInstall(_sfc_main);
export {
  _sfc_main as Tabbar,
  _sfc_main as default
};
