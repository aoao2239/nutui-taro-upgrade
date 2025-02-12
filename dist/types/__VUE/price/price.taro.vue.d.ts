import type { PricePosition, PriceSize } from './types';
export type PriceProps = Partial<{
    price: string | number;
    needSymbol: boolean;
    symbol: string;
    decimalDigits: number;
    thousands: boolean;
    position: PricePosition;
    size: PriceSize;
    strikeThrough: boolean;
}>;
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    price: string | number;
    needSymbol: boolean;
    symbol: string;
    decimalDigits: number;
    thousands: boolean;
    position: PricePosition;
    size: PriceSize;
    strikeThrough: boolean;
}>>, {
    price: number;
    needSymbol: boolean;
    symbol: string;
    decimalDigits: number;
    thousands: boolean;
    position: string;
    size: string;
    strikeThrough: boolean;
}>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    price: string | number;
    needSymbol: boolean;
    symbol: string;
    decimalDigits: number;
    thousands: boolean;
    position: PricePosition;
    size: PriceSize;
    strikeThrough: boolean;
}>>, {
    price: number;
    needSymbol: boolean;
    symbol: string;
    decimalDigits: number;
    thousands: boolean;
    position: string;
    size: string;
    strikeThrough: boolean;
}>>> & Readonly<{}>, {
    symbol: string;
    size: PriceSize;
    position: PricePosition;
    price: string | number;
    needSymbol: boolean;
    decimalDigits: number;
    thousands: boolean;
    strikeThrough: boolean;
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
