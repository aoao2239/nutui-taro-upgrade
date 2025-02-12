import type { CellSize } from './types';
export type CellProps = Partial<{
    title: string;
    subTitle: string;
    desc: string;
    descTextAlign: string;
    isLink: boolean;
    roundRadius: string | number;
    center: boolean;
    size: CellSize;
}>;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    title: string;
    subTitle: string;
    desc: string;
    descTextAlign: string;
    isLink: boolean;
    roundRadius: string | number;
    center: boolean;
    size: CellSize;
}>>, {
    title: string;
    subTitle: string;
    desc: string;
    descTextAlign: string;
    isLink: boolean;
    roundRadius: string;
    center: boolean;
    size: string;
}>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    title: string;
    subTitle: string;
    desc: string;
    descTextAlign: string;
    isLink: boolean;
    roundRadius: string | number;
    center: boolean;
    size: CellSize;
}>>, {
    title: string;
    subTitle: string;
    desc: string;
    descTextAlign: string;
    isLink: boolean;
    roundRadius: string;
    center: boolean;
    size: string;
}>>> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
}>, {
    size: CellSize;
    title: string;
    desc: string;
    center: boolean;
    subTitle: string;
    descTextAlign: string;
    isLink: boolean;
    roundRadius: string | number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {
    default?(_: {}): any;
    icon?(_: {}): any;
    title?(_: {}): any;
    desc?(_: {}): any;
    link?(_: {}): any;
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
