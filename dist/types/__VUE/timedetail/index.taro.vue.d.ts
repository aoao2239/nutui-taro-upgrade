import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    times: {
        type: PropType<any[]>;
        default: () => never[];
    };
}>, {
    getClass: (item: string) => {
        'nut-time-detail__detail__list__item': boolean;
        'nut-time-detail__detail__list__item--curr': boolean;
    } | undefined;
    renderData: import("vue").ComputedRef<any>;
    handleTime: (time: string) => void;
    currentKey: import("vue").Ref<unknown, unknown>;
    currentTime: import("vue").Ref<any[], any[]>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "select"[], "select", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    times: {
        type: PropType<any[]>;
        default: () => never[];
    };
}>> & Readonly<{
    onSelect?: ((...args: any[]) => any) | undefined;
}>, {
    times: any[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
