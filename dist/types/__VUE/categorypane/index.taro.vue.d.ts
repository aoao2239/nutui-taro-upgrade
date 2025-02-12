import { PropType } from 'vue';
export type ChildType = {
    catName?: string;
    catType?: number;
    [key: string]: any;
};
export type CustomType = {
    catName?: string;
    [key: string]: any;
};
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        default: string;
    };
    categoryChild: {
        type: PropType<ChildType>;
        default: () => never[];
    };
    customCategory: {
        type: PropType<CustomType>;
        default: () => never[];
    };
}>, {
    onChange: (sku: string) => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        default: string;
    };
    categoryChild: {
        type: PropType<ChildType>;
        default: () => never[];
    };
    customCategory: {
        type: PropType<CustomType>;
        default: () => never[];
    };
}>> & Readonly<{}>, {
    type: string;
    categoryChild: ChildType;
    customCategory: CustomType;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
