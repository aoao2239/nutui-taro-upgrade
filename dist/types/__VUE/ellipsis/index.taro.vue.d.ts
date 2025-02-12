import { PropType } from 'vue';
import { EllipsisDirection } from './types';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    content: {
        type: StringConstructor;
        default: string;
    };
    direction: {
        type: PropType<EllipsisDirection>;
        default: string;
    };
    rows: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    expandText: {
        type: StringConstructor;
        default: string;
    };
    collapseText: {
        type: StringConstructor;
        default: string;
    };
    symbol: {
        type: StringConstructor;
        default: string;
    };
    lineHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
}>, {
    rootId: import("vue").Ref<string, string>;
    rootContain: import("vue").Ref<null, null>;
    symbolContain: import("vue").Ref<null, null>;
    ellipsis: {
        leading?: string | undefined;
        tailing?: string | undefined;
    };
    contantCopy: import("vue").Ref<string, string>;
    symbolText: import("vue").ComputedRef<string>;
    clickHandle: (type: number) => void;
    handleClick: () => void;
    refRandomId: string;
    widthRef: import("vue").Ref<string, string>;
    exceeded: import("vue").Ref<boolean, boolean>;
    expanded: import("vue").Ref<boolean, boolean>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "click")[], "change" | "click", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    content: {
        type: StringConstructor;
        default: string;
    };
    direction: {
        type: PropType<EllipsisDirection>;
        default: string;
    };
    rows: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    expandText: {
        type: StringConstructor;
        default: string;
    };
    collapseText: {
        type: StringConstructor;
        default: string;
    };
    symbol: {
        type: StringConstructor;
        default: string;
    };
    lineHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
}>> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
}>, {
    symbol: string;
    content: string;
    direction: EllipsisDirection;
    lineHeight: string | number;
    rows: string | number;
    expandText: string;
    collapseText: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
