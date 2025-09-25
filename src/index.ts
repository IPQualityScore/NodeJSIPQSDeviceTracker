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
  SetRequestTimeout,
  SetDebugLevel,
  FetchExecutionLogs,
} from "./util/deviceFingerprintFunctions";

import {
  addDeviceTrackingTags,
  addDeviceTrackingTagsAsync,
  addDeviceTrackingTagsCustom,
  addDeviceTrackingTagsAsyncCustom,
  options,
} from "./util/domManipulation";

//#######################
// Sync Functions
//#######################

const initializeScript = (secretKey: string) => {
  addDeviceTrackingTags(secretKey);
};

const initializeScriptCustom = (
  secretKey: string,
  customDomain: string,
  trackerName: string
) => {
  addDeviceTrackingTagsCustom(secretKey, customDomain, trackerName);
};

//#######################
// Async Functions
//#######################

const initializeScriptAsync = async (secretKey: string) => {
  await addDeviceTrackingTagsAsync(secretKey);
};

const initializeScriptAsyncCustom = async (
  secretKey: string,
  customDomain: string,
  trackerName: string
) => {
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
