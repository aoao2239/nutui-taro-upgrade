import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    btnOptions: {
        type: PropType<string[]>;
        default: () => string[];
    };
    btnExtraText: {
        type: StringConstructor;
        default: string;
    };
    buyText: {
        type: StringConstructor;
        default: string;
    };
    addCartText: {
        type: StringConstructor;
        default: string;
    };
    confirmText: {
        type: StringConstructor;
        default: string;
    };
}>, {
    getBtnDesc: (type: string) => string;
    clickBtnOperate: (btn: string) => void;
    getSlots: (name: string) => import("vue").Slot<any> | undefined;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "changeSku" | "changeBuyCount" | "clickBtnOperate")[], "click" | "changeSku" | "changeBuyCount" | "clickBtnOperate", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    btnOptions: {
        type: PropType<string[]>;
        default: () => string[];
    };
    btnExtraText: {
        type: StringConstructor;
        default: string;
    };
    buyText: {
        type: StringConstructor;
        default: string;
    };
    addCartText: {
        type: StringConstructor;
        default: string;
    };
    confirmText: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
    onChangeSku?: ((...args: any[]) => any) | undefined;
    onChangeBuyCount?: ((...args: any[]) => any) | undefined;
    onClickBtnOperate?: ((...args: any[]) => any) | undefined;
}>, {
    confirmText: string;
    btnOptions: string[];
    btnExtraText: string;
    buyText: string;
    addCartText: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
