import { CSSProperties } from 'vue';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    top: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    zIndex: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    scrollTop: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}>, {
    rootRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
    rootStyle: import("vue").ComputedRef<CSSProperties | undefined>;
    stickyStyle: import("vue").ComputedRef<CSSProperties>;
    refRandomId: string;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    top: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    zIndex: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    scrollTop: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
}>, {
    top: string | number;
    zIndex: string | number;
    scrollTop: string | number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
