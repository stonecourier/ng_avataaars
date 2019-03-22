/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable:component-selector */
import { Component } from '@angular/core';
import { randomId } from '../../../helper/randomid';
import { MouthBaseComponent } from './mouth-base.component';
export class CustomAvatarMouthConcernedComponent extends MouthBaseComponent {
    constructor() {
        super(...arguments);
        this.mask1 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
    }
}
CustomAvatarMouthConcernedComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-mouth-concerned]',
                template: "<svg:g id='Mouth/Concerned' transform='translate(2.000000, 52.000000)'>\r\n  <defs>\r\n    <path\r\n      d='M35.117844,15.1280772 C36.1757121,24.6198025 44.2259873,32 54,32 C63.8042055,32 71.8740075,24.574136 72.8917593,15.0400546 C72.9736685,14.272746 72.1167429,13 71.042767,13 C56.1487536,13 44.7379213,13 37.0868244,13 C36.0066168,13 35.0120058,14.1784435 35.117844,15.1280772 Z'\r\n      [id]=\"path1\"></path>\r\n  </defs>\r\n  <mask [id]=\"mask1\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path1\"\r\n      transform='translate(54.003637, 22.500000) scale(1, -1) translate(-54.003637, -22.500000) '></use>\r\n  </mask>\r\n  <use id='Mouth' fill-opacity='0.699999988' fill='#000000' fill-rule='evenodd'\r\n    transform='translate(54.003637, 22.500000) scale(1, -1) translate(-54.003637, -22.500000) '\r\n    [attr.xlink:href]=\"'#' + path1\"></use>\r\n  <rect id='Teeth' fill='#FFFFFF' fill-rule='evenodd' [attr.mask]=\"urlFix(mask1)\" x='39' y='2' width='31'\r\n    height='16' rx='5'></rect>\r\n  <g id='Tongue' stroke-width='1' fill-rule='evenodd' [attr.mask]=\"urlFix(mask1)\" fill='#FF4F6D'>\r\n    <g transform='translate(38.000000, 24.000000)'>\r\n      <circle id='friend?' cx='11' cy='11' r='11'></circle>\r\n      <circle id='How-you-doing' cx='21' cy='11' r='11'></circle>\r\n    </g>\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];
if (false) {
    /** @type {?} */
    CustomAvatarMouthConcernedComponent.prototype.option;
    /** @type {?} */
    CustomAvatarMouthConcernedComponent.prototype.mask1;
    /** @type {?} */
    CustomAvatarMouthConcernedComponent.prototype.path1;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uY2VybmVkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWF2YXRhYWFycy1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2N1c3RvbS1hdmF0YXIvYXZhdGFyL2ZhY2UvbW91dGgvY29uY2VybmVkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRXBELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBTzVELE1BQU0sT0FBTyxtQ0FBb0MsU0FBUSxrQkFBa0I7SUFMM0U7O1FBU0UsVUFBSyxHQUFXLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNyQyxVQUFLLEdBQVcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7OztZQVhBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUNBQXFDO2dCQUMvQyx1MENBQXlDO2FBQzFDOzs7O0lBSUMscURBQTRCOztJQUU1QixvREFBcUM7O0lBQ3JDLG9EQUFxQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlOmNvbXBvbmVudC1zZWxlY3RvciAqL1xyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHJhbmRvbUlkIH0gZnJvbSAnLi4vLi4vLi4vaGVscGVyL3JhbmRvbWlkJztcclxuaW1wb3J0IHsgTW91dGhUeXBlIH0gZnJvbSAnLi4vLi4vLi4vb3B0aW9ucyc7XHJcbmltcG9ydCB7IE1vdXRoQmFzZUNvbXBvbmVudCB9IGZyb20gJy4vbW91dGgtYmFzZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdba2lwLWN1c3RvbS1hdmF0YXItbW91dGgtY29uY2VybmVkXScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbmNlcm5lZC5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ3VzdG9tQXZhdGFyTW91dGhDb25jZXJuZWRDb21wb25lbnQgZXh0ZW5kcyBNb3V0aEJhc2VDb21wb25lbnQge1xyXG5cclxuICBvcHRpb246IE1vdXRoVHlwZS5Db25jZXJuZWQ7XHJcblxyXG4gIG1hc2sxOiBzdHJpbmcgPSByYW5kb21JZCgna2lwLW1hc2snKTtcclxuICBwYXRoMTogc3RyaW5nID0gcmFuZG9tSWQoJ2tpcC1wYXRoJyk7XHJcbn1cclxuIl19