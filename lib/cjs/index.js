"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const deviceFingerprintFunctions_1 = require("./util/deviceFingerprintFunctions");
const domManipulation_1 = require("./util/domManipulation");
// Sync options
const initializeScript = (secretKey) => {
    (0, domManipulation_1.addDeviceTrackingTags)(secretKey);
};
const initializeScriptCustom = (secretKey, customDomain, trackerName) => {
    (0, domManipulation_1.addDeviceTrackingTagsCustom)(secretKey, customDomain, trackerName);
};
//Async options
const initializeScriptAsync = (secretKey) => {
    return (0, domManipulation_1.addDeviceTrackingTagsAsync)(secretKey);
};
const initializeScriptAsyncCustom = (secretKey, customDomain, trackerName) => {
    return (0, domManipulation_1.addDeviceTrackingTagsAsyncCustom)(secretKey, customDomain, trackerName);
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
    SetRequestTimeout: deviceFingerprintFunctions_1.SetRequestTimeout,
    SetDebugLevel: deviceFingerprintFunctions_1.SetDebugLevel,
    FetchExecutionLogs: deviceFingerprintFunctions_1.FetchExecutionLogs,
};
