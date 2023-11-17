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

const initializeScript = (secretKey: string, tracker: string) => {
    addDeviceTrackingTags(secretKey, tracker);
}

const initializeScriptAsync = (secretKey: string, tracker: string) => {
    return addDeviceTrackingTagsAsync(secretKey, tracker);
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


