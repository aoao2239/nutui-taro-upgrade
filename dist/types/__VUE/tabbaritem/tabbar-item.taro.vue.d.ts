export type TabbarItemProps = Partial<{
    tabTitle: string;
    name: string;
    icon: any;
    href: string;
    to: string | Record<never, any>;
}>;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    tabTitle: string;
    name: string;
    icon: any;
    href: string;
    to: string | Record<never, any>;
}>>, {
    tabTitle: string;
    href: string;
}>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    tabTitle: string;
    name: string;
    icon: any;
    href: string;
    to: string | Record<never, any>;
}>>, {
    tabTitle: string;
    href: string;
}>>> & Readonly<{}>, {
    tabTitle: string;
    href: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {
    icon?(_: {
        active: boolean;
    }): any;
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
