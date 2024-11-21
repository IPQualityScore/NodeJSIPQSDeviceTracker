declare const _default: {
    initializeScript: (secretKey: string) => void;
    initializeScriptAsync: (secretKey: string) => Promise<void>;
    initializeScriptCustom: (secretKey: string, customDomain: string, trackerName: string) => void;
    initializeScriptAsyncCustom: (secretKey: string, customDomain: string, trackerName: string) => Promise<void>;
    Init: () => void;
    AfterResult: (resultCallback: () => void) => void;
    AfterFailure: (resultCallback: () => void) => void;
    SetFormFieldPrepend: (prefix: string) => void;
    Trigger: (anchorTag: string, eventCallback?: ((event: object) => void | undefined) | undefined) => void;
    Store: (name: string, id: number) => void;
    Field: (fieldName: string, element: string) => void;
    Pause: () => void;
    Resume: () => void;
    SetRequestTimeout: (timeout: number) => void;
    SetDebugLevel: (debug: number) => void;
    FetchExecutionLogs: () => object;
};
export default _default;
//# sourceMappingURL=index.d.ts.map