declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    title: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    paneKey: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, any, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    title: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    paneKey: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
}>, {
    disabled: boolean;
    title: string | number;
    paneKey: string | number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
