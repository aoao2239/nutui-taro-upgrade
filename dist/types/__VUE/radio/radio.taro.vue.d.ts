import { type RadioShape, type RadioButtonSize } from './types';
export type RadioProps = Partial<{
    disabled: boolean;
    shape: RadioShape;
    label: string | number | boolean;
    iconSize: string | number;
    size: RadioButtonSize;
}>;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    disabled: boolean;
    shape: RadioShape;
    label: string | number | boolean;
    iconSize: string | number;
    size: RadioButtonSize;
}>>, {
    disabled: boolean;
    shape: string;
    label: string;
    iconSize: string;
    size: string;
}>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    disabled: boolean;
    shape: RadioShape;
    label: string | number | boolean;
    iconSize: string | number;
    size: RadioButtonSize;
}>>, {
    disabled: boolean;
    shape: string;
    label: string;
    iconSize: string;
    size: string;
}>>> & Readonly<{}>, {
    shape: RadioShape;
    disabled: boolean;
    size: RadioButtonSize;
    label: string | number | boolean;
    iconSize: string | number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {
    default?(_: {}): any;
    checkedIcon?(_: {}): any;
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
