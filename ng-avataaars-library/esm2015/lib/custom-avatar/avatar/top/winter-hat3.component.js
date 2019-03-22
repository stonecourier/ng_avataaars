/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable:component-selector */
import { Component } from '@angular/core';
import { TopType } from '../../options';
import { randomId } from '../../helper/randomid';
import { CustomAvatarTopBaseComponent } from './top-base.component';
export class CustomAvatarTopWinterHat3Component extends CustomAvatarTopBaseComponent {
    constructor() {
        super();
        this.option = TopType.WinterHat3;
        this.mask1 = randomId('kip-mask');
        this.mask2 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
        this.path2 = randomId('kip-path');
        this.path3 = randomId('kip-path');
        this.filter1 = randomId('kip-filter');
    }
}
CustomAvatarTopWinterHat3Component.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-top-winter-hat3]',
                template: "<svg:g id='Top'>\r\n  <defs>\r\n    <rect [attr.id]=\"path3\" x='0' y='0' width='264' height='280' />\r\n    <path\r\n      d='M66,0 L66,0 C102.450793,-6.69590214e-15 132,29.5492065 132,66 L132,71 L0,71 L0,66 C-4.46393476e-15,29.5492065 29.5492065,6.69590214e-15 66,0 Z'\r\n      [attr.id]=\"path1\" />\r\n    <filter x='-0.7%' y='-1.7%' width='101.4%' height='106.8%' filterUnits='objectBoundingBox' [attr.id]=\"filter1\">\r\n      <feOffset dx='0' dy='2' in='SourceAlpha' result='shadowOffsetOuter1' />\r\n      <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0' type='matrix' in='shadowOffsetOuter1' />\r\n    </filter>\r\n    <path\r\n      d='M67.2846026,61.4514246 C83.229708,49.8171415 105.159178,44 133.073012,44 C160.985408,44 182.871592,49.8165424 198.731564,61.4496271 L198.731562,61.4496305 C200.786183,62.956669 202.000006,65.3523289 202.000006,67.900394 L202.000004,98.3697692 C202.000004,100.578907 200.209144,102.369768 198.000006,102.369768 C197.244444,102.369768 196.504332,102.155773 195.865355,101.752558 C179.223261,91.2508526 158.536251,86 133.804323,86 C108.883259,86 87.640395,91.3314713 70.0757313,101.994414 L70.0757317,101.994414 C68.1873241,103.140806 65.7271332,102.539283 64.5807417,100.650875 C64.2008775,100.02514 64.0000054,99.3071624 64.0000054,98.5751499 L64,67.914014 C64,65.358892 65.2205159,62.9574773 67.2846026,61.4514246 Z'\r\n      [attr.id]=\"path2\" />\r\n  </defs>\r\n  <mask [attr.id]=\"mask1\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path3\" />\r\n  </mask>\r\n  <g id='Mask' />\r\n  <g id='Top/Accessories/Winter-Hat-3' transform='translate(-1.000000, 0.000000)'>\r\n    <g id='hat' stroke-width='1' fill-rule='evenodd' transform='translate(67.000000, 12.000000)'>\r\n      <circle id='puff' fill='#F4F4F4' cx='66' cy='8' r='20' />\r\n      <mask [attr.id]=\"mask2\" fill='white'>\r\n        <use [attr.xlink:href]=\"'#' + path1\" />\r\n      </mask>\r\n      <use id='hat-mask' [attr.fill]=\"color2\" [attr.xlink:href]=\"'#' + path1\" />\r\n    </g>\r\n    <g id='hat-front'>\r\n      <use fill='black' fill-opacity='1' [attr.filter]=\"urlFix(path2)\" [attr.xlink:href]=\"'#' + path2\" />\r\n      <use fill='#F4F4F4' fill-rule='evenodd' [attr.xlink:href]=\"'#' + path2\" />\r\n    </g>\r\n    <g kip-custom-avatar-facial-hair [facialHairType]=\"facialHairType\" [facialHairColor]=\"facialHairColor\" />\r\n    <g kip-custom-avatar-accessories [accessoriesType]=\"accessoriesType\"  [accessoriesColor]=\"accessoriesColor\"/>\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];
