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
import { addDeviceTrackingTags, addDeviceTrackingTagsAsync } from "./util/domManipulation";

const initializeScript = (secretKey: string, tracker: string, domain: string) => {
    addDeviceTrackingTags(secretKey, tracker, domain);
}

const initializeScriptAsync = (secretKey: string, tracker: string, domain: string) => {
    return addDeviceTrackingTagsAsync(secretKey, tracker, domain);
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


