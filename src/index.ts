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
import {addDeviceTrackingTags, addDeviceTrackingTagsAsync} from "./util/domManipulation";

const initializeScript = (secretKey: string, domain: string) => {
    addDeviceTrackingTags(secretKey, domain);
}

const initializeScriptAsync = (secretKey: string, domain: string) => {
    return addDeviceTrackingTagsAsync(secretKey, domain);
}
export default {
    initializeScript,
    initializeScriptAsync,
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


