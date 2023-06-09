import {DEVICE_FINGERPRINT_SCRIPT_ID, DEVICE_FINGERPRINT_SCRIPT_ID_ASYNC} from "./const";

export const addDeviceTrackingTags = (secretKey: string) => {
    document.head.appendChild(getScriptTagWindowIPQInit());
    document.head.appendChild(getScriptTagLoadSrc(secretKey));
    document.head.appendChild(getNoscriptTag(secretKey));
}

export const addDeviceTrackingTagsAsync = (secretKey: string) => {
    return new Promise<void>((resolve, reject) => {
        document.head.appendChild(getScriptTagWindowIPQInit());
        document.head.appendChild(getScriptTagLoadSrcAsync(secretKey, resolve, reject));
        document.head.appendChild(getNoscriptTag(secretKey));
    });
}

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

const getScriptTagLoadSrc = (secretKey: string) => {
    const srcFile = `https://www.ipqualityscore.com/api/*/${secretKey}/learn.js`;
    const scriptTag: Element = document.createElement("script");
    scriptTag.setAttribute('src', srcFile);
    scriptTag.setAttribute('id', DEVICE_FINGERPRINT_SCRIPT_ID);
    scriptTag.setAttribute('crossorigin', 'anonymous');
    return scriptTag;
}

const getScriptTagLoadSrcAsync = (secretKey: string, resolveCb: () => void, rejectCb: () => void) => {
    const srcFile = `https://www.ipqualityscore.com/api/*/${secretKey}/learn.js`;
    const scriptTag: HTMLScriptElement = document.createElement("script");
    scriptTag.setAttribute('src', srcFile);
    scriptTag.setAttribute('id', DEVICE_FINGERPRINT_SCRIPT_ID_ASYNC);
    scriptTag.setAttribute('crossorigin', 'anonymous');
    // For async
    scriptTag.onload = function() {
        resolveCb();
    };
    scriptTag.onerror = function() {
        rejectCb();
    };
    return scriptTag;
};

const getNoscriptTag = (secretKey: string) => {
    const noscriptTag: Element = document.createElement("noscript");
    noscriptTag.appendChild(generateImageTag(secretKey));
    return noscriptTag;
};

const generateImageTag = (secretKey: string) => {
    const imageTag: Element = document.createElement("img");
    const srcImage = `https://www.ipqscdn.com/api/*/${secretKey}/pixel.png`;
    imageTag.setAttribute('src', srcImage);
    return imageTag;
};

export default addDeviceTrackingTags;