/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable:component-selector */
import { Component } from '@angular/core';
import { EyeType } from '../../../options';
import { randomId } from '../../../helper/randomid';
import { urlfix } from '../../../helper/urlfix';
export class CustomAvatarEyesSquintComponent {
    constructor() {
        this.option = EyeType.Squint;
        this.mask1 = randomId('kip-mask');
        this.mask2 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
        this.path2 = randomId('kip-path');
    }
    /**
     * @param {?} path
     * @return {?}
     */
    urlFix(path) {
        return urlfix(path);
    }
}
CustomAvatarEyesSquintComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-eyes-squint]',
                template: "<svg:g id='Eyes/Squint-\uD83D\uDE0A' transform='translate(0.000000, 8.000000)'>\r\n  <defs>\r\n    <path\r\n      d='M14,14.0481187 C23.6099827,14.0481187 28,18.4994466 28,11.5617716 C28,4.62409673 21.7319865,0 14,0 C6.2680135,0 0,4.62409673 0,11.5617716 C0,18.4994466 4.39001726,14.0481187 14,14.0481187 Z'\r\n      [attr.id]=\"path1\" />\r\n    <path\r\n      d='M14,14.0481187 C23.6099827,14.0481187 28,18.4994466 28,11.5617716 C28,4.62409673 21.7319865,0 14,0 C6.2680135,0 0,4.62409673 0,11.5617716 C0,18.4994466 4.39001726,14.0481187 14,14.0481187 Z'\r\n      [attr.id]=\"path2\" />\r\n  </defs>\r\n  <g id='Eye' transform='translate(16.000000, 13.000000)'>\r\n    <mask [attr.id]=\"mask1\" fill='white'>\r\n      <use [attr.xlink:href]=\"'#' + path1\" />\r\n    </mask>\r\n    <use id='The-white-stuff' fill='#FFFFFF' [attr.xlink:href]=\"'#' + path1\" />\r\n    <circle fill-opacity='0.699999988' fill='#000000' [attr.mask]=\"urlFix(mask1)\" cx='14' cy='10' r='6' />\r\n  </g>\r\n  <g id='Eye' transform='translate(68.000000, 13.000000)'>\r\n    <mask [attr.id]=\"mask2\" fill='white'>\r\n      <use [attr.xlink:href]=\"'#' + path2\" />\r\n    </mask>\r\n    <use id='Eyeball-Mask' fill='#FFFFFF' [attr.xlink:href]=\"'#' + path2\" />\r\n    <circle fill-opacity='0.699999988' fill='#000000' [attr.mask]=\"urlFix(mask2)\" cx='14' cy='10' r='6' />\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];
if (false) {
    /** @type {?} */
    CustomAvatarEyesSquintComponent.prototype.option;
    /** @type {?} */
    CustomAvatarEyesSquintComponent.prototype.mask1;
    /** @type {?} */
    CustomAvatarEyesSquintComponent.prototype.mask2;
    /** @type {?} */
    CustomAvatarEyesSquintComponent.prototype.path1;
    /** @type {?} */
    CustomAvatarEyesSquintComponent.prototype.path2;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3F1aW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWF2YXRhYWFycy1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2N1c3RvbS1hdmF0YXIvYXZhdGFyL2ZhY2UvZXllcy9zcXVpbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQVUsT0FBTyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQU9oRCxNQUFNLE9BQU8sK0JBQStCO0lBTDVDO1FBTUUsV0FBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFFeEIsVUFBSyxHQUFXLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNyQyxVQUFLLEdBQVcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JDLFVBQUssR0FBVyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckMsVUFBSyxHQUFXLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUt2QyxDQUFDOzs7OztJQUhDLE1BQU0sQ0FBQyxJQUFZO1FBQ2pCLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RCLENBQUM7OztZQWZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUNBQWlDO2dCQUMzQyw2MkNBQXNDO2FBQ3ZDOzs7O0lBR0MsaURBQXdCOztJQUV4QixnREFBcUM7O0lBQ3JDLGdEQUFxQzs7SUFDckMsZ0RBQXFDOztJQUNyQyxnREFBcUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTpjb21wb25lbnQtc2VsZWN0b3IgKi9cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPcHRpb24sIEV5ZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9vcHRpb25zJztcclxuaW1wb3J0IHsgcmFuZG9tSWQgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXIvcmFuZG9taWQnO1xyXG5pbXBvcnQgeyB1cmxmaXggfSBmcm9tICcuLi8uLi8uLi9oZWxwZXIvdXJsZml4JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnW2tpcC1jdXN0b20tYXZhdGFyLWV5ZXMtc3F1aW50XScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NxdWludC5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ3VzdG9tQXZhdGFyRXllc1NxdWludENvbXBvbmVudCBpbXBsZW1lbnRzIE9wdGlvbjxFeWVUeXBlPiB7XHJcbiAgb3B0aW9uID0gRXllVHlwZS5TcXVpbnQ7XHJcblxyXG4gIG1hc2sxOiBzdHJpbmcgPSByYW5kb21JZCgna2lwLW1hc2snKTtcclxuICBtYXNrMjogc3RyaW5nID0gcmFuZG9tSWQoJ2tpcC1tYXNrJyk7XHJcbiAgcGF0aDE6IHN0cmluZyA9IHJhbmRvbUlkKCdraXAtcGF0aCcpO1xyXG4gIHBhdGgyOiBzdHJpbmcgPSByYW5kb21JZCgna2lwLXBhdGgnKTtcclxuXHJcbiAgdXJsRml4KHBhdGg6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHVybGZpeChwYXRoKTtcclxuICB9XHJcbn1cclxuIl19