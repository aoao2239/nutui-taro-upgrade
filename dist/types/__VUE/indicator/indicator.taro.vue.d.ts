import type { IndicatorAlign } from './types';
export type IndicatorProps = Partial<{
    size: number;
    current: number;
    block: boolean;
    align: IndicatorAlign;
    fillZero: boolean;
}>;
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    size: number;
    current: number;
    block: boolean;
    align: IndicatorAlign;
    fillZero: boolean;
}>>, {
    size: number;
    current: number;
    block: boolean;
    align: string;
    fillZero: boolean;
}>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    size: number;
    current: number;
    block: boolean;
    align: IndicatorAlign;
    fillZero: boolean;
}>>, {
    size: number;
    current: number;
    block: boolean;
    align: string;
    fillZero: boolean;
}>>> & Readonly<{}>, {
    size: number;
    block: boolean;
    align: IndicatorAlign;
    current: number;
    fillZero: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
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
