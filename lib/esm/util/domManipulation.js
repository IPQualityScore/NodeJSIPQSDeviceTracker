import { DEVICE_FINGERPRINT_SCRIPT_ID, } from "./const";
//#######################
// Exports
//#######################
export const addDeviceTrackingTags = (secretKey) => {
    const baseURL = `https://www.ipqscdn.com/api/*/${secretKey}`;
    document.head.appendChild(getScriptTagWindowIPQInit());
    document.head.appendChild(getScriptTagLoadSrc(baseURL));
    document.head.appendChild(getNoscriptTag(baseURL));
};
export const addDeviceTrackingTagsCustom = (secretKey, customDomain, trackerName) => {
    const baseURL = `https://${customDomain}/api/${trackerName}/${secretKey}`;
    document.head.appendChild(getScriptTagWindowIPQInit());
    document.head.appendChild(getScriptTagLoadSrc(baseURL));
    document.head.appendChild(getNoscriptTag(baseURL));
};
export const addDeviceTrackingTagsAsync = (secretKey) => {
    return new Promise((resolve, reject) => {
        try {
            const baseURL = `https://www.ipqscdn.com/api/*/${secretKey}`;
            const learnJsScriptTag = getScriptTagLoadSrc(baseURL);
            const initScriptTag = getScriptTagWindowIPQInit();
            const noScriptTag = getNoscriptTag(baseURL);
            document.head.appendChild(initScriptTag);
            document.head.appendChild(learnJsScriptTag);
            document.head.appendChild(noScriptTag);
            learnJsScriptTag.addEventListener("load", () => {
                resolve();
            });
        }
        catch (error) {
            console.log(error);
            reject();
        }
    });
};
export const addDeviceTrackingTagsAsyncCustom = (secretKey, customDomain, trackerName) => {
    return new Promise((resolve, reject) => {
        try {
            const baseURL = `https://${customDomain}/api/${trackerName}/${secretKey}`;
            const learnJsScriptTag = getScriptTagLoadSrc(baseURL);
            const initScriptTag = getScriptTagWindowIPQInit();
            const noScriptTag = getNoscriptTag(baseURL);
            document.head.appendChild(initScriptTag);
            document.head.appendChild(learnJsScriptTag);
            document.head.appendChild(noScriptTag);
            learnJsScriptTag.addEventListener("load", () => {
                resolve();
            });
        }
        catch (error) {
            console.log(error);
            reject();
        }
    });
};
//#######################
// Common functions
//#######################
const getScriptTagLoadSrc = (baseURL) => {
    const srcFile = `${baseURL}/learn.js`;
    const scriptTag = document.createElement("script");
    scriptTag.setAttribute("src", srcFile);
    scriptTag.setAttribute("id", DEVICE_FINGERPRINT_SCRIPT_ID);
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
export default addDeviceTrackingTags;
