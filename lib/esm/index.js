import { Init, AfterResult, AfterFailure, SetFormFieldPrepend, Trigger, Store, Field, Pause, Resume, } from "./util/deviceFingerprintFunctions";
import { addDeviceTrackingTags, addDeviceTrackingTagsAsync, addDeviceTrackingTagsCustom, addDeviceTrackingTagsAsyncCustom, } from "./util/domManipulation";
// Sync options
const initializeScript = (secretKey, debug) => {
    if (debug === null || debug === undefined)
        debug = false;
    if (debug) {
        console.log("### CALLING: initializeScript ###");
        console.log("secretKey: ", secretKey);
    }
    addDeviceTrackingTags(secretKey, debug);
};
const initializeScriptCustom = (secretKey, customDomain, trackerName, debug) => {
    if (debug === null || debug === undefined)
        debug = false;
    if (debug) {
        console.log("### CALLING: initializeScriptCustom ###");
        console.log("secretKey: ", secretKey);
        console.log("customDomain: ", customDomain);
        console.log("trackerName: ", trackerName);
    }
    addDeviceTrackingTagsCustom(secretKey, customDomain, trackerName, debug);
};
//Async options
const initializeScriptAsync = (secretKey, debug) => {
    if (debug === null || debug === undefined)
        debug = false;
    if (debug) {
        console.log("### CALLING: initializeScriptAsync ###");
        console.log("secretKey: ", secretKey);
    }
    return addDeviceTrackingTagsAsync(secretKey, debug);
};
const initializeScriptAsyncCustom = (secretKey, customDomain, trackerName, debug) => {
    if (debug === null || debug === undefined)
        debug = false;
    if (debug) {
        console.log("### CALLING: initializeScriptAsyncCustom ###");
        console.log("secretKey: ", secretKey);
        console.log("customDomain: ", customDomain);
        console.log("trackerName: ", trackerName);
    }
    return addDeviceTrackingTagsAsyncCustom(secretKey, customDomain, trackerName, debug);
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
};
