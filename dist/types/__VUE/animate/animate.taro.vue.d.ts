import type { AnimateType, AnimateAction } from './types';
export type AnimateProps = Partial<{
    type: AnimateType;
    show: boolean;
    action: AnimateAction;
    loop: boolean;
    duration: string | number;
}>;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    type: AnimateType;
    show: boolean;
    action: AnimateAction;
    loop: boolean;
    duration: string | number;
}>>, {
    show: boolean;
    action: string;
    loop: boolean;
    duration: number;
}>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (...args: any[]) => void;
    animate: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    type: AnimateType;
    show: boolean;
    action: AnimateAction;
    loop: boolean;
    duration: string | number;
}>>, {
    show: boolean;
    action: string;
    loop: boolean;
    duration: number;
}>>> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
    onAnimate?: ((...args: any[]) => any) | undefined;
}>, {
    duration: string | number;
    show: boolean;
    action: AnimateAction;
    loop: boolean;
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
