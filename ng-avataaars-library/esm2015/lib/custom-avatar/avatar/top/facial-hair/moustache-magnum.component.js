/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable:component-selector */
import { Component } from '@angular/core';
import { FacialHairType } from '../../../options';
import { randomId } from '../../../helper/randomid';
import { CustomAvatarFacialHairBaseComponent } from './facial-hair-base.component';
export class CustomAvatarFacialHairMoustacheMagnumComponent extends CustomAvatarFacialHairBaseComponent {
    constructor() {
        super(...arguments);
        this.option = FacialHairType.MoustacheMagnum;
        this.mask1 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
    }
}
CustomAvatarFacialHairMoustacheMagnumComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-facial-hair-moustache-magnum]',
                template: "<svg:g transform='translate(49.000000, 72.000000)'>\r\n  <defs>\r\n    <path\r\n      d='M83.9980103,74.839711 C83.4569991,75.6087366 82.761047,76.2496937 81.949688,76.6891498 C73.0477917,81.5102869 63.8767499,77.3322546 58.8763101,77.6298353 C56.459601,77.7739966 53.3405442,79.4153191 52.2155358,77.6791014 C50.9768736,75.7669804 55.0680827,65.2207224 64.7214121,63.4643353 C71.7310704,62.1893309 81.4972391,63.6024033 83.9980103,66.9380109 C86.4987814,63.6024033 96.2649453,62.1893309 103.274279,63.4643353 C112.927938,65.2207224 117.019147,75.7669804 115.780485,77.6791014 C114.655476,79.4153191 111.53642,77.7739966 109.119711,77.6298353 C104.118941,77.3322546 94.948229,81.5102869 86.0463327,76.6891498 C85.2349736,76.2496937 84.5390216,75.6087366 83.9980103,74.839711 Z'\r\n      [attr.id]=\"path1\" />\r\n  </defs>\r\n  <mask [attr.id]=\"mask1\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path1\" />\r\n  </mask>\r\n  <use [attr.fill]='color' fill-rule='evenodd' [attr.xlink:href]=\"'#' + path1\" />\r\n</svg:g>\r\n"
            }] }
];
if (false) {
    /** @type {?} */
    CustomAvatarFacialHairMoustacheMagnumComponent.prototype.option;
    /** @type {?} */
    CustomAvatarFacialHairMoustacheMagnumComponent.prototype.mask1;
    /** @type {?} */
    CustomAvatarFacialHairMoustacheMagnumComponent.prototype.path1;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW91c3RhY2hlLW1hZ251bS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1hdmF0YWFhcnMtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9jdXN0b20tYXZhdGFyL2F2YXRhci90b3AvZmFjaWFsLWhhaXIvbW91c3RhY2hlLW1hZ251bS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDcEQsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFPbkYsTUFBTSxPQUFPLDhDQUErQyxTQUFRLG1DQUFtQztJQUx2Rzs7UUFPRSxXQUFNLEdBQUcsY0FBYyxDQUFDLGVBQWUsQ0FBQztRQUV4QyxVQUFLLEdBQVcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JDLFVBQUssR0FBVyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7O1lBWEEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrREFBa0Q7Z0JBQzVELG9oQ0FBZ0Q7YUFDakQ7Ozs7SUFJQyxnRUFBd0M7O0lBRXhDLCtEQUFxQzs7SUFDckMsK0RBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6Y29tcG9uZW50LXNlbGVjdG9yICovXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmFjaWFsSGFpclR5cGUgfSBmcm9tICcuLi8uLi8uLi9vcHRpb25zJztcclxuaW1wb3J0IHsgcmFuZG9tSWQgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXIvcmFuZG9taWQnO1xyXG5pbXBvcnQgeyBDdXN0b21BdmF0YXJGYWNpYWxIYWlyQmFzZUNvbXBvbmVudCB9IGZyb20gJy4vZmFjaWFsLWhhaXItYmFzZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdba2lwLWN1c3RvbS1hdmF0YXItZmFjaWFsLWhhaXItbW91c3RhY2hlLW1hZ251bV0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9tb3VzdGFjaGUtbWFnbnVtLmNvbXBvbmVudC5odG1sJyxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDdXN0b21BdmF0YXJGYWNpYWxIYWlyTW91c3RhY2hlTWFnbnVtQ29tcG9uZW50IGV4dGVuZHMgQ3VzdG9tQXZhdGFyRmFjaWFsSGFpckJhc2VDb21wb25lbnQge1xyXG5cclxuICBvcHRpb24gPSBGYWNpYWxIYWlyVHlwZS5Nb3VzdGFjaGVNYWdudW07XHJcblxyXG4gIG1hc2sxOiBzdHJpbmcgPSByYW5kb21JZCgna2lwLW1hc2snKTtcclxuICBwYXRoMTogc3RyaW5nID0gcmFuZG9tSWQoJ2tpcC1wYXRoJyk7XHJcbn1cclxuIl19