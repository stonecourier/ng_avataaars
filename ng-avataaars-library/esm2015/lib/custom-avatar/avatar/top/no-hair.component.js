/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable:component-selector */
import { Component } from '@angular/core';
import { TopType } from '../../options';
import { randomId } from '../../helper/randomid';
import { CustomAvatarTopBaseComponent } from './top-base.component';
export class CustomAvatarTopNoHairComponent extends CustomAvatarTopBaseComponent {
    constructor() {
        super();
        this.option = TopType.NoHair;
        this.mask1 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
        this.filter1 = randomId('kip-filter');
    }
}
CustomAvatarTopNoHairComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-top-no-hair]',
                template: "<svg:g id='Top' stroke-width='1' fill-rule='evenodd'>\r\n  <defs>\r\n    <rect [attr.id]=\"path1\" x='0' y='0' width='264' height='280' />\r\n    <filter x='-0.8%' y='-2.0%' width='101.5%' height='108.0%' filterUnits='objectBoundingBox' [attr.id]=\"filter1\">\r\n      <feOffset dx='0' dy='2' in='SourceAlpha' result='shadowOffsetOuter1' />\r\n      <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0' type='matrix' in='shadowOffsetOuter1'\r\n        result='shadowMatrixOuter1' />\r\n      <feMerge>\r\n        <feMergeNode in='shadowMatrixOuter1' />\r\n        <feMergeNode in='SourceGraphic' />\r\n      </feMerge>\r\n    </filter>\r\n  </defs>\r\n  <mask [attr.id]=\"mask1\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path1\" />\r\n  </mask>\r\n  <g id='Mask' />\r\n  <g id='Top/No-Hair' [attr.mask]=\"urlFix(mask1)\">\r\n    <g transform='translate(-1.000000, 0.000000)'>\r\n      <g kip-custom-avatar-facial-hair [facialHairType]=\"facialHairType\" [facialHairColor]=\"facialHairColor\" />\r\n      <g kip-custom-avatar-accessories [accessoriesType]=\"accessoriesType\"  [accessoriesColor]=\"accessoriesColor\"/>  </g>\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];
/** @nocollapse */
CustomAvatarTopNoHairComponent.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    CustomAvatarTopNoHairComponent.prototype.option;
    /** @type {?} */
    CustomAvatarTopNoHairComponent.prototype.mask1;
    /** @type {?} */
    CustomAvatarTopNoHairComponent.prototype.path1;
    /** @type {?} */
    CustomAvatarTopNoHairComponent.prototype.filter1;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm8taGFpci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1hdmF0YWFhcnMtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9jdXN0b20tYXZhdGFyL2F2YXRhci90b3Avbm8taGFpci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBT3BFLE1BQU0sT0FBTyw4QkFBK0IsU0FBUSw0QkFBNEI7SUFROUU7UUFDRSxLQUFLLEVBQUUsQ0FBQztRQVBWLFdBQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBRXhCLFVBQUssR0FBVyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckMsVUFBSyxHQUFXLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNyQyxZQUFPLEdBQVcsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBSXpDLENBQUM7OztZQWZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUNBQWlDO2dCQUMzQyx1cUNBQXVDO2FBQ3hDOzs7Ozs7SUFJQyxnREFBd0I7O0lBRXhCLCtDQUFxQzs7SUFDckMsK0NBQXFDOztJQUNyQyxpREFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTpjb21wb25lbnQtc2VsZWN0b3IgKi9cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUb3BUeXBlIH0gZnJvbSAnLi4vLi4vb3B0aW9ucyc7XHJcbmltcG9ydCB7IHJhbmRvbUlkIH0gZnJvbSAnLi4vLi4vaGVscGVyL3JhbmRvbWlkJztcclxuaW1wb3J0IHsgQ3VzdG9tQXZhdGFyVG9wQmFzZUNvbXBvbmVudCB9IGZyb20gJy4vdG9wLWJhc2UuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnW2tpcC1jdXN0b20tYXZhdGFyLXRvcC1uby1oYWlyXScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL25vLWhhaXIuY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEN1c3RvbUF2YXRhclRvcE5vSGFpckNvbXBvbmVudCBleHRlbmRzIEN1c3RvbUF2YXRhclRvcEJhc2VDb21wb25lbnQge1xyXG5cclxuICBvcHRpb24gPSBUb3BUeXBlLk5vSGFpcjtcclxuXHJcbiAgbWFzazE6IHN0cmluZyA9IHJhbmRvbUlkKCdraXAtbWFzaycpO1xyXG4gIHBhdGgxOiBzdHJpbmcgPSByYW5kb21JZCgna2lwLXBhdGgnKTtcclxuICBmaWx0ZXIxOiBzdHJpbmcgPSByYW5kb21JZCgna2lwLWZpbHRlcicpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=