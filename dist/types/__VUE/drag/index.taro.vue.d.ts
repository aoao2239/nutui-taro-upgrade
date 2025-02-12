import { PropType } from 'vue';
import { DragDirection } from './types';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    attract: {
        type: BooleanConstructor;
        default: boolean;
    };
    direction: {
        type: PropType<DragDirection>;
        default: string;
    };
    boundary: {
        type: ObjectConstructor;
        default: () => {
            top: number;
            left: number;
            right: number;
            bottom: number;
        };
    };
}>, {
    myDrag: import("vue").Ref<any, any>;
    touchStart: (e: TouchEvent) => void;
    touchMove: (e: TouchEvent) => void;
    touchEnd: (e: TouchEvent) => void;
    state: any;
    refRandomId: string;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    attract: {
        type: BooleanConstructor;
        default: boolean;
    };
    direction: {
        type: PropType<DragDirection>;
        default: string;
    };
    boundary: {
        type: ObjectConstructor;
        default: () => {
            top: number;
            left: number;
            right: number;
            bottom: number;
        };
    };
}>> & Readonly<{}>, {
    direction: DragDirection;
    attract: boolean;
    boundary: Record<string, any>;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
