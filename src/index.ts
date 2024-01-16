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
} from "./util/deviceFingerprintFunctions";

import {
  addDeviceTrackingTags,
  addDeviceTrackingTagsAsync,
  addDeviceTrackingTagsCustom,
  addDeviceTrackingTagsAsyncCustom,
} from "./util/domManipulation";

// Sync options

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

//Async options

const initializeScriptAsync = (secretKey: string) => {
  return addDeviceTrackingTagsAsync(secretKey);
};

const initializeScriptAsyncCustom = (
  secretKey: string,
  customDomain: string,
  trackerName: string
) => {
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
};
