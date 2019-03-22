/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable:component-selector */
import { Component } from '@angular/core';
import { TopType } from '../../options';
import { randomId } from '../../helper/randomid';
import { CustomAvatarTopBaseComponent } from './top-base.component';
export class CustomAvatarTopWinterHat1Component extends CustomAvatarTopBaseComponent {
    constructor() {
        super();
        this.option = TopType.WinterHat1;
        this.mask1 = randomId('kip-mask');
        this.mask2 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
        this.path2 = randomId('kip-path');
        this.path3 = randomId('kip-path');
        this.filter1 = randomId('kip-filter');
    }
}
CustomAvatarTopWinterHat1Component.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-top-winter-hat1]',
                template: "<svg:g id=\"Top\">\r\n  <defs>\r\n    <rect [attr.id]=\"path3\" x=\"0\" y=\"0\" width=\"264\" height=\"280\" />\r\n    <path\r\n      d=\"M120,54 L20,54 L20,155 C20,160.522847 15.5228475,165 10,165 C4.4771525,165 6.76353751e-16,160.522847 0,155 L0,54 L0,44 C-2.9759565e-15,19.699471 19.699471,4.46393476e-15 44,0 L96,0 C120.300529,-4.46393476e-15 140,19.699471 140,44 L140,54 L140,155 C140,160.522847 135.522847,165 130,165 C124.477153,165 120,160.522847 120,155 L120,54 Z\"\r\n      [attr.id]=\"path1\" />\r\n    <filter x=\"-0.8%\" y=\"-2.8%\" width=\"101.7%\" height=\"111.1%\" filterUnits=\"objectBoundingBox\" [attr.id]=\"filter1\">\r\n      <feOffset dx=\"0\" dy=\"2\" in=\"SourceAlpha\" result=\"shadowOffsetOuter1\" />\r\n      <feColorMatrix values=\"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0\" type=\"matrix\" in=\"shadowOffsetOuter1\" />\r\n    </filter>\r\n    <rect [attr.id]=\"path2\" x=\"74\" y=\"50\" width=\"118\" height=\"36\" rx=\"8\" />\r\n  </defs>\r\n  <mask [attr.id]=\"mask1\" fill=\"white\">\r\n    <use [attr.xlink:href]=\"'#' + path3\" />\r\n  </mask>\r\n  <g id=\"Mask\" />\r\n  <g id=\"Top/Accessories/Winter-Hat-1\" transform=\"translate(-1.000000, 0.000000)\">\r\n    <g id=\"hat\" stroke-width=\"1\" fill-rule=\"evenodd\" transform=\"translate(63.000000, 20.000000)\">\r\n      <path\r\n        d=\"M1,48 L23.6714286,48 L23.6714286,153.664286 C23.6714286,159.924828 18.5962564,165 12.3357143,165 C6.07517216,165 1,159.924828 1,153.664286 L1,48 Z M116.328571,48 L139,48 L139,153.664286 C139,159.924828 133.924828,165 127.664286,165 C121.403744,165 116.328571,159.924828 116.328571,153.664286 L116.328571,48 Z\"\r\n        id=\"inside\" fill=\"#F4F4F4\" />\r\n      <mask [attr.id]=\"mask2\" fill=\"white\">\r\n        <use [attr.xlink:href]=\"'#' + path1\" />\r\n      </mask>\r\n      <use id=\"hat-mask\" [attr.fill]=\"color2\" [attr.xlink:href]=\"'#' + path1\" />\r\n    </g>\r\n    <g id=\"hat-front\">\r\n      <use fill=\"black\" fill-opacity=\"1\" [attr.filter]=\"urlFix(path2)\" [attr.xlink:href]=\"'#' + path2\" />\r\n      <use fill=\"#F4F4F4\" fill-rule=\"evenodd\" [attr.xlink:href]=\"'#' + path2\" />\r\n    </g>\r\n    <g kip-custom-avatar-facial-hair [facialHairType]=\"facialHairType\" [facialHairColor]=\"facialHairColor\" />\r\n    <g kip-custom-avatar-accessories [accessoriesType]=\"accessoriesType\"  [accessoriesColor]=\"accessoriesColor\"/>\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];
