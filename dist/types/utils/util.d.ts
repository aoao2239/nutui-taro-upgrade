export * from './Interceptor';
export declare const TypeOfFun: (value: any) => "string" | "undefined" | "boolean" | "null" | "array" | "date" | "number" | "function" | "regexp" | "textnode" | "whitespace" | "element" | "object" | "unknow";
export declare const objectToString: () => string;
export declare const toTypeString: (value: unknown) => string;
export declare const toRawType: (value: unknown) => string;
export declare const isArray: (arg: any) => arg is any[];
export declare const isMap: (val: unknown) => val is Map<any, any>;
export declare const isSet: (val: unknown) => val is Set<any>;
export declare const isDate: (val: unknown) => val is Date;
export declare const isFunction: (val: unknown) => val is Function;
export declare const isString: (val: unknown) => val is string;
export declare const isSymbol: (val: unknown) => val is symbol;
export declare const isObject: (val: unknown) => val is Record<any, any>;
export declare const isPromise: <T = any>(val: unknown) => val is Promise<T>;
export declare const win: Window & typeof globalThis;
export declare const docu: Document;
export declare const body: HTMLElement;
export declare const getPropByPath: (obj: any, keyPath: string) => any;
export declare const floatData: (format: any, dataOp: any, mapOps: any) => any;
export declare const deepMerge: (target: any, newObj: any) => any;
export declare function myFixed(num: any, digit?: number): string | void;
export declare function preventDefault(event: Event, isStopPropagation?: boolean): void;
export declare const padZero: (num: number | string, length?: number) => string;
export declare const clamp: (num: number, min: number, max: number) => number;
export declare const getScrollTopRoot: () => number;
