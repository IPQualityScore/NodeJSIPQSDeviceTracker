import { Init, AfterResult, AfterFailure, SetFormFieldPrepend, Trigger, Store, Field, Pause, Resume, SetRequestTimeout, SetDebugLevel, FetchExecutionLogs, } from "./util/deviceFingerprintFunctions";
import { addDeviceTrackingTags, addDeviceTrackingTagsAsync, addDeviceTrackingTagsCustom, addDeviceTrackingTagsAsyncCustom, options, } from "./util/domManipulation";
//#######################
// Sync Functions
//#######################
const initializeScript = (secretKey) => {
    addDeviceTrackingTags(secretKey);
};
const initializeScriptCustom = (secretKey, customDomain, trackerName) => {
    addDeviceTrackingTagsCustom(secretKey, customDomain, trackerName);
};
//#######################
// Async Functions
//#######################
const initializeScriptAsync = async (secretKey) => {
    await addDeviceTrackingTagsAsync(secretKey);
};
const initializeScriptAsyncCustom = async (secretKey, customDomain, trackerName) => {
    await addDeviceTrackingTagsAsyncCustom(secretKey, customDomain, trackerName);
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
    options,
};
