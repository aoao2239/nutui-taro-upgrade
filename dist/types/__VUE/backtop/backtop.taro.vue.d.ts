export type BacktopProps = Partial<{
    height: string;
    bottom: number;
    right: number;
    distance: number;
    zIndex: number;
}>;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    height: string;
    bottom: number;
    right: number;
    distance: number;
    zIndex: number;
}>>, {
    height: string;
    bottom: number;
    right: number;
    distance: number;
    zIndex: number;
}>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    height: string;
    bottom: number;
    right: number;
    distance: number;
    zIndex: number;
}>>, {
    height: string;
    bottom: number;
    right: number;
    distance: number;
    zIndex: number;
}>>> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
}>, {
    bottom: number;
    right: number;
    zIndex: number;
    height: string;
    distance: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {
    content?(_: {}): any;
    icon?(_: {}): any;
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
