declare const _default: {
    initializeScript: (secretKey: string, debug?: boolean | undefined) => void;
    initializeScriptAsync: (secretKey: string, debug?: boolean | undefined) => Promise<void> | undefined;
    initializeScriptCustom: (secretKey: string, customDomain: string, trackerName: string, debug?: boolean | undefined) => void;
    initializeScriptAsyncCustom: (secretKey: string, customDomain: string, trackerName: string, debug?: boolean | undefined) => Promise<void> | undefined;
    Init: (debug?: boolean | undefined) => void;
    AfterResult: (resultCallback: () => void, debug?: boolean | undefined) => void;
    AfterFailure: (resultCallback: () => void, debug?: boolean | undefined) => void;
    SetFormFieldPrepend: (prefix: string, debug?: boolean | undefined) => void;
    Trigger: (anchorTag: string, debug?: boolean | undefined, eventCallback?: ((event: object) => void | undefined) | undefined) => void;
    Store: (name: string, id: number, debug?: boolean | undefined) => void;
    Field: (fieldName: string, element: string, debug?: boolean | undefined) => void;
    Pause: (debug?: boolean | undefined) => void;
    Resume: (debug?: boolean | undefined) => void;
};
export default _default;
//# sourceMappingURL=index.d.ts.map