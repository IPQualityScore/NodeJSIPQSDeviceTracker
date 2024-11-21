import { CustomWindow } from "./windowInterface";

declare let window: CustomWindow;
export const Init = (debug?: boolean) => {
  if (debug === null || debug === undefined) debug = false;
  debugIntro("Init", "NA", debug);
  try {
    window.Startup.Init();
  } catch (error) {
    err("Init", JSON.stringify(error), debug);
  }
};

export const AfterResult = (resultCallback: () => void, debug?: boolean) => {
  if (debug === null || debug === undefined) debug = false;
  debugIntro("AfterResult", "NA", debug);
  try {
    window.Startup.AfterResult(resultCallback);
  } catch (error) {
    err("AfterResult", JSON.stringify(error), debug);
  }
};

export const AfterFailure = (resultCallback: () => void, debug?: boolean) => {
  if (debug === null || debug === undefined) debug = false;
  debugIntro("AfterFailure", "NA", debug);
  try {
    window.Startup.AfterFailure(resultCallback);
  } catch (error) {
    err("AfterFailure", JSON.stringify(error), debug);
  }
};

export const SetFormFieldPrepend = (prefix: string, debug?: boolean) => {
  if (debug === null || debug === undefined) debug = false;
  debugIntro("SetFormFieldPrepend", JSON.stringify({ prefix: prefix }), debug);
  try {
    window.Startup.SetFormFieldPrepend(prefix);
  } catch (error) {
    err("SetFormFieldPrepend", JSON.stringify(error), debug);
  }
};

export const Trigger = (
  anchorTag: string,
  debug?: boolean,
  eventCallback?: (event: object) => void | undefined
) => {
  if (debug === null || debug === undefined) debug = false;
  debugIntro("Trigger", JSON.stringify({ anchorTag: anchorTag }), debug);
  try {
    window.Startup.Trigger(anchorTag, eventCallback);
  } catch (error) {
    err("Trigger", JSON.stringify(error), debug);
  }
};

export const Store = (name: string, id: number, debug?: boolean) => {
  if (debug === null || debug === undefined) debug = false;
  debugIntro("Store", JSON.stringify({ name: name, id: id }), debug);
  try {
    window.Startup.Store(name, id);
  } catch (error) {
    err("Store", JSON.stringify(error), debug);
  }
};

export const Field = (fieldName: string, element: string, debug?: boolean) => {
  if (debug === null || debug === undefined) debug = false;
  debugIntro(
    "Field",
    JSON.stringify({ fieldName: fieldName, element: element }),
    debug
  );
  try {
    window.Startup.Field(fieldName, element);
  } catch (error) {
    err("Field", JSON.stringify(error), debug);
  }
};

export const Pause = (debug?: boolean) => {
  if (debug === null || debug === undefined) debug = false;
  debugIntro("Pause", "NA", debug);
  try {
    window.Startup.Pause();
  } catch (error) {
    err("Pause", JSON.stringify(error), debug);
  }
};

export const Resume = (debug?: boolean) => {
  if (debug === null || debug === undefined) debug = false;
  debugIntro("Resume", "NA", debug);
  try {
    window.Startup.Resume();
  } catch (error) {
    err("Resume", JSON.stringify(error), debug);
  }
};

export const FetchExecutionLogs = (debug?: boolean) => {
  if (debug === null || debug === undefined) debug = false;
  debugIntro("FetchExecutionLogs", "NA", debug);
  try {
    window.Startup.Resume();
  } catch (error) {
    err("FetchExecutionLogs", JSON.stringify(error), debug);
  }
};

// #################
// Local functions - debugging
// #################

function err(func: string, error: string, debug: boolean) {
  if (debug) {
    console.log(`ERROR: ${func}`);
    console.log("error: ", error);
  }
}

function debugIntro(func: string, data: string, debug: boolean) {
  if (debug) {
    console.log(`### CALLING: ${func} ###`);
    console.log("data: ", data);
  }
}
