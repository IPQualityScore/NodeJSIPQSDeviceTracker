"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDeviceTrackingTagsAsyncCustom = exports.addDeviceTrackingTagsAsync = exports.addDeviceTrackingTagsCustom = exports.addDeviceTrackingTags = void 0;
const const_1 = require("./const");
// Sync methods
const addDeviceTrackingTags = (secretKey) => {
    const baseURL = `https://www.ipqscdn.com/api/*/${secretKey}`;
    document.head.appendChild(getScriptTagWindowIPQInit());
    document.head.appendChild(getScriptTagLoadSrc(baseURL));
    document.head.appendChild(getNoscriptTag(baseURL));
};
exports.addDeviceTrackingTags = addDeviceTrackingTags;
// Sync methods with custom configs
const addDeviceTrackingTagsCustom = (secretKey, customDomain, trackerName) => {
    const baseURL = `https://${customDomain}/api/${trackerName}/${secretKey}`;
    document.head.appendChild(getScriptTagWindowIPQInit());
    document.head.appendChild(getScriptTagLoadSrc(baseURL));
    document.head.appendChild(getNoscriptTag(baseURL));
};
exports.addDeviceTrackingTagsCustom = addDeviceTrackingTagsCustom;
// Common sync methods
const getScriptTagLoadSrc = (baseURL) => {
    const srcFile = `${baseURL}/learn.js`;
    const scriptTag = document.createElement("script");
    scriptTag.setAttribute("src", srcFile);
    scriptTag.setAttribute("id", const_1.DEVICE_FINGERPRINT_SCRIPT_ID);
    scriptTag.setAttribute("crossorigin", "anonymous");
    return scriptTag;
};
// Async methods
const addDeviceTrackingTagsAsync = (secretKey) => {
    return new Promise((resolve, reject) => {
        const baseURL = `https://www.ipqscdn.com/api/*/${secretKey}`;
        document.head.appendChild(getScriptTagWindowIPQInit());
        document.head.appendChild(getScriptTagLoadSrcAsync(baseURL, resolve, reject));
        document.head.appendChild(getNoscriptTag(baseURL));
    });
};
exports.addDeviceTrackingTagsAsync = addDeviceTrackingTagsAsync;
// Async methods with custom domain, tracker
const addDeviceTrackingTagsAsyncCustom = (secretKey, customDomain, trackerName) => {
    return new Promise((resolve, reject) => {
        const baseURL = `https://${customDomain}/api/${trackerName}/${secretKey}`;
        document.head.appendChild(getScriptTagWindowIPQInit());
        document.head.appendChild(getScriptTagLoadSrcAsync(baseURL, resolve, reject));
        document.head.appendChild(getNoscriptTag(baseURL));
    });
};
exports.addDeviceTrackingTagsAsyncCustom = addDeviceTrackingTagsAsyncCustom;
// Common async methods
const getScriptTagLoadSrcAsync = (baseURL, resolveCb, rejectCb) => {
    const srcFile = `${baseURL}/learn.js`;
    const scriptTag = document.createElement("script");
    scriptTag.setAttribute("src", srcFile);
    scriptTag.setAttribute("id", const_1.DEVICE_FINGERPRINT_SCRIPT_ID_ASYNC);
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
const getNoscriptTag = (baseURL) => {
    const noscriptTag = document.createElement("noscript");
    noscriptTag.appendChild(generateImageTag(baseURL));
    return noscriptTag;
};
const generateImageTag = (baseURL) => {
    const imageTag = document.createElement("img");
    const srcImage = `${baseURL}/pixel.png`;
    imageTag.setAttribute("src", srcImage);
    return imageTag;
};
// DOM functions
const getScriptTagWindowIPQInit = () => {
    const scriptTag = document.createElement("script");
    scriptTag.setAttribute("type", "text/javascript");
    const inlineScript = document.createTextNode(`
        window.IPQ = {
            Callback: function(){}
        };
    `);
    scriptTag.appendChild(inlineScript);
    return scriptTag;
};
exports.default = exports.addDeviceTrackingTags;
