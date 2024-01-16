import {
  DEVICE_FINGERPRINT_SCRIPT_ID,
  DEVICE_FINGERPRINT_SCRIPT_ID_ASYNC,
} from "./const";

// Sync methods

export const addDeviceTrackingTags = (secretKey: string) => {
  const baseURL = `https://www.ipqscdn.com/api/*/${secretKey}`;
  document.head.appendChild(getScriptTagWindowIPQInit());
  document.head.appendChild(getScriptTagLoadSrc(baseURL));
  document.head.appendChild(getNoscriptTag(baseURL));
};

// Sync methods with custom configs

export const addDeviceTrackingTagsCustom = (
  secretKey: string,
  customDomain: string,
  trackerName: string
) => {
  const baseURL = `https://${customDomain}/api/${trackerName}/${secretKey}`;
  document.head.appendChild(getScriptTagWindowIPQInit());
  document.head.appendChild(getScriptTagLoadSrc(baseURL));
  document.head.appendChild(getNoscriptTag(baseURL));
};

// Common sync methods

const getScriptTagLoadSrc = (baseURL: string) => {
  const srcFile = `${baseURL}/learn.js`;
  const scriptTag: Element = document.createElement("script");
  scriptTag.setAttribute("src", srcFile);
  scriptTag.setAttribute("id", DEVICE_FINGERPRINT_SCRIPT_ID);
  scriptTag.setAttribute("crossorigin", "anonymous");
  return scriptTag;
};

// Async methods

export const addDeviceTrackingTagsAsync = (secretKey: string) => {
  return new Promise<void>((resolve, reject) => {
    const baseURL = `https://www.ipqscdn.com/api/*/${secretKey}`;
    document.head.appendChild(getScriptTagWindowIPQInit());
    document.head.appendChild(
      getScriptTagLoadSrcAsync(baseURL, resolve, reject)
    );
    document.head.appendChild(getNoscriptTag(baseURL));
  });
};

// Async methods with custom domain, tracker

export const addDeviceTrackingTagsAsyncCustom = (
  secretKey: string,
  customDomain: string,
  trackerName: string
) => {
  return new Promise<void>((resolve, reject) => {
    const baseURL = `https://${customDomain}/api/${trackerName}/${secretKey}`;
    document.head.appendChild(getScriptTagWindowIPQInit());
    document.head.appendChild(
      getScriptTagLoadSrcAsync(baseURL, resolve, reject)
    );
    document.head.appendChild(getNoscriptTag(baseURL));
  });
};

// Common async methods

const getScriptTagLoadSrcAsync = (
  baseURL: string,
  resolveCb: () => void,
  rejectCb: () => void
) => {
  const srcFile = `${baseURL}/learn.js`;
  const scriptTag: HTMLScriptElement = document.createElement("script");
  scriptTag.setAttribute("src", srcFile);
  scriptTag.setAttribute("id", DEVICE_FINGERPRINT_SCRIPT_ID_ASYNC);
  scriptTag.setAttribute("crossorigin", "anonymous");
  // For async
  scriptTag.onload = function () {
    resolveCb();
  };
  scriptTag.onerror = function () {
    rejectCb();
  };
  return scriptTag;
};

// Pixel fallback

const getNoscriptTag = (baseURL: string) => {
  const noscriptTag: Element = document.createElement("noscript");
  noscriptTag.appendChild(generateImageTag(baseURL));
  return noscriptTag;
};

const generateImageTag = (baseURL: string) => {
  const imageTag: Element = document.createElement("img");
  const srcImage = `${baseURL}/pixel.png`;
  imageTag.setAttribute("src", srcImage);
  return imageTag;
};

// DOM functions

const getScriptTagWindowIPQInit = () => {
  const scriptTag: HTMLScriptElement = document.createElement("script");
  scriptTag.setAttribute("type", "text/javascript");
  const inlineScript = document.createTextNode(`
        window.IPQ = {
            Callback: function(){}
        };
    `);
  scriptTag.appendChild(inlineScript);
  return scriptTag;
};

export default addDeviceTrackingTags;
