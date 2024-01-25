"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resume = exports.Pause = exports.Field = exports.Store = exports.Trigger = exports.SetFormFieldPrepend = exports.AfterFailure = exports.AfterResult = exports.Init = void 0;
const Init = () => {
    window.Startup.Init();
};
exports.Init = Init;
const AfterResult = (resultCallback) => {
    window.Startup.AfterResult(resultCallback);
};
exports.AfterResult = AfterResult;
const AfterFailure = (resultCallback) => {
    window.Startup.AfterFailure(resultCallback);
};
exports.AfterFailure = AfterFailure;
const SetFormFieldPrepend = (prefix) => {
    window.Startup.SetFormFieldPrepend(prefix);
};
exports.SetFormFieldPrepend = SetFormFieldPrepend;
const Trigger = (anchorTag, eventCallback) => {
    window.Startup.Trigger(anchorTag, eventCallback);
};
exports.Trigger = Trigger;
const Store = (name, id) => {
    window.Startup.Store(name, id);
};
exports.Store = Store;
const Field = (fieldName, element) => {
    window.Startup.Field(fieldName, element);
};
exports.Field = Field;
const Pause = () => {
    window.Startup.Pause();
};
exports.Pause = Pause;
const Resume = () => {
    window.Startup.Resume();
};
exports.Resume = Resume;
