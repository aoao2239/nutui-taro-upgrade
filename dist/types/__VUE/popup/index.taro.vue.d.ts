import { Close } from '@nutui/icons-vue-taro';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    zIndex: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    duration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    lockScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    position: {
        type: import("vue").PropType<import("./types").PopupPosition>;
        default: string;
    };
    transition: {
        type: StringConstructor;
        default: string;
    };
    style: {
        type: ObjectConstructor;
        default: () => {};
    };
    popClass: {
        type: StringConstructor;
        default: string;
    };
    closeable: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeIconPosition: {
        type: import("vue").PropType<import("./types").PopupCloseIconPosition>;
        default: string;
    };
    destroyOnClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    teleport: {
        type: (StringConstructor | {
            new (): Element;
            prototype: Element;
        })[];
        default: string;
    };
    overlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    teleportDisable: {
        type: BooleanConstructor;
        default: boolean;
    };
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: boolean;
    };
    overlayClass: {
        type: StringConstructor;
        default: string;
    };
    overlayStyle: {
        type: ObjectConstructor;
        default: () => {};
    };
}>, {
    popStyle: import("vue").ComputedRef<{
        zIndex: string | number;
        transitionDuration: string;
    }>;
    transitionName: import("vue").ComputedRef<string>;
    classes: import("vue").ComputedRef<{
        [x: string]: boolean;
        round: boolean;
    }>;
    onClick: (e: Event) => void;
    onClickCloseIcon: (e: Event) => void;
    onClickOverlay: (e: Event) => void;
    onOpened: (el: Element) => void;
    onClosed: (el: Element) => void;
    zIndex: import("vue").Ref<string | number, string | number>;
    showSlot: import("vue").Ref<boolean, boolean>;
    closed: import("vue").Ref<boolean, boolean>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "update:visible" | "open" | "clickPop" | "clickCloseIcon" | "opened" | "closed" | "clickOverlay")[], "close" | "update:visible" | "open" | "clickPop" | "clickCloseIcon" | "opened" | "closed" | "clickOverlay", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    zIndex: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    duration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    lockScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    position: {
        type: import("vue").PropType<import("./types").PopupPosition>;
        default: string;
    };
    transition: {
        type: StringConstructor;
        default: string;
    };
    style: {
        type: ObjectConstructor;
        default: () => {};
    };
    popClass: {
        type: StringConstructor;
        default: string;
    };
    closeable: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeIconPosition: {
        type: import("vue").PropType<import("./types").PopupCloseIconPosition>;
        default: string;
    };
    destroyOnClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    teleport: {
        type: (StringConstructor | {
            new (): Element;
            prototype: Element;
        })[];
        default: string;
    };
    overlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    teleportDisable: {
        type: BooleanConstructor;
        default: boolean;
    };
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: boolean;
    };
    overlayClass: {
        type: StringConstructor;
        default: string;
    };
    overlayStyle: {
        type: ObjectConstructor;
        default: () => {};
    };
}>> & Readonly<{
    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    onOpen?: ((...args: any[]) => any) | undefined;
    onClickPop?: ((...args: any[]) => any) | undefined;
    onClickCloseIcon?: ((...args: any[]) => any) | undefined;
    onOpened?: ((...args: any[]) => any) | undefined;
    onClosed?: ((...args: any[]) => any) | undefined;
    onClickOverlay?: ((...args: any[]) => any) | undefined;
}>, {
    round: boolean;
    duration: string | number;
    transition: string;
    style: Record<string, any>;
    visible: boolean;
    zIndex: string | number;
    lockScroll: boolean;
    overlayClass: string;
    overlayStyle: Record<string, any>;
    closeOnClickOverlay: boolean;
    overlay: boolean;
    position: import("./types").PopupPosition;
    popClass: string;
    closeable: boolean;
    closeIconPosition: import("./types").PopupCloseIconPosition;
    destroyOnClose: boolean;
    teleport: string | Element;
    teleportDisable: boolean;
    safeAreaInsetBottom: boolean;
}, {}, {
    NutOverlay: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
            duration: {
                type: import("vue").PropType<string | number>;
                default: number;
            };
            visible: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            zIndex: {
                type: import("vue").PropType<string | number>;
                default: number;
            };
            lockScroll: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            overlayClass: {
                type: import("vue").PropType<string>;
                default: string;
            };
            overlayStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
            };
            closeOnClickOverlay: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
        }>> & Readonly<{
            onClick?: ((...args: any[]) => any) | undefined;
            "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            click: (...args: any[]) => void;
            "update:visible": (...args: any[]) => void;
        }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            duration: {
                type: import("vue").PropType<string | number>;
                default: number;
            };
            visible: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            zIndex: {
                type: import("vue").PropType<string | number>;
                default: number;
            };
            lockScroll: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            overlayClass: {
                type: import("vue").PropType<string>;
                default: string;
            };
            overlayStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
            };
            closeOnClickOverlay: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
        }>> & Readonly<{
            onClick?: ((...args: any[]) => any) | undefined;
            "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
        }>, {
            duration: string | number;
            visible: boolean;
            zIndex: string | number;
            lockScroll: boolean;
            overlayClass: string;
            closeOnClickOverlay: boolean;
        }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            duration: {
                type: import("vue").PropType<string | number>;
                default: number;
            };
            visible: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            zIndex: {
                type: import("vue").PropType<string | number>;
                default: number;
            };
            lockScroll: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            overlayClass: {
                type: import("vue").PropType<string>;
                default: string;
            };
            overlayStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
            };
            closeOnClickOverlay: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
        }>> & Readonly<{
            onClick?: ((...args: any[]) => any) | undefined;
            "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
        }>, {}, {}, {}, {}, {
            duration: string | number;
            visible: boolean;
            zIndex: string | number;
            lockScroll: boolean;
            overlayClass: string;
            closeOnClickOverlay: boolean;
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        duration: {
            type: import("vue").PropType<string | number>;
            default: number;
        };
        visible: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        zIndex: {
            type: import("vue").PropType<string | number>;
            default: number;
        };
        lockScroll: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        overlayClass: {
            type: import("vue").PropType<string>;
            default: string;
        };
        overlayStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
        };
        closeOnClickOverlay: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
    }>> & Readonly<{
        onClick?: ((...args: any[]) => any) | undefined;
        "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        click: (...args: any[]) => void;
        "update:visible": (...args: any[]) => void;
    }, string, {
        duration: string | number;
        visible: boolean;
        zIndex: string | number;
        lockScroll: boolean;
        overlayClass: string;
        closeOnClickOverlay: boolean;
    }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
    Close: typeof Close;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
