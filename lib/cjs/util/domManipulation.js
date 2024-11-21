"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDeviceTrackingTagsAsyncCustom = exports.addDeviceTrackingTagsAsync = exports.addDeviceTrackingTagsCustom = exports.addDeviceTrackingTags = void 0;
const const_1 = require("./const");
// Sync methods
const addDeviceTrackingTags = (secretKey, debug) => {
    try {
        const baseURL = `https://www.ipqscdn.com/api/*/${secretKey}`;
        if (debug) {
            console.log("### CALLING: addDeviceTrackingTags ###");
            console.log("secretKey: ", secretKey);
            console.log("baseURL: ", baseURL);
        }
        document.head.appendChild(getScriptTagWindowIPQInit(debug));
        document.head.appendChild(getScriptTagLoadSrc(baseURL, debug));
        document.head.appendChild(getNoscriptTag(baseURL, debug));
    }
    catch (error) {
        if (debug) {
            console.log(error);
            console.log("ERROR: Error appending learn.js script to document (domManipulation.ts - addDeviceTrackingTags)");
        }
    }
};
exports.addDeviceTrackingTags = addDeviceTrackingTags;
// Sync methods with custom configs
const addDeviceTrackingTagsCustom = (secretKey, customDomain, trackerName, debug) => {
    try {
        const baseURL = `https://${customDomain}/api/${trackerName}/${secretKey}`;
        if (debug) {
            console.log("### CALLING: addDeviceTrackingTagsCustom ###");
            console.log("secretKey: ", secretKey);
            console.log("customDomain: ", customDomain);
            console.log("trackerName: ", trackerName);
            console.log("baseURL: ", baseURL);
        }
        document.head.appendChild(getScriptTagWindowIPQInit(debug));
        document.head.appendChild(getScriptTagLoadSrc(baseURL, debug));
        document.head.appendChild(getNoscriptTag(baseURL, debug));
    }
    catch (error) {
        if (debug) {
            console.log(error);
            console.log("ERROR: Error appending learn.js script to document (domManipulation.ts - addDeviceTrackingTagsCustom)");
        }
    }
};
exports.addDeviceTrackingTagsCustom = addDeviceTrackingTagsCustom;
// Common sync methods
const getScriptTagLoadSrc = (baseURL, debug) => {
    if (debug) {
        console.log("### CALLING: getScriptTagLoadSrc ###");
        console.log("baseURL: ", baseURL);
    }
    const scriptTag = document.createElement("script");
    try {
        const srcFile = `${baseURL}/learn.js`;
        if (debug) {
            console.log("srcFile: ", srcFile);
        }
        scriptTag.setAttribute("src", srcFile);
        scriptTag.setAttribute("id", const_1.DEVICE_FINGERPRINT_SCRIPT_ID);
        scriptTag.setAttribute("crossorigin", "anonymous");
        if (debug) {
            console.log("scriptTag: ", scriptTag);
        }
        return scriptTag;
    }
    catch (error) {
        if (debug) {
            console.log(error);
            console.log("ERROR: Error appending learn.js script to document (domManipulation.ts - getScriptTagLoadSrc)");
        }
        return scriptTag;
    }
};
// Async methods
const addDeviceTrackingTagsAsync = (secretKey, debug) => {
    if (debug) {
        console.log("### CALLING: addDeviceTrackingTagsAsync ###");
        console.log("baseURL: ", secretKey);
    }
    try {
        return new Promise((resolve, reject) => {
            const baseURL = `https://www.ipqscdn.com/api/*/${secretKey}`;
            if (debug) {
                console.log("baseURL: ", baseURL);
            }
            document.head.appendChild(getScriptTagWindowIPQInit(debug));
            document.head.appendChild(getScriptTagLoadSrcAsync(baseURL, resolve, reject, debug));
            document.head.appendChild(getNoscriptTag(baseURL, debug));
        });
    }
    catch (error) {
        if (debug) {
            console.log(error);
            console.log("ERROR: Error appending learn.js script to document (domManipulation.ts - addDeviceTrackingTagsAsync)");
        }
    }
};
exports.addDeviceTrackingTagsAsync = addDeviceTrackingTagsAsync;
// Async methods with custom domain, tracker
const addDeviceTrackingTagsAsyncCustom = (secretKey, customDomain, trackerName, debug) => {
    if (debug) {
        console.log("### CALLING: addDeviceTrackingTagsAsyncCustom ###");
        console.log("secretKey: ", secretKey);
        console.log("customDomain: ", customDomain);
        console.log("trackerName: ", trackerName);
    }
    try {
        return new Promise((resolve, reject) => {
            const baseURL = `https://${customDomain}/api/${trackerName}/${secretKey}`;
            if (debug) {
                console.log("baseURL: ", baseURL);
            }
            document.head.appendChild(getScriptTagWindowIPQInit(debug));
            document.head.appendChild(getScriptTagLoadSrcAsync(baseURL, resolve, reject, debug));
            document.head.appendChild(getNoscriptTag(baseURL, debug));
        });
    }
    catch (error) {
        if (debug) {
            console.log(error);
            console.log("ERROR: Error appending learn.js script to document (domManipulation.ts - addDeviceTrackingTagsAsyncCustom)");
        }
    }
};
exports.addDeviceTrackingTagsAsyncCustom = addDeviceTrackingTagsAsyncCustom;
// Common async methods
const getScriptTagLoadSrcAsync = (baseURL, resolveCb, rejectCb, debug) => {
    if (debug) {
        console.log("### CALLING: getScriptTagLoadSrcAsync ###");
        console.log("baseURL: ", baseURL);
    }
    const scriptTag = document.createElement("script");
    try {
        const srcFile = `${baseURL}/learn.js`;
        if (debug) {
            console.log("srcFile: ", srcFile);
        }
        scriptTag.setAttribute("src", srcFile);
        scriptTag.setAttribute("id", const_1.DEVICE_FINGERPRINT_SCRIPT_ID_ASYNC);
        scriptTag.setAttribute("crossorigin", "anonymous");
        // For async
        scriptTag.onload = function () {
            resolveCb();
        };
        scriptTag.onerror = function (event) {
            if (debug)
                console.log("event: ", event);
            rejectCb();
        };
        if (debug) {
            console.log("scriptTag: ", scriptTag);
        }
        return scriptTag;
    }
    catch (error) {
        if (debug) {
            console.log(error);
            console.log("ERROR: Error appending learn.js script to document (domManipulation.ts - getScriptTagLoadSrcAsync)");
        }
        return scriptTag;
    }
};
// Pixel fallback
const getNoscriptTag = (baseURL, debug) => {
    if (debug) {
        console.log("### CALLING: getNoscriptTag ###");
        console.log("baseURL: ", baseURL);
    }
    const noscriptTag = document.createElement("noscript");
    try {
        noscriptTag.appendChild(generateImageTag(baseURL, debug));
        if (debug) {
            console.log("noscriptTag: ", noscriptTag);
        }
        return noscriptTag;
    }
    catch (error) {
        if (debug) {
            console.log(error);
            console.log("ERROR: Error appending device fingerprinter pixel (domManipulation.ts - getNoscriptTag)");
        }
        return noscriptTag;
    }
};
const generateImageTag = (baseURL, debug) => {
    if (debug) {
        console.log("### CALLING: generateImageTag ###");
        console.log("baseURL: ", baseURL);
    }
    const imageTag = document.createElement("img");
    try {
        const srcImage = `${baseURL}/pixel.png`;
        if (debug) {
            console.log("srcImage: ", srcImage);
        }
        imageTag.setAttribute("src", srcImage);
        if (debug) {
            console.log("imageTag: ", imageTag);
        }
        return imageTag;
    }
    catch (error) {
        if (debug) {
            console.log(error);
            console.log("ERROR: Error appending device fingerprinter pixel (domManipulation.ts - generateImageTag)");
        }
        return imageTag;
    }
};
// DOM functions
const getScriptTagWindowIPQInit = (debug) => {
    if (debug) {
        console.log("### CALLING: generateImageTag ###");
    }
    const scriptTag = document.createElement("script");
    try {
        scriptTag.setAttribute("type", "text/javascript");
        const inlineScript = document.createTextNode(`
        window.IPQ = {
            Callback: function(){}
        };
    `);
        scriptTag.appendChild(inlineScript);
        if (debug) {
            console.log("scriptTag: ", scriptTag);
        }
        return scriptTag;
    }
    catch (error) {
        if (debug) {
            console.log(error);
            console.log("ERROR: Error appending script tag (domManipulation.ts - getScriptTagWindowIPQInit)");
        }
        return scriptTag;
    }
};
exports.default = exports.addDeviceTrackingTags;
