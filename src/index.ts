import {
  Init,
  AfterResult,
  AfterFailure,
  SetFormFieldPrepend,
  Trigger,
  Store,
  Field,
  Pause,
  Resume,
  FetchExecutionLogs,
} from "./util/deviceFingerprintFunctions";

import {
  addDeviceTrackingTags,
  addDeviceTrackingTagsAsync,
  addDeviceTrackingTagsCustom,
  addDeviceTrackingTagsAsyncCustom,
} from "./util/domManipulation";

// Sync options

const initializeScript = (secretKey: string, debug?: boolean) => {
  if (debug === null || debug === undefined) debug = false;
  if (debug) {
    console.log("### CALLING: initializeScript ###");
    console.log("secretKey: ", secretKey);
  }
  addDeviceTrackingTags(secretKey, debug);
};

const initializeScriptCustom = (
  secretKey: string,
  customDomain: string,
  trackerName: string,
  debug?: boolean
) => {
  if (debug === null || debug === undefined) debug = false;
  if (debug) {
    console.log("### CALLING: initializeScriptCustom ###");
    console.log("secretKey: ", secretKey);
    console.log("customDomain: ", customDomain);
    console.log("trackerName: ", trackerName);
  }
  addDeviceTrackingTagsCustom(secretKey, customDomain, trackerName, debug);
};

//Async options

const initializeScriptAsync = (secretKey: string, debug?: boolean) => {
  if (debug === null || debug === undefined) debug = false;
  if (debug) {
    console.log("### CALLING: initializeScriptAsync ###");
    console.log("secretKey: ", secretKey);
  }
  return addDeviceTrackingTagsAsync(secretKey, debug);
};

const initializeScriptAsyncCustom = (
  secretKey: string,
  customDomain: string,
  trackerName: string,
  debug?: boolean
) => {
  if (debug === null || debug === undefined) debug = false;
  if (debug) {
    console.log("### CALLING: initializeScriptAsyncCustom ###");
    console.log("secretKey: ", secretKey);
    console.log("customDomain: ", customDomain);
    console.log("trackerName: ", trackerName);
  }
  return addDeviceTrackingTagsAsyncCustom(
    secretKey,
    customDomain,
    trackerName,
    debug
  );
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
  FetchExecutionLogs,
};