/** @nocollapse */
CustomAvatarTopWinterHat3Component.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    CustomAvatarTopWinterHat3Component.prototype.option;
    /** @type {?} */
    CustomAvatarTopWinterHat3Component.prototype.mask1;
    /** @type {?} */
    CustomAvatarTopWinterHat3Component.prototype.mask2;
    /** @type {?} */
    CustomAvatarTopWinterHat3Component.prototype.path1;
    /** @type {?} */
    CustomAvatarTopWinterHat3Component.prototype.path2;
    /** @type {?} */
    CustomAvatarTopWinterHat3Component.prototype.path3;
    /** @type {?} */
    CustomAvatarTopWinterHat3Component.prototype.filter1;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ludGVyLWhhdDMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctYXZhdGFhYXJzLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvY3VzdG9tLWF2YXRhci9hdmF0YXIvdG9wL3dpbnRlci1oYXQzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFPcEUsTUFBTSxPQUFPLGtDQUFtQyxTQUFRLDRCQUE0QjtJQVdsRjtRQUNFLEtBQUssRUFBRSxDQUFDO1FBVlYsV0FBTSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7UUFFNUIsVUFBSyxHQUFXLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNyQyxVQUFLLEdBQVcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JDLFVBQUssR0FBVyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckMsVUFBSyxHQUFXLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNyQyxVQUFLLEdBQVcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JDLFlBQU8sR0FBVyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7SUFJekMsQ0FBQzs7O1lBbEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUNBQXFDO2dCQUMvQywrK0VBQTJDO2FBQzVDOzs7Ozs7SUFJQyxvREFBNEI7O0lBRTVCLG1EQUFxQzs7SUFDckMsbURBQXFDOztJQUNyQyxtREFBcUM7O0lBQ3JDLG1EQUFxQzs7SUFDckMsbURBQXFDOztJQUNyQyxxREFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTpjb21wb25lbnQtc2VsZWN0b3IgKi9cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUb3BUeXBlIH0gZnJvbSAnLi4vLi4vb3B0aW9ucyc7XHJcbmltcG9ydCB7IHJhbmRvbUlkIH0gZnJvbSAnLi4vLi4vaGVscGVyL3JhbmRvbWlkJztcclxuaW1wb3J0IHsgQ3VzdG9tQXZhdGFyVG9wQmFzZUNvbXBvbmVudCB9IGZyb20gJy4vdG9wLWJhc2UuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnW2tpcC1jdXN0b20tYXZhdGFyLXRvcC13aW50ZXItaGF0M10nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi93aW50ZXItaGF0My5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ3VzdG9tQXZhdGFyVG9wV2ludGVySGF0M0NvbXBvbmVudCBleHRlbmRzIEN1c3RvbUF2YXRhclRvcEJhc2VDb21wb25lbnQge1xyXG5cclxuICBvcHRpb24gPSBUb3BUeXBlLldpbnRlckhhdDM7XHJcblxyXG4gIG1hc2sxOiBzdHJpbmcgPSByYW5kb21JZCgna2lwLW1hc2snKTtcclxuICBtYXNrMjogc3RyaW5nID0gcmFuZG9tSWQoJ2tpcC1tYXNrJyk7XHJcbiAgcGF0aDE6IHN0cmluZyA9IHJhbmRvbUlkKCdraXAtcGF0aCcpO1xyXG4gIHBhdGgyOiBzdHJpbmcgPSByYW5kb21JZCgna2lwLXBhdGgnKTtcclxuICBwYXRoMzogc3RyaW5nID0gcmFuZG9tSWQoJ2tpcC1wYXRoJyk7XHJcbiAgZmlsdGVyMTogc3RyaW5nID0gcmFuZG9tSWQoJ2tpcC1maWx0ZXInKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19