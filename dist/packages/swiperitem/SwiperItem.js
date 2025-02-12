import { getCurrentInstance, inject, reactive, computed, onUnmounted, openBlock, createElementBlock, normalizeStyle, renderSlot } from "vue";
import { c as createComponent } from "../component-669c158a.js";
import { S as SWIPER_KEY } from "../types-e7486245.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-cc2b3d55.js";
function useExpose(apis) {
  const instance = getCurrentInstance();
  if (instance) {
    Object.assign(instance.proxy, apis);
  }
}
const { create } = createComponent("swiper-item");
const _sfc_main = create({
  setup() {
    const parent = inject(SWIPER_KEY);
    parent["relation"](getCurrentInstance());
    const state = reactive({
      offset: 0
    });
    const style = computed(() => {
      const style2 = {};
      const direction = parent == null ? void 0 : parent.props.direction;
      if (parent == null ? void 0 : parent.size.value) {
        style2[direction === "horizontal" ? "width" : "height"] = `${parent == null ? void 0 : parent.size.value}px`;
      }
      if (state.offset) {
        style2["transform"] = `translate${direction === "horizontal" ? "X" : "Y"}(${state.offset}px)`;
      }
      return style2;
    });
    const setOffset = (offset) => {
      state.offset = offset;
    };
    onUnmounted(() => {
      parent["relation"](getCurrentInstance(), "unmount");
    });
    useExpose({ setOffset });
    return {
      style
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: "nut-swiper-item",
    style: normalizeStyle(_ctx.style)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 4);
}
const NutSwiperItem = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  NutSwiperItem as default
};
