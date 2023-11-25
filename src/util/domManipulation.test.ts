import module, {addDeviceTrackingTags, addDeviceTrackingTagsAsync} from "./domManipulation";
import { fireEvent } from '@testing-library/react';
import {DEVICE_FINGERPRINT_SCRIPT_ID_ASYNC} from "./const";

describe('domManipulation util', () => {
    afterEach(() => {
        document.getElementsByTagName('html')[0].innerHTML = '';
    });
    describe('addDeviceTrackingTags()', () => {
        it('should add all of the device tracking tags on the page', () => {
            const secretKey = `testKey`;
            addDeviceTrackingTags(secretKey);
            const allHtml: string = document.head.parentElement.innerHTML;
            expect(allHtml).toContain('script');
            expect(allHtml).toContain('noscript');
            expect(allHtml).toContain('crossorigin="anonymous"');
            expect(allHtml).toContain(secretKey);
            expect(allHtml).toContain('img');
            expect(global.window["IPQ"].Callback).toBeTruthy();
        })
    });
    describe('addDeviceTrackingTagsAsync()', () => {
        it('should add all of the device tracking tags on the page asynchronously (with load)', (done) => {
            const secretKey = `testKey`;
            addDeviceTrackingTagsAsync(secretKey).then(() => {
                const allHtml: string = document.head.parentElement.innerHTML;
                expect(allHtml).toContain('script');
                expect(allHtml).toContain('noscript');
                expect(allHtml).toContain('crossorigin="anonymous"');
                expect(allHtml).toContain(secretKey);
                expect(allHtml).toContain('img');
                expect(global.window["IPQ"].Callback).toBeTruthy();
                done();
            }).catch(() => {
                // fail('We rejected the promise even though there was a successful load of the external script');
            });
            const scriptTag = document.getElementById(DEVICE_FINGERPRINT_SCRIPT_ID_ASYNC);
            fireEvent.load(scriptTag);
        });
        it('should add all of the device tracking tags on the page asynchronously (with error)', (done) => {
            const secretKey = `testKey`;
            addDeviceTrackingTagsAsync(secretKey).then(() => {
                fail('We resolved the promise even though there was a loading error with the external script');
            }).catch(() => {
                const allHtml: string = document.head.parentElement.innerHTML;
                expect(allHtml).toContain('script');
                expect(allHtml).toContain('noscript');
                expect(allHtml).toContain('crossorigin="anonymous"');
                expect(allHtml).toContain(secretKey);
                expect(allHtml).toContain('img');
                expect(global.window["IPQ"].Callback).toBeTruthy();
                done();
            });
            const scriptTag = document.getElementById(DEVICE_FINGERPRINT_SCRIPT_ID_ASYNC);
            fireEvent.error(scriptTag);
        });
    });
    describe('getScriptTagWindowIPQInit()', () => {
        it('should add a script tag with the IPQ Init object', () => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const fn = module.__get__('getScriptTagWindowIPQInit');
            const scriptTag: Element = fn();
            const scriptTagHtml: string = scriptTag.outerHTML;
            expect(scriptTagHtml).toContain('script');
            expect(scriptTagHtml).toContain('window.IPQ');
        })
    });
    describe('getScriptTagLoadSrc()', () => {
        it('should add the script tag loader synchronously', () => {
            const secretKey = `testKey`;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const fn = module.__get__('getScriptTagLoadSrc');
            const scriptTag: Element = fn(secretKey);
            const scriptTagHtml: string = scriptTag.outerHTML;
            expect(scriptTagHtml).toContain('script');
            expect(scriptTagHtml).toContain('crossorigin="anonymous"');
            expect(scriptTagHtml).toContain(secretKey);
        })
    });
    describe('getScriptTagLoadSrcAsync()', () => {
        it('should add the script tag loader asynchronously (onload success)', () => {
            const secretKey = `testKey`;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const fn = module.__get__('getScriptTagLoadSrcAsync');
            const callback = jest.fn(() => true);
            const scriptTag: Element = fn(secretKey, "", "", callback);
            const scriptTagHtml: string = scriptTag.outerHTML;
            fireEvent.load(scriptTag);
            expect(callback).toHaveBeenCalled();  // Success!
            expect(scriptTagHtml).toContain('script');
            expect(scriptTagHtml).toContain('crossorigin="anonymous"');
            expect(scriptTagHtml).toContain(secretKey);
        })
    });
    describe('getScriptTagLoadSrcAsync()', () => {
        it('should add the script tag loader asynchronously (onload error)', () => {
            const secretKey = `testKey`;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const fn = module.__get__('getScriptTagLoadSrcAsync');
            const callback = jest.fn(() => true);
            const scriptTag: Element = fn(secretKey, "", "", null, callback);
            const scriptTagHtml: string = scriptTag.outerHTML;
            fireEvent.error(scriptTag);
            expect(callback).toHaveBeenCalled();  // Success!
            expect(scriptTagHtml).toContain('script');
            expect(scriptTagHtml).toContain('crossorigin="anonymous"');
            expect(scriptTagHtml).toContain(secretKey);
        })
    });
    describe('getNoscriptTag()', () => {
        it('should add a noscript tag with the image child', () => {
            const secretKey = `testKey`;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const fn = module.__get__('getNoscriptTag');
            const noscriptTag: Element = fn(secretKey);
            const noscriptTagHtml: string = noscriptTag.outerHTML;
            expect(noscriptTagHtml).toContain('noscript');
            expect(noscriptTagHtml).toContain('img');
            expect(noscriptTagHtml).toContain(secretKey);
        })
    });
    describe('generateImageTag()', () => {
        it('should generate an image tag with valid contents', () => {
            const secretKey = `testKey`;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const fn = module.__get__('generateImageTag');
            const imageTag: Element = fn(secretKey);
            const imageTagHtml: string = imageTag.outerHTML;
            expect(imageTagHtml).toContain('img');
            expect(imageTagHtml).toContain(secretKey);
        })
    });
});