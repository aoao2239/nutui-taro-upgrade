import { PropType, CSSProperties } from 'vue';
import { type AvatarShape } from './types';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    size: {
        type: PropType<string | number>;
        default: string;
    };
    shape: {
        type: PropType<AvatarShape>;
        default: string;
    };
    bgColor: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
}>, {
    classes: import("vue").ComputedRef<{
        [x: string]: boolean;
        "nut-avatar": boolean;
    }>;
    styles: import("vue").ComputedRef<CSSProperties>;
    avatarRef: import("vue").Ref<null, null>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: PropType<string | number>;
        default: string;
    };
    shape: {
        type: PropType<AvatarShape>;
        default: string;
    };
    bgColor: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{}>, {
    color: string;
    shape: AvatarShape;
    size: string | number;
    bgColor: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
