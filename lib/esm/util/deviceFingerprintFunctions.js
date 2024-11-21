export const Init = () => {
    window.Startup.Init();
};
export const AfterResult = (resultCallback) => {
    window.Startup.AfterResult(resultCallback);
};
export const AfterFailure = (resultCallback) => {
    window.Startup.AfterFailure(resultCallback);
};
export const SetFormFieldPrepend = (prefix) => {
    window.Startup.SetFormFieldPrepend(prefix);
};
export const Trigger = (anchorTag, eventCallback) => {
    window.Startup.Trigger(anchorTag, eventCallback);
};
export const Store = (name, id) => {
    window.Startup.Store(name, id);
};
export const Field = (fieldName, element) => {
    window.Startup.Field(fieldName, element);
};
export const Pause = () => {
    window.Startup.Pause();
};
export const Resume = () => {
    window.Startup.Resume();
};
export const SetRequestTimeout = (timeout) => {
    window.Startup.SetRequestTimeout(timeout);
};
export const SetDebugLevel = (debug) => {
    window.Startup.SetDebugLevel(debug);
};
export const FetchExecutionLogs = () => {
    return window.Startup.FetchExecutionLogs();
};
