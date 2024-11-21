export const Init = (debug) => {
    if (debug === null || debug === undefined)
        debug = false;
    debugIntro("Init", "NA", debug);
    try {
        window.Startup.Init();
    }
    catch (error) {
        err("Init", JSON.stringify(error), debug);
    }
};
export const AfterResult = (resultCallback, debug) => {
    if (debug === null || debug === undefined)
        debug = false;
    debugIntro("AfterResult", "NA", debug);
    try {
        window.Startup.AfterResult(resultCallback);
    }
    catch (error) {
        err("AfterResult", JSON.stringify(error), debug);
    }
};
export const AfterFailure = (resultCallback, debug) => {
    if (debug === null || debug === undefined)
        debug = false;
    debugIntro("AfterFailure", "NA", debug);
    try {
        window.Startup.AfterFailure(resultCallback);
    }
    catch (error) {
        err("AfterFailure", JSON.stringify(error), debug);
    }
};
export const SetFormFieldPrepend = (prefix, debug) => {
    if (debug === null || debug === undefined)
        debug = false;
    debugIntro("SetFormFieldPrepend", JSON.stringify({ prefix: prefix }), debug);
    try {
        window.Startup.SetFormFieldPrepend(prefix);
    }
    catch (error) {
        err("SetFormFieldPrepend", JSON.stringify(error), debug);
    }
};
export const Trigger = (anchorTag, debug, eventCallback) => {
    if (debug === null || debug === undefined)
        debug = false;
    debugIntro("Trigger", JSON.stringify({ anchorTag: anchorTag }), debug);
    try {
        window.Startup.Trigger(anchorTag, eventCallback);
    }
    catch (error) {
        err("Trigger", JSON.stringify(error), debug);
    }
};
export const Store = (name, id, debug) => {
    if (debug === null || debug === undefined)
        debug = false;
    debugIntro("Store", JSON.stringify({ name: name, id: id }), debug);
    try {
        window.Startup.Store(name, id);
    }
    catch (error) {
        err("Store", JSON.stringify(error), debug);
    }
};
export const Field = (fieldName, element, debug) => {
    if (debug === null || debug === undefined)
        debug = false;
    debugIntro("Field", JSON.stringify({ fieldName: fieldName, element: element }), debug);
    try {
        window.Startup.Field(fieldName, element);
    }
    catch (error) {
        err("Field", JSON.stringify(error), debug);
    }
};
export const Pause = (debug) => {
    if (debug === null || debug === undefined)
        debug = false;
    debugIntro("Pause", "NA", debug);
    try {
        window.Startup.Pause();
    }
    catch (error) {
        err("Pause", JSON.stringify(error), debug);
    }
};
export const Resume = (debug) => {
    if (debug === null || debug === undefined)
        debug = false;
    debugIntro("Resume", "NA", debug);
    try {
        window.Startup.Resume();
    }
    catch (error) {
        err("Resume", JSON.stringify(error), debug);
    }
};
// #################
// Local functions - debugging
// #################
function err(func, error, debug) {
    if (debug) {
        console.log(`ERROR: ${func}`);
        console.log("error: ", error);
    }
}
function debugIntro(func, data, debug) {
    if (debug) {
        console.log(`### CALLING: ${func} ###`);
        console.log("data: ", data);
    }
}
