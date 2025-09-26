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
exports.addDeviceTrackingTagsAsyncCustom = exports.addDeviceTrackingTagsAsync = exports.addDeviceTrackingTagsCustom = exports.addDeviceTrackingTags = exports.options = void 0;
const const_1 = require("./const");
//#######################
// Exports
//#######################
exports.options = {
    //** Configs */
    pixelEnabled: false,
    //** Setters/getters */
    enablePixel: () => {
        exports.options.pixelEnabled = true;
    },
    disablePixel: () => {
        exports.options.pixelEnabled = true;
    },
    getOptions: () => {
        return { pixelEnabled: exports.options.pixelEnabled };
    },
};
const addDeviceTrackingTags = (secretKey) => {
    const baseURL = `https://www.ipqscdn.com/api/*/${secretKey}`;
    syncTagHandler(baseURL);
};
exports.addDeviceTrackingTags = addDeviceTrackingTags;
const addDeviceTrackingTagsCustom = (secretKey, customDomain, trackerName) => {
    const baseURL = `https://${customDomain}/api/${trackerName}/${secretKey}`;
    syncTagHandler(baseURL);
};
exports.addDeviceTrackingTagsCustom = addDeviceTrackingTagsCustom;
const addDeviceTrackingTagsAsync = (secretKey) => __awaiter(void 0, void 0, void 0, function* () {
    const baseURL = `https://www.ipqscdn.com/api/*/${secretKey}`;
    return yield asyncTagHandler(baseURL);
});
exports.addDeviceTrackingTagsAsync = addDeviceTrackingTagsAsync;
const addDeviceTrackingTagsAsyncCustom = (secretKey, customDomain, trackerName) => __awaiter(void 0, void 0, void 0, function* () {
    const baseURL = `https://${customDomain}/api/${trackerName}/${secretKey}`;
    return yield asyncTagHandler(baseURL);
});
exports.addDeviceTrackingTagsAsyncCustom = addDeviceTrackingTagsAsyncCustom;
//#######################
// Common functions
//#######################
function syncTagHandler(baseURL) {
    document.head.appendChild(getScriptTagWindowIPQInit());
    document.head.appendChild(getScriptTagLoadSrc(baseURL));
    noscriptHandler(baseURL);
}
function asyncTagHandler(baseURL) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            try {
                document.head.appendChild(getScriptTagWindowIPQInit());
                const learnJsScriptTag = getScriptTagLoadSrc(baseURL);
                document.head.appendChild(learnJsScriptTag);
                learnJsScriptTag.addEventListener("load", () => {
                    resolve();
                });
                noscriptHandler(baseURL);
            }
            catch (error) {
                console.log(error);
                reject();
            }
        });
    });
}
function noscriptHandler(baseURL) {
    if (exports.options.pixelEnabled) {
        const noScriptTag = getNoscriptTag(baseURL);
        document.head.appendChild(noScriptTag);
    }
}
const getScriptTagLoadSrc = (baseURL) => {
    const srcFile = `${baseURL}/learn.js`;
    const scriptTag = document.createElement("script");
    scriptTag.setAttribute("src", srcFile);
    scriptTag.setAttribute("id", const_1.DEVICE_FINGERPRINT_SCRIPT_ID);
    scriptTag.setAttribute("crossorigin", "anonymous");
    return scriptTag;
};
const getScriptTagWindowIPQInit = () => {
    const scriptTag = document.createElement("script");
    scriptTag.setAttribute("id", "test");
    scriptTag.setAttribute("type", "text/javascript");
    const inlineScript = document.createTextNode(`
        window.IPQ = {
            Callback: function(){}
        };
    `);
    scriptTag.appendChild(inlineScript);
    return scriptTag;
};
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
exports.default = exports.addDeviceTrackingTags;
