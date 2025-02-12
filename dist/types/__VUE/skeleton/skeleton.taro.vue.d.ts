import type { AvatarShape } from '../avatar/types';
export type SkeletonProps = Partial<{
    width: string;
    height: string;
    animated: boolean;
    avatar: boolean;
    avatarShape: AvatarShape;
    avatarSize: string;
    loading: boolean;
    round: boolean;
    row: string | number;
    title: boolean;
}>;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    width: string;
    height: string;
    animated: boolean;
    avatar: boolean;
    avatarShape: AvatarShape;
    avatarSize: string;
    loading: boolean;
    round: boolean;
    row: string | number;
    title: boolean;
}>>, {
    width: string;
    height: string;
    animated: boolean;
    avatar: boolean;
    avatarShape: string;
    avatarSize: string;
    loading: boolean;
    round: boolean;
    row: string;
    title: boolean;
}>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    width: string;
    height: string;
    animated: boolean;
    avatar: boolean;
    avatarShape: AvatarShape;
    avatarSize: string;
    loading: boolean;
    round: boolean;
    row: string | number;
    title: boolean;
}>>, {
    width: string;
    height: string;
    animated: boolean;
    avatar: boolean;
    avatarShape: string;
    avatarSize: string;
    loading: boolean;
    round: boolean;
    row: string;
    title: boolean;
}>>> & Readonly<{}>, {
    round: boolean;
    loading: boolean;
    title: boolean;
    row: string | number;
    height: string;
    width: string;
    avatar: boolean;
    animated: boolean;
    avatarShape: AvatarShape;
    avatarSize: string;
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
