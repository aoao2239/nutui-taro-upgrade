import { TagType } from './types';
export type TagProps = Partial<{
    color: string;
    textColor: string;
    type: TagType;
    plain: boolean;
    round: boolean;
    mark: boolean;
    closeable: boolean;
}>;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    color: string;
    textColor: string;
    type: TagType;
    plain: boolean;
    round: boolean;
    mark: boolean;
    closeable: boolean;
}>>, {
    color: string;
    textColor: string;
    type: string;
    plain: boolean;
    round: boolean;
    mark: boolean;
    closeable: boolean;
}>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (...args: any[]) => void;
    close: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    color: string;
    textColor: string;
    type: TagType;
    plain: boolean;
    round: boolean;
    mark: boolean;
    closeable: boolean;
}>>, {
    color: string;
    textColor: string;
    type: string;
    plain: boolean;
    round: boolean;
    mark: boolean;
    closeable: boolean;
}>>> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
}>, {
    round: boolean;
    color: string;
    plain: boolean;
    type: TagType;
    mark: boolean;
    closeable: boolean;
    textColor: string;
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
