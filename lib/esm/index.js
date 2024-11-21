import { Init, AfterResult, AfterFailure, SetFormFieldPrepend, Trigger, Store, Field, Pause, Resume, SetRequestTimeout, SetDebugLevel, FetchExecutionLogs, } from "./util/deviceFingerprintFunctions";
import { addDeviceTrackingTags, addDeviceTrackingTagsAsync, addDeviceTrackingTagsCustom, addDeviceTrackingTagsAsyncCustom, } from "./util/domManipulation";
// Sync options
const initializeScript = (secretKey) => {
    addDeviceTrackingTags(secretKey);
};
const initializeScriptCustom = (secretKey, customDomain, trackerName) => {
    addDeviceTrackingTagsCustom(secretKey, customDomain, trackerName);
};
//Async options
const initializeScriptAsync = (secretKey) => {
    return addDeviceTrackingTagsAsync(secretKey);
};
const initializeScriptAsyncCustom = (secretKey, customDomain, trackerName) => {
    return addDeviceTrackingTagsAsyncCustom(secretKey, customDomain, trackerName);
};
export default {
    initializeScript,
    initializeScriptAsync,
    initializeScriptCustom,
    initializeScriptAsyncCustom,
    Init,
    AfterResult,
    AfterFailure,
    SetFormFieldPrepend,
    Trigger,
    Store,
    Field,
    Pause,
    Resume,
    SetRequestTimeout,
    SetDebugLevel,
    FetchExecutionLogs,
};
