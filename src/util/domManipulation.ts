import {
  DEVICE_FINGERPRINT_SCRIPT_ID,
  DEVICE_FINGERPRINT_SCRIPT_ID_ASYNC,
} from "./const";

export const addDeviceTrackingTags = (
  secretKey: string,
  tracker = "*",
  domain = "www.ipqualityscore.com",
) => {
  document.head.appendChild(getScriptTagWindowIPQInit());
  document.head.appendChild(getScriptTagLoadSrc(secretKey, tracker, domain));
  document.head.appendChild(getNoscriptTag(secretKey, tracker, domain));
};

export const addDeviceTrackingTagsAsync = (
  secretKey: string,
  tracker = "*",
  domain = "www.ipqualityscore.com",
) => {
  return new Promise<void>((resolve, reject) => {
    document.head.appendChild(getScriptTagWindowIPQInit());
    document.head.appendChild(
      getScriptTagLoadSrcAsync(secretKey, tracker, domain, resolve, reject)
    );
    document.head.appendChild(getNoscriptTag(secretKey, tracker, domain));
  });
};

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

const getScriptTagLoadSrc = (
  secretKey: string,
  tracker: string,
  domain: string
) => {
  const srcFile = `https://${domain}/api/${tracker}/${secretKey}/learn.js`;
  const scriptTag: Element = document.createElement("script");
  scriptTag.setAttribute("src", srcFile);
  scriptTag.setAttribute("id", DEVICE_FINGERPRINT_SCRIPT_ID);
  scriptTag.setAttribute("crossorigin", "anonymous");
  return scriptTag;
};

const getScriptTagLoadSrcAsync = (
  secretKey: string,
  tracker: string,
  domain: string,
  resolveCb: () => void,
  rejectCb: () => void
) => {
  const srcFile = `https://${domain}/api/${tracker}/${secretKey}/learn.js`;
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

const getNoscriptTag = (secretKey: string, tracker: string, domain: string) => {
  const noscriptTag: Element = document.createElement("noscript");
  noscriptTag.appendChild(generateImageTag(secretKey, tracker, domain));
  return noscriptTag;
};

const generateImageTag = (secretKey: string, tracker: string, domain: string) => {
  const imageTag: Element = document.createElement("img");
  const srcImage = `https://${domain}/api/${tracker}/${secretKey}/pixel.png`;
  imageTag.setAttribute("src", srcImage);
  return imageTag;
};

export default addDeviceTrackingTags;
