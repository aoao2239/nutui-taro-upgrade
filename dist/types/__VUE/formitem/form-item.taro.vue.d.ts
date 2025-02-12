import type { FormItemRule, FormLabelPosition, FormStarPosition } from '../form/types';
export type FormItemProps = Partial<{
    prop: string;
    label: string;
    rules: FormItemRule[];
    required: boolean;
    showErrorMessage: boolean;
    showErrorLine: boolean;
    labelWidth: string | number;
    labelAlign: string;
    errorMessageAlign: string;
    bodyAlign: string;
    labelPosition: FormLabelPosition;
    starPosition: FormStarPosition;
}>;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    prop: string;
    label: string;
    rules: FormItemRule[];
    required: boolean;
    showErrorMessage: boolean;
    showErrorLine: boolean;
    labelWidth: string | number;
    labelAlign: string;
    errorMessageAlign: string;
    bodyAlign: string;
    labelPosition: FormLabelPosition;
    starPosition: FormStarPosition;
}>>, {
    prop: string;
    label: string;
    rules: () => never[];
    required: boolean;
    showErrorMessage: boolean;
    showErrorLine: boolean;
}>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    prop: string;
    label: string;
    rules: FormItemRule[];
    required: boolean;
    showErrorMessage: boolean;
    showErrorLine: boolean;
    labelWidth: string | number;
    labelAlign: string;
    errorMessageAlign: string;
    bodyAlign: string;
    labelPosition: FormLabelPosition;
    starPosition: FormStarPosition;
}>>, {
    prop: string;
    label: string;
    rules: () => never[];
    required: boolean;
    showErrorMessage: boolean;
    showErrorLine: boolean;
}>>> & Readonly<{}>, {
    label: string;
    required: boolean;
    rules: FormItemRule[];
    prop: string;
    showErrorMessage: boolean;
    showErrorLine: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {
    label?(_: {}): any;
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
