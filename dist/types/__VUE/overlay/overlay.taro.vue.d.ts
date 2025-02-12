import { CSSProperties } from 'vue';
export type OverlayProps = Partial<{
    visible: boolean;
    zIndex: string | number;
    duration: string | number;
    lockScroll: boolean;
    overlayClass: string;
    overlayStyle: CSSProperties;
    closeOnClickOverlay: boolean;
}>;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    visible: boolean;
    zIndex: string | number;
    duration: string | number;
    lockScroll: boolean;
    overlayClass: string;
    overlayStyle: CSSProperties;
    closeOnClickOverlay: boolean;
}>>, {
    visible: boolean;
    zIndex: number;
    duration: number;
    lockScroll: boolean;
    overlayClass: string;
    closeOnClickOverlay: boolean;
}>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (...args: any[]) => void;
    "update:visible": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    visible: boolean;
    zIndex: string | number;
    duration: string | number;
    lockScroll: boolean;
    overlayClass: string;
    overlayStyle: CSSProperties;
    closeOnClickOverlay: boolean;
}>>, {
    visible: boolean;
    zIndex: number;
    duration: number;
    lockScroll: boolean;
    overlayClass: string;
    closeOnClickOverlay: boolean;
}>>> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
}>, {
    duration: string | number;
    visible: boolean;
    zIndex: string | number;
    lockScroll: boolean;
    overlayClass: string;
    closeOnClickOverlay: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
