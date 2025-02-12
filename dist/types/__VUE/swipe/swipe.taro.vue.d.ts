import { type SwipePosition } from './types';
export type SwipeProps = Partial<{
    name: string;
    touchMoveStopPropagation: boolean;
    touchMovePreventDefault: boolean;
    disabled: boolean;
}>;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    name: string;
    touchMoveStopPropagation: boolean;
    touchMovePreventDefault: boolean;
    disabled: boolean;
}>>, {
    name: string;
    touchMoveStopPropagation: boolean;
    touchMovePreventDefault: boolean;
    disabled: boolean;
}>>, {
    open: (p?: SwipePosition) => void;
    close: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (...args: any[]) => void;
    close: (...args: any[]) => void;
    open: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    name: string;
    touchMoveStopPropagation: boolean;
    touchMovePreventDefault: boolean;
    disabled: boolean;
}>>, {
    name: string;
    touchMoveStopPropagation: boolean;
    touchMovePreventDefault: boolean;
    disabled: boolean;
}>>> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    onOpen?: ((...args: any[]) => any) | undefined;
}>, {
    name: string;
    disabled: boolean;
    touchMoveStopPropagation: boolean;
    touchMovePreventDefault: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {
    left?(_: {}): any;
    default?(_: {}): any;
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
