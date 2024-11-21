"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const deviceFingerprintFunctions_1 = require("./util/deviceFingerprintFunctions");
const domManipulation_1 = require("./util/domManipulation");
// Sync options
const initializeScript = (secretKey, debug) => {
    if (debug === null || debug === undefined)
        debug = false;
    if (debug) {
        console.log("### CALLING: initializeScript ###");
        console.log("secretKey: ", secretKey);
    }
    (0, domManipulation_1.addDeviceTrackingTags)(secretKey, debug);
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
    (0, domManipulation_1.addDeviceTrackingTagsCustom)(secretKey, customDomain, trackerName, debug);
};
//Async options
const initializeScriptAsync = (secretKey, debug) => {
    if (debug === null || debug === undefined)
        debug = false;
    if (debug) {
        console.log("### CALLING: initializeScriptAsync ###");
        console.log("secretKey: ", secretKey);
    }
    return (0, domManipulation_1.addDeviceTrackingTagsAsync)(secretKey, debug);
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
    return (0, domManipulation_1.addDeviceTrackingTagsAsyncCustom)(secretKey, customDomain, trackerName, debug);
};
exports.default = {
    initializeScript,
    initializeScriptAsync,
    initializeScriptCustom,
    initializeScriptAsyncCustom,
    Init: deviceFingerprintFunctions_1.Init,
    AfterResult: deviceFingerprintFunctions_1.AfterResult,
    AfterFailure: deviceFingerprintFunctions_1.AfterFailure,
    SetFormFieldPrepend: deviceFingerprintFunctions_1.SetFormFieldPrepend,
    Trigger: deviceFingerprintFunctions_1.Trigger,
    Store: deviceFingerprintFunctions_1.Store,
    Field: deviceFingerprintFunctions_1.Field,
    Pause: deviceFingerprintFunctions_1.Pause,
    Resume: deviceFingerprintFunctions_1.Resume,
    FetchExecutionLogs: deviceFingerprintFunctions_1.FetchExecutionLogs,
};