/** @nocollapse */
CustomAvatarTopWinterHat1Component.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    CustomAvatarTopWinterHat1Component.prototype.option;
    /** @type {?} */
    CustomAvatarTopWinterHat1Component.prototype.mask1;
    /** @type {?} */
    CustomAvatarTopWinterHat1Component.prototype.mask2;
    /** @type {?} */
    CustomAvatarTopWinterHat1Component.prototype.path1;
    /** @type {?} */
    CustomAvatarTopWinterHat1Component.prototype.path2;
    /** @type {?} */
    CustomAvatarTopWinterHat1Component.prototype.path3;
    /** @type {?} */
    CustomAvatarTopWinterHat1Component.prototype.filter1;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ludGVyLWhhdDEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctYXZhdGFhYXJzLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvY3VzdG9tLWF2YXRhci9hdmF0YXIvdG9wL3dpbnRlci1oYXQxLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFPcEUsTUFBTSxPQUFPLGtDQUFtQyxTQUFRLDRCQUE0QjtJQVdsRjtRQUNFLEtBQUssRUFBRSxDQUFDO1FBVlYsV0FBTSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7UUFFNUIsVUFBSyxHQUFXLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNyQyxVQUFLLEdBQVcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JDLFVBQUssR0FBVyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckMsVUFBSyxHQUFXLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNyQyxVQUFLLEdBQVcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JDLFlBQU8sR0FBVyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7SUFJekMsQ0FBQzs7O1lBbEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUNBQXFDO2dCQUMvQyxxNEVBQTJDO2FBQzVDOzs7Ozs7SUFJQyxvREFBNEI7O0lBRTVCLG1EQUFxQzs7SUFDckMsbURBQXFDOztJQUNyQyxtREFBcUM7O0lBQ3JDLG1EQUFxQzs7SUFDckMsbURBQXFDOztJQUNyQyxxREFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTpjb21wb25lbnQtc2VsZWN0b3IgKi9cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUb3BUeXBlIH0gZnJvbSAnLi4vLi4vb3B0aW9ucyc7XHJcbmltcG9ydCB7IHJhbmRvbUlkIH0gZnJvbSAnLi4vLi4vaGVscGVyL3JhbmRvbWlkJztcclxuaW1wb3J0IHsgQ3VzdG9tQXZhdGFyVG9wQmFzZUNvbXBvbmVudCB9IGZyb20gJy4vdG9wLWJhc2UuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnW2tpcC1jdXN0b20tYXZhdGFyLXRvcC13aW50ZXItaGF0MV0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi93aW50ZXItaGF0MS5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ3VzdG9tQXZhdGFyVG9wV2ludGVySGF0MUNvbXBvbmVudCBleHRlbmRzIEN1c3RvbUF2YXRhclRvcEJhc2VDb21wb25lbnQge1xyXG5cclxuICBvcHRpb24gPSBUb3BUeXBlLldpbnRlckhhdDE7XHJcblxyXG4gIG1hc2sxOiBzdHJpbmcgPSByYW5kb21JZCgna2lwLW1hc2snKTtcclxuICBtYXNrMjogc3RyaW5nID0gcmFuZG9tSWQoJ2tpcC1tYXNrJyk7XHJcbiAgcGF0aDE6IHN0cmluZyA9IHJhbmRvbUlkKCdraXAtcGF0aCcpO1xyXG4gIHBhdGgyOiBzdHJpbmcgPSByYW5kb21JZCgna2lwLXBhdGgnKTtcclxuICBwYXRoMzogc3RyaW5nID0gcmFuZG9tSWQoJ2tpcC1wYXRoJyk7XHJcbiAgZmlsdGVyMTogc3RyaW5nID0gcmFuZG9tSWQoJ2tpcC1maWx0ZXInKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19