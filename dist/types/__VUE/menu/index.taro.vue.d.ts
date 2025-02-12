import { PropType } from 'vue';
import { RectUp, RectDown } from '@nutui/icons-vue-taro';
import { MenuDirection } from './types';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    activeColor: {
        type: StringConstructor;
        default: string;
    };
    overlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    lockScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    duration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    direction: {
        type: PropType<MenuDirection>;
        default: string;
    };
    scrollFixed: {
        type: (NumberConstructor | BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    titleClass: {
        type: StringConstructor;
        default: string;
    };
}>, {
    toggleItem: (active: number) => void;
    children: import("vue").Reactive<any[]>;
    opened: import("vue").ComputedRef<boolean>;
    classes: import("vue").ComputedRef<{
        [x: string]: boolean;
        'scroll-fixed': boolean;
    }>;
    barRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
    refRandomId: string;
    getClasses: (showPopup: boolean) => string;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    activeColor: {
        type: StringConstructor;
        default: string;
    };
    overlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    lockScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    duration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    direction: {
        type: PropType<MenuDirection>;
        default: string;
    };
    scrollFixed: {
        type: (NumberConstructor | BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    titleClass: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{}>, {
    duration: string | number;
    lockScroll: boolean;
    closeOnClickOverlay: boolean;
    overlay: boolean;
    direction: MenuDirection;
    activeColor: string;
    scrollFixed: string | number | boolean;
    titleClass: string;
}, {}, {
    RectUp: typeof RectUp;
    RectDown: typeof RectDown;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
