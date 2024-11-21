export declare const Init: () => void;
export declare const AfterResult: (resultCallback: () => void) => void;
export declare const AfterFailure: (resultCallback: () => void) => void;
export declare const SetFormFieldPrepend: (prefix: string) => void;
export declare const Trigger: (anchorTag: string, eventCallback?: ((event: object) => void | undefined) | undefined) => void;
export declare const Store: (name: string, id: number) => void;
export declare const Field: (fieldName: string, element: string) => void;
export declare const Pause: () => void;
export declare const Resume: () => void;
export declare const SetRequestTimeout: (timeout: number) => void;
export declare const SetDebugLevel: (debug: number) => void;
export declare const FetchExecutionLogs: () => object;
//# sourceMappingURL=deviceFingerprintFunctions.d.ts.map