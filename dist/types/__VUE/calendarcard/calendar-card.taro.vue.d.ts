import type { CalendarCardDay, CalendarCardType, CalendarCardValue } from './types';
export type CalendarCardProps = Partial<{
    type: CalendarCardType;
    firstDayOfWeek: number;
    modelValue: CalendarCardValue;
    startDate: Date | null;
    endDate: Date | null;
    disableDay: (day: CalendarCardDay) => boolean;
}>;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    type: CalendarCardType;
    firstDayOfWeek: number;
    modelValue: CalendarCardValue;
    startDate: Date | null;
    endDate: Date | null;
    disableDay: (day: CalendarCardDay) => boolean;
}>>, {
    type: string;
    firstDayOfWeek: number;
    modelValue: null;
    startDate: null;
    endDate: null;
    disableDay: () => false;
}>>, {
    jump: (step?: number) => void;
    jumpTo: (y: number, m: number) => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
    dayClick: (...args: any[]) => void;
    pageChange: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    type: CalendarCardType;
    firstDayOfWeek: number;
    modelValue: CalendarCardValue;
    startDate: Date | null;
    endDate: Date | null;
    disableDay: (day: CalendarCardDay) => boolean;
}>>, {
    type: string;
    firstDayOfWeek: number;
    modelValue: null;
    startDate: null;
    endDate: null;
    disableDay: () => false;
}>>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onDayClick?: ((...args: any[]) => any) | undefined;
    onPageChange?: ((...args: any[]) => any) | undefined;
}>, {
    type: CalendarCardType;
    modelValue: CalendarCardValue;
    startDate: Date | null;
    endDate: Date | null;
    firstDayOfWeek: number;
    disableDay: (day: CalendarCardDay) => boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {
    top?(_: {
        day: CalendarCardDay;
    }): any;
    default?(_: {
        day: CalendarCardDay;
    }): any;
    bottom?(_: {
        day: CalendarCardDay;
    }): any;
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
