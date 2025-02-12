export type BadgeProps = Partial<{
    value: string | number;
    max: number;
    dot: boolean;
    bubble: boolean;
    hidden: boolean;
    top: string;
    right: string;
    zIndex: number;
    color: string;
}>;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    value: string | number;
    max: number;
    dot: boolean;
    bubble: boolean;
    hidden: boolean;
    top: string;
    right: string;
    zIndex: number;
    color: string;
}>>, {
    max: number;
    dot: boolean;
    bubble: boolean;
    hidden: boolean;
    top: string;
    right: string;
    zIndex: number;
    color: string;
}>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    value: string | number;
    max: number;
    dot: boolean;
    bubble: boolean;
    hidden: boolean;
    top: string;
    right: string;
    zIndex: number;
    color: string;
}>>, {
    max: number;
    dot: boolean;
    bubble: boolean;
    hidden: boolean;
    top: string;
    right: string;
    zIndex: number;
    color: string;
}>>> & Readonly<{}>, {
    color: string;
    max: number;
    right: string;
    top: string;
    zIndex: number;
    hidden: boolean;
    dot: boolean;
    bubble: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {
    icon?(_: {}): any;
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
