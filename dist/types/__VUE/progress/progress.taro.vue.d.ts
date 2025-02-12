import type { ProgressSize, ProgressStatus } from './types';
export type ProgressProps = Partial<{
    percentage: string | number;
    size: ProgressSize;
    status: ProgressStatus;
    strokeWidth: string | number;
    textInside: boolean;
    showText: boolean;
    strokeColor: string;
    textColor: string;
    textBackground: string;
    isShowPercentage: boolean;
}>;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    percentage: string | number;
    size: ProgressSize;
    status: ProgressStatus;
    strokeWidth: string | number;
    textInside: boolean;
    showText: boolean;
    strokeColor: string;
    textColor: string;
    textBackground: string;
    isShowPercentage: boolean;
}>>, {
    percentage: number;
    size: string;
    status: string;
    textInside: boolean;
    showText: boolean;
    isShowPercentage: boolean;
}>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    percentage: string | number;
    size: ProgressSize;
    status: ProgressStatus;
    strokeWidth: string | number;
    textInside: boolean;
    showText: boolean;
    strokeColor: string;
    textColor: string;
    textBackground: string;
    isShowPercentage: boolean;
}>>, {
    percentage: number;
    size: string;
    status: string;
    textInside: boolean;
    showText: boolean;
    isShowPercentage: boolean;
}>>> & Readonly<{}>, {
    size: ProgressSize;
    percentage: string | number;
    status: ProgressStatus;
    textInside: boolean;
    showText: boolean;
    isShowPercentage: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {
    default?(_: {}): any;
    "icon-name"?(_: {}): any;
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
