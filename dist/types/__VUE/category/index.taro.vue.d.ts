import { PropType } from 'vue';
export type CategoryType = {
    catName?: string;
    [key: string]: any;
};
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        default: string;
    };
    category: {
        type: PropType<CategoryType>;
        default: () => never[];
    };
}>, {
    getChildList: (index: any) => void;
    checkIndex: import("vue").Ref<number, number>;
    categoryLeft: import("vue").Ref<boolean, boolean>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        default: string;
    };
    category: {
        type: PropType<CategoryType>;
        default: () => never[];
    };
}>> & Readonly<{}>, {
    type: string;
    category: CategoryType;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
