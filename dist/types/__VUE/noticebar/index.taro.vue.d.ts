import { PropType } from 'vue';
import { Notice, CircleClose } from '@nutui/icons-vue-taro';
import { NoticebarDirection } from './types';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    direction: {
        type: PropType<NoticebarDirection>;
        default: string;
    };
    list: {
        type: PropType<any[]>;
        default: () => never[];
    };
    standTime: {
        type: NumberConstructor;
        default: number;
    };
    complexAm: {
        type: BooleanConstructor;
        default: boolean;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
    text: {
        type: StringConstructor;
        default: string;
    };
    closeMode: {
        type: BooleanConstructor;
        default: boolean;
    };
    wrapable: {
        type: BooleanConstructor;
        default: boolean;
    };
    leftIcon: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    background: {
        type: StringConstructor;
        default: string;
    };
    delay: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    scrollable: {
        type: BooleanConstructor;
        default: null;
    };
    speed: {
        type: NumberConstructor;
        default: number;
    };
}>, {
    isEllipsis: import("vue").ComputedRef<boolean>;
    barStyle: import("vue").ComputedRef<{
        [props: string]: any;
    }>;
    contentStyle: import("vue").ComputedRef<{
        animationDelay: string;
        animationDuration: string;
        transform: string;
    }>;
    horseLampStyle: import("vue").ComputedRef<{}>;
    wrap: import("vue").Ref<HTMLElement | null, HTMLElement | null>;
    content: import("vue").Ref<HTMLElement | null, HTMLElement | null>;
    handleClick: (event: Event) => void;
    onClickIcon: (event: Event) => void;
    onAnimationEnd: (event: Event) => void;
    go: (item: any) => void;
    handleClickIcon: () => void;
    slots: Readonly<{
        [name: string]: import("vue").Slot<any> | undefined;
    }>;
    pxCheck: (value?: string | number | undefined) => string | undefined;
    wrapContentClass: import("vue").ComputedRef<{
        [x: string]: boolean;
        'nut-noticebar__page-wrap-content': boolean;
        'nut-ellipsis': boolean;
    }>;
    renderIcon: (icon: import("vue").Component, props?: any) => "" | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    wrapWidth: import("vue").Ref<number, number>;
    firstRound: import("vue").Ref<boolean, boolean>;
    duration: import("vue").Ref<number, number>;
    offsetWidth: import("vue").Ref<number, number>;
    showNoticebar: import("vue").Ref<boolean, boolean>;
    animationClass: import("vue").Ref<string, string>;
    animate: import("vue").Ref<boolean, boolean>;
    scrollList: import("vue").Ref<never[], never[]>;
    distance: import("vue").Ref<number, number>;
    timer: import("vue").Ref<null, null>;
    keepAlive: import("vue").Ref<boolean, boolean>;
    isCanScroll: import("vue").Ref<boolean | null, boolean | null>;
    showNotica: import("vue").Ref<boolean, boolean>;
    id: import("vue").Ref<number, number>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "close" | "acrossEnd")[], "click" | "close" | "acrossEnd", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    direction: {
        type: PropType<NoticebarDirection>;
        default: string;
    };
    list: {
        type: PropType<any[]>;
        default: () => never[];
    };
    standTime: {
        type: NumberConstructor;
        default: number;
    };
    complexAm: {
        type: BooleanConstructor;
        default: boolean;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
    text: {
        type: StringConstructor;
        default: string;
    };
    closeMode: {
        type: BooleanConstructor;
        default: boolean;
    };
    wrapable: {
        type: BooleanConstructor;
        default: boolean;
    };
    leftIcon: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    background: {
        type: StringConstructor;
        default: string;
    };
    delay: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    scrollable: {
        type: BooleanConstructor;
        default: null;
    };
    speed: {
        type: NumberConstructor;
        default: number;
    };
}>> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    onAcrossEnd?: ((...args: any[]) => any) | undefined;
}>, {
    color: string;
    text: string;
    background: string;
    direction: NoticebarDirection;
    height: number;
    list: any[];
    standTime: number;
    complexAm: boolean;
    closeMode: boolean;
    wrapable: boolean;
    leftIcon: boolean;
    delay: string | number;
    scrollable: boolean;
    speed: number;
}, {}, {
    ScrollItem: (props: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    Notice: typeof Notice;
    CircleClose: typeof CircleClose;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
