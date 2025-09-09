import {CustomWindow} from "./windowInterface";

declare let window: CustomWindow;
export const Init = () => {
    window.Startup.Init();
};

export const AfterResult = (resultCallback: () => void) => {
    window.Startup.AfterResult(resultCallback);
}

export const AfterFailure = (resultCallback: () => void) => {
    window.Startup.AfterFailure(resultCallback);
}

export const SetFormFieldPrepend = (prefix: string) => {
     window.Startup.SetFormFieldPrepend(prefix);
};

export const Trigger = (anchorTag: string, eventCallback?: (event:object) => void | undefined) => {
    window.Startup.Trigger(anchorTag, eventCallback);
}

export const Store = (name: string, id: String) => {
    window.Startup.Store(name, id);
}

export const Field = (fieldName: string, element: string) => {
    window.Startup.Field(fieldName, element);
}

export const Pause = () => {
    window.Startup.Pause();
}

export const Resume = () => {
    window.Startup.Resume();
}

export const SetRequestTimeout = (timeout: number) => {
    window.Startup.SetRequestTimeout(timeout);
}

export const SetDebugLevel = (debug: number) => {
    window.Startup.SetDebugLevel(debug);
}

export const FetchExecutionLogs = () => {
    return window.Startup.FetchExecutionLogs();
}
