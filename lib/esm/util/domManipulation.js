import { DEVICE_FINGERPRINT_SCRIPT_ID } from "./const";
//#######################
// Exports
//#######################
export const options = {
    //** Configs */
    pixelEnabled: false,
    //** Setters/getters */
    enablePixel: () => {
        options.pixelEnabled = true;
    },
    disablePixel: () => {
        options.pixelEnabled = true;
    },
    getOptions: () => {
        return { pixelEnabled: options.pixelEnabled };
    },
};
export const addDeviceTrackingTags = (secretKey) => {
    const baseURL = `https://www.ipqscdn.com/api/*/${secretKey}`;
    syncTagHandler(baseURL);
};
export const addDeviceTrackingTagsCustom = (secretKey, customDomain, trackerName) => {
    const baseURL = `https://${customDomain}/api/${trackerName}/${secretKey}`;
    syncTagHandler(baseURL);
};
export const addDeviceTrackingTagsAsync = async (secretKey) => {
    const baseURL = `https://www.ipqscdn.com/api/*/${secretKey}`;
    return await asyncTagHandler(baseURL);
};
export const addDeviceTrackingTagsAsyncCustom = async (secretKey, customDomain, trackerName) => {
    const baseURL = `https://${customDomain}/api/${trackerName}/${secretKey}`;
    return await asyncTagHandler(baseURL);
};
//#######################
// Common functions
//#######################
function syncTagHandler(baseURL) {
    document.head.appendChild(getScriptTagWindowIPQInit());
    document.head.appendChild(getScriptTagLoadSrc(baseURL));
    noscriptHandler(baseURL);
}
async function asyncTagHandler(baseURL) {
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
}
function noscriptHandler(baseURL) {
    if (options.pixelEnabled) {
        const noScriptTag = getNoscriptTag(baseURL);
        document.head.appendChild(noScriptTag);
    }
}
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
