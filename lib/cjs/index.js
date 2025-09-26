"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const deviceFingerprintFunctions_1 = require("./util/deviceFingerprintFunctions");
const domManipulation_1 = require("./util/domManipulation");
//#######################
// Sync Functions
//#######################
const initializeScript = (secretKey) => {
    (0, domManipulation_1.addDeviceTrackingTags)(secretKey);
};
const initializeScriptCustom = (secretKey, customDomain, trackerName) => {
    (0, domManipulation_1.addDeviceTrackingTagsCustom)(secretKey, customDomain, trackerName);
};
//#######################
// Async Functions
//#######################
const initializeScriptAsync = (secretKey) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, domManipulation_1.addDeviceTrackingTagsAsync)(secretKey);
});
const initializeScriptAsyncCustom = (secretKey, customDomain, trackerName) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, domManipulation_1.addDeviceTrackingTagsAsyncCustom)(secretKey, customDomain, trackerName);
});
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
    options: domManipulation_1.options,
};
