/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/* tslint:disable:component-selector */
import { Component } from '@angular/core';
import { TopType } from '../../options';
import { randomId } from '../../helper/randomid';
import { CustomAvatarTopBaseComponent } from './top-base.component';
var CustomAvatarTopWinterHat4Component = /** @class */ (function (_super) {
    tslib_1.__extends(CustomAvatarTopWinterHat4Component, _super);
    function CustomAvatarTopWinterHat4Component() {
        var _this = _super.call(this) || this;
        _this.option = TopType.WinterHat3;
        _this.mask1 = randomId('kip-mask');
        _this.mask2 = randomId('kip-mask');
        _this.mask3 = randomId('kip-mask');
        _this.mask4 = randomId('kip-mask');
        _this.path1 = randomId('kip-path');
        _this.path2 = randomId('kip-path');
        _this.path3 = randomId('kip-path');
        _this.path4 = randomId('kip-path');
        _this.path5 = randomId('kip-path');
        _this.filter1 = randomId('kip-filter');
        return _this;
    }
    CustomAvatarTopWinterHat4Component.decorators = [
        { type: Component, args: [{
                    selector: '[kip-custom-avatar-top-winter-hat4]',
                    template: "<svg:g id='Top'>\r\n  <defs>\r\n    <rect [attr.id]=\"path5\" x='0' y='0' width='264' height='280' />\r\n    <path\r\n      d='M129.659138,38.3566287 C132.459581,45.3577056 134,52.9989608 134,61 L134,69 L2,69 L2,61 C2,52.9748603 3.54971254,45.3116754 6.36620203,38.2933809 C-0.0371821146,24.8304767 -1.28053094,13.7727805 2.63615554,5.12029235 C10.141056,2.84355825 18.8342301,4.64979084 28.7156778,10.5389901 C38.4862647,3.88774159 50.289117,-4.77047603e-15 63,-7.10542736e-15 L73,-7.10542736e-15 C85.7221104,-9.44244112e-15 97.5345852,3.89461262 107.310208,10.5566215 C117.203883,4.65339747 125.906912,2.84128775 133.419297,5.12029235 C137.342115,13.7863263 136.088729,24.8651051 129.659138,38.3566287 Z'\r\n      [attr.id]=\"path1\" />\r\n    <path\r\n      d='M28.7156857,10.5389848 C18.758718,17.3171083 10.9122881,26.9651756 6.36620203,38.2933809 C-0.0371821146,24.8304767 -1.28053094,13.7727805 2.63615554,5.12029235 C10.1410556,2.84355836 18.8342292,4.64979066 28.7156763,10.5389892 Z M129.659138,38.3566287 C125.120833,27.0109143 117.273404,17.34646 107.310208,10.5566215 C117.203883,4.65339747 125.906912,2.84128775 133.419297,5.12029235 C137.342115,13.7863263 136.088729,24.8651051 129.659138,38.3566287 Z'\r\n      [attr.id]=\"path2\" />\r\n    <path\r\n      d='M21.8615933,15.9591438 C17.3889306,20.0465694 13.5271638,24.7913314 10.4291788,30.040544 C7.50356643,21.9322189 7.00287124,16.3214118 8.92709323,13.2081228 C11.5782173,12.0615989 15.8897174,12.9786059 21.8615933,15.9591438 Z M125.352616,29.6737564 C122.278044,24.5465519 118.471613,19.9084198 114.077736,15.903773 C119.880509,13.0520429 124.083178,12.1889392 126.68574,13.3144617 C128.572308,16.3668294 128.127934,21.8199276 125.352616,29.6737564 Z'\r\n      [attr.id]=\"path3\" />\r\n    <filter x='-0.7%' y='-1.7%' width='101.4%' height='106.8%' filterUnits='objectBoundingBox' [attr.id]=\"filter1\">\r\n      <feOffset dx='0' dy='2' in='SourceAlpha' result='shadowOffsetOuter1' />\r\n      <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0' type='matrix' in='shadowOffsetOuter1' />\r\n    </filter>\r\n    <path\r\n      d='M67.2846026,61.4514246 C83.229708,49.8171415 105.159178,44 133.073012,44 C160.985408,44 182.871592,49.8165424 198.731564,61.4496271 L198.731562,61.4496305 C200.786183,62.956669 202.000006,65.3523289 202.000006,67.900394 L202.000004,98.3697692 C202.000004,100.578907 200.209144,102.369768 198.000006,102.369768 C197.244444,102.369768 196.504332,102.155773 195.865355,101.752558 C179.223261,91.2508526 158.536251,86 133.804323,86 C108.883259,86 87.640395,91.3314713 70.0757313,101.994414 L70.0757317,101.994414 C68.1873241,103.140806 65.7271332,102.539283 64.5807417,100.650875 C64.2008775,100.02514 64.0000054,99.3071624 64.0000054,98.5751499 L64,67.914014 C64,65.358892 65.2205159,62.9574773 67.2846026,61.4514246 Z'\r\n      [attr.id]=\"path4\" />\r\n  </defs>\r\n  <mask [attr.id]=\"mask1\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path5\" />\r\n  </mask>\r\n  <g id='Mask' />\r\n  <g id='Top/Accessories/Winter-Hat-4' transform='translate(-1.000000, 0.000000)'>\r\n    <g id='hat' stroke-width='1' fill-rule='evenodd' transform='translate(65.000000, 4.000000)'>\r\n      <mask [attr.id]=\"mask2\" fill='white'>\r\n        <use [attr.xlink:href]=\"'#' + path1\" />\r\n      </mask>\r\n      <use id='hat-mask' [attr.fill]=\"color2\" [attr.xlink:href]=\"'#' + path1\" />\r\n      <mask [attr.id]=\"mask3\" fill='white'>\r\n        <use [attr.xlink:href]=\"'#' + path2\" />\r\n      </mask>\r\n      <use id='shadow' fill-opacity='0.24' fill='#000000' [attr.xlink:href]=\"'#' + path2\" />\r\n      <mask [attr.id]=\"mask4\" fill='white'>\r\n        <use [attr.xlink:href]=\"'#' + path3\" />\r\n      </mask>\r\n      <use id='light' fill-opacity='0.300000012' fill='#FFFFFF' [attr.xlink:href]=\"'#' + path3\" />\r\n    </g>\r\n    <g id='hat-front'>\r\n      <use fill='black' fill-opacity='1' [attr.filter]=\"urlFix(path4)\" [attr.xlink:href]=\"'#' + path4\" />\r\n      <use fill='#F4F4F4' fill-rule='evenodd' [attr.xlink:href]=\"'#' + path4\" />\r\n    </g>\r\n    <g kip-custom-avatar-facial-hair [facialHairType]=\"facialHairType\" [facialHairColor]=\"facialHairColor\" />\r\n    <g kip-custom-avatar-accessories [accessoriesType]=\"accessoriesType\"  [accessoriesColor]=\"accessoriesColor\"/>\r\n  </g>\r\n</svg:g>\r\n"
                }] }
    ];
    /** @nocollapse */
    CustomAvatarTopWinterHat4Component.ctorParameters = function () { return []; };
    return CustomAvatarTopWinterHat4Component;
}(CustomAvatarTopBaseComponent));
export { CustomAvatarTopWinterHat4Component };
if (false) {
    /** @type {?} */
    CustomAvatarTopWinterHat4Component.prototype.option;
    /** @type {?} */
    CustomAvatarTopWinterHat4Component.prototype.mask1;
    /** @type {?} */
    CustomAvatarTopWinterHat4Component.prototype.mask2;
    /** @type {?} */
    CustomAvatarTopWinterHat4Component.prototype.mask3;
    /** @type {?} */
    CustomAvatarTopWinterHat4Component.prototype.mask4;
    /** @type {?} */
    CustomAvatarTopWinterHat4Component.prototype.path1;
    /** @type {?} */
    CustomAvatarTopWinterHat4Component.prototype.path2;
    /** @type {?} */
    CustomAvatarTopWinterHat4Component.prototype.path3;
    /** @type {?} */
    CustomAvatarTopWinterHat4Component.prototype.path4;
    /** @type {?} */
    CustomAvatarTopWinterHat4Component.prototype.path5;
    /** @type {?} */
    CustomAvatarTopWinterHat4Component.prototype.filter1;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ludGVyLWhhdDQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctYXZhdGFhYXJzLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvY3VzdG9tLWF2YXRhci9hdmF0YXIvdG9wL3dpbnRlci1oYXQ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXBFO0lBS3dELDhEQUE0QjtJQWVsRjtRQUFBLFlBQ0UsaUJBQU8sU0FDUjtRQWZELFlBQU0sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO1FBRTVCLFdBQUssR0FBVyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckMsV0FBSyxHQUFXLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNyQyxXQUFLLEdBQVcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JDLFdBQUssR0FBVyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckMsV0FBSyxHQUFXLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNyQyxXQUFLLEdBQVcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JDLFdBQUssR0FBVyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckMsV0FBSyxHQUFXLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNyQyxXQUFLLEdBQVcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JDLGFBQU8sR0FBVyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7O0lBSXpDLENBQUM7O2dCQXRCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFDQUFxQztvQkFDL0MsaXhJQUEyQztpQkFDNUM7Ozs7SUFxQkQseUNBQUM7Q0FBQSxBQXhCRCxDQUt3RCw0QkFBNEIsR0FtQm5GO1NBbkJZLGtDQUFrQzs7O0lBRTdDLG9EQUE0Qjs7SUFFNUIsbURBQXFDOztJQUNyQyxtREFBcUM7O0lBQ3JDLG1EQUFxQzs7SUFDckMsbURBQXFDOztJQUNyQyxtREFBcUM7O0lBQ3JDLG1EQUFxQzs7SUFDckMsbURBQXFDOztJQUNyQyxtREFBcUM7O0lBQ3JDLG1EQUFxQzs7SUFDckMscURBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6Y29tcG9uZW50LXNlbGVjdG9yICovXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVG9wVHlwZSB9IGZyb20gJy4uLy4uL29wdGlvbnMnO1xyXG5pbXBvcnQgeyByYW5kb21JZCB9IGZyb20gJy4uLy4uL2hlbHBlci9yYW5kb21pZCc7XHJcbmltcG9ydCB7IEN1c3RvbUF2YXRhclRvcEJhc2VDb21wb25lbnQgfSBmcm9tICcuL3RvcC1iYXNlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1traXAtY3VzdG9tLWF2YXRhci10b3Atd2ludGVyLWhhdDRdJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vd2ludGVyLWhhdDQuY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEN1c3RvbUF2YXRhclRvcFdpbnRlckhhdDRDb21wb25lbnQgZXh0ZW5kcyBDdXN0b21BdmF0YXJUb3BCYXNlQ29tcG9uZW50IHtcclxuXHJcbiAgb3B0aW9uID0gVG9wVHlwZS5XaW50ZXJIYXQzO1xyXG5cclxuICBtYXNrMTogc3RyaW5nID0gcmFuZG9tSWQoJ2tpcC1tYXNrJyk7XHJcbiAgbWFzazI6IHN0cmluZyA9IHJhbmRvbUlkKCdraXAtbWFzaycpO1xyXG4gIG1hc2szOiBzdHJpbmcgPSByYW5kb21JZCgna2lwLW1hc2snKTtcclxuICBtYXNrNDogc3RyaW5nID0gcmFuZG9tSWQoJ2tpcC1tYXNrJyk7XHJcbiAgcGF0aDE6IHN0cmluZyA9IHJhbmRvbUlkKCdraXAtcGF0aCcpO1xyXG4gIHBhdGgyOiBzdHJpbmcgPSByYW5kb21JZCgna2lwLXBhdGgnKTtcclxuICBwYXRoMzogc3RyaW5nID0gcmFuZG9tSWQoJ2tpcC1wYXRoJyk7XHJcbiAgcGF0aDQ6IHN0cmluZyA9IHJhbmRvbUlkKCdraXAtcGF0aCcpO1xyXG4gIHBhdGg1OiBzdHJpbmcgPSByYW5kb21JZCgna2lwLXBhdGgnKTtcclxuICBmaWx0ZXIxOiBzdHJpbmcgPSByYW5kb21JZCgna2lwLWZpbHRlcicpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=