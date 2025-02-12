import type { InputType, InputAlign, InputFormatTrigger, InputConfirmType } from './types';
export type InputProps = Partial<{
    type: InputType;
    modelValue: string | number;
    placeholder: string;
    inputAlign: InputAlign;
    required: boolean;
    disabled: boolean;
    readonly: boolean;
    maxLength: string | number;
    clearable: boolean;
    clearSize: string | number;
    border: boolean;
    formatTrigger: InputFormatTrigger;
    formatter: (value: string) => string;
    showWordLimit: boolean;
    autofocus: boolean;
    confirmType: InputConfirmType;
    error: boolean;
    showClearIcon: boolean;
    adjustPosition: boolean;
    alwaysSystem: boolean;
}>;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    type: InputType;
    modelValue: string | number;
    placeholder: string;
    inputAlign: InputAlign;
    required: boolean;
    disabled: boolean;
    readonly: boolean;
    maxLength: string | number;
    clearable: boolean;
    clearSize: string | number;
    border: boolean;
    formatTrigger: InputFormatTrigger;
    formatter: (value: string) => string;
    showWordLimit: boolean;
    autofocus: boolean;
    confirmType: InputConfirmType;
    error: boolean;
    showClearIcon: boolean;
    adjustPosition: boolean;
    alwaysSystem: boolean;
}>>, {
    type: string;
    modelValue: string;
    placeholder: string;
    inputAlign: string;
    required: boolean;
    disabled: boolean;
    readonly: boolean;
    maxLength: string;
    clearable: boolean;
    clearSize: string;
    border: boolean;
    formatTrigger: string;
    showWordLimit: boolean;
    autofocus: boolean;
    confirmType: string;
    error: boolean;
    showClearIcon: boolean;
    adjustPosition: boolean;
    alwaysSystem: boolean;
}>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    blur: (...args: any[]) => void;
    click: (...args: any[]) => void;
    focus: (...args: any[]) => void;
    keypress: (...args: any[]) => void;
    clear: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
    clickInput: (...args: any[]) => void;
    confirm: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    type: InputType;
    modelValue: string | number;
    placeholder: string;
    inputAlign: InputAlign;
    required: boolean;
    disabled: boolean;
    readonly: boolean;
    maxLength: string | number;
    clearable: boolean;
    clearSize: string | number;
    border: boolean;
    formatTrigger: InputFormatTrigger;
    formatter: (value: string) => string;
    showWordLimit: boolean;
    autofocus: boolean;
    confirmType: InputConfirmType;
    error: boolean;
    showClearIcon: boolean;
    adjustPosition: boolean;
    alwaysSystem: boolean;
}>>, {
    type: string;
    modelValue: string;
    placeholder: string;
    inputAlign: string;
    required: boolean;
    disabled: boolean;
    readonly: boolean;
    maxLength: string;
    clearable: boolean;
    clearSize: string;
    border: boolean;
    formatTrigger: string;
    showWordLimit: boolean;
    autofocus: boolean;
    confirmType: string;
    error: boolean;
    showClearIcon: boolean;
    adjustPosition: boolean;
    alwaysSystem: boolean;
}>>> & Readonly<{
    onBlur?: ((...args: any[]) => any) | undefined;
    onClick?: ((...args: any[]) => any) | undefined;
    onFocus?: ((...args: any[]) => any) | undefined;
    onKeypress?: ((...args: any[]) => any) | undefined;
    onClear?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onClickInput?: ((...args: any[]) => any) | undefined;
    onConfirm?: ((...args: any[]) => any) | undefined;
}>, {
    error: boolean;
    disabled: boolean;
    type: InputType;
    border: boolean;
    placeholder: string;
    modelValue: string | number;
    maxLength: string | number;
    clearable: boolean;
    autofocus: boolean;
    readonly: boolean;
    inputAlign: InputAlign;
    confirmType: InputConfirmType;
    required: boolean;
    clearSize: string | number;
    formatTrigger: InputFormatTrigger;
    showWordLimit: boolean;
    showClearIcon: boolean;
    adjustPosition: boolean;
    alwaysSystem: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {
    left?(_: {}): any;
    clear?(_: {}): any;
    right?(_: {}): any;
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
