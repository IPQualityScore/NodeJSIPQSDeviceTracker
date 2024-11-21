export declare const Init: (debug?: boolean) => void;
export declare const AfterResult: (resultCallback: () => void, debug?: boolean) => void;
export declare const AfterFailure: (resultCallback: () => void, debug?: boolean) => void;
export declare const SetFormFieldPrepend: (prefix: string, debug?: boolean) => void;
export declare const Trigger: (anchorTag: string, debug?: boolean, eventCallback?: ((event: object) => void | undefined) | undefined) => void;
export declare const Store: (name: string, id: number, debug?: boolean) => void;
export declare const Field: (fieldName: string, element: string, debug?: boolean) => void;
export declare const Pause: (debug?: boolean) => void;
export declare const Resume: (debug?: boolean) => void;
export declare const FetchExecutionLogs: (debug?: boolean) => void;
//# sourceMappingURL=deviceFingerprintFunctions.d.ts.map