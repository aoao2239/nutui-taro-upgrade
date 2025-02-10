declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    name: {
        type: StringConstructor;
        default: string;
    };
    pannelKey: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}>, {
    classes: import("vue").ComputedRef<{
        [x: string]: boolean;
        'nut-time-pannel--curr': boolean;
    }>;
    handlePannel: (pannelKey: number | string) => void;
    currentKey: import("vue").Ref<unknown, unknown>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    name: {
        type: StringConstructor;
        default: string;
    };
    pannelKey: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
}>, {
    name: string;
    pannelKey: string | number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
