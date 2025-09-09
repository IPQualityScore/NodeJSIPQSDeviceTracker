export interface CustomWindow extends Window {
    Startup: {
        Init: () => void,
        AfterResult: (resultCallback:  (result: any)  => void) => void,
        AfterFailure: (resultCallback:  (result: any)  => void) => void,
        SetFormFieldPrepend: (prefix: string) => void,
        Trigger: (anchorTag: string, eventCallback?: (event:object) => void) => void | undefined,
        Store: (name: string, id: String) => void,
        Field: (fieldName: string, element: string) => void,
        Pause: () => void,
        Resume: () => void,
	SetDebugLevel: (debug: number) => void,
	SetRequestTimeout: (timeout: number) => void,
	FetchExecutionLogs: () => object,
    }
}
