/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable:component-selector */
import { Component } from '@angular/core';
import { randomId } from '../../helper/randomid';
import { CustomAvatarClothesBaseComponent } from './clothes-base.component';
export class CustomAvatarClothesShirtCrewNeckComponent extends CustomAvatarClothesBaseComponent {
    constructor() {
        super(...arguments);
        this.mask1 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
    }
}
CustomAvatarClothesShirtCrewNeckComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-clothes-shirt-crew-neck]',
                template: "<svg:g id='Clothing/Shirt-Crew-Neck' transform='translate(0.000000, 170.000000)'>\r\n  <defs>\r\n    <path\r\n      d='M165.960472,29.2949161 C202.936473,32.3249982 232,63.2942856 232,101.051724 L232,110 L32,110 L32,101.051724 C32,62.9525631 61.591985,31.7649812 99.0454063,29.2195264 C99.0152598,29.5931145 99,29.9692272 99,30.3476251 C99,42.2107177 113.998461,51.8276544 132.5,51.8276544 C151.001539,51.8276544 166,42.2107177 166,30.3476251 C166,29.9946691 165.986723,29.6437014 165.960472,29.2949161 Z'\r\n      [attr.id]=\"path1\" />\r\n  </defs>\r\n  <mask [attr.id]=\"mask1\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path1\" />\r\n  </mask>\r\n  <use id='Clothes' [attr.fill]=\"color\" fill-rule='evenodd' [attr.xlink:href]=\"'#' + path1\" />\r\n  <g id='Shadowy' opacity='0.599999964' stroke-width='1' fill-rule='evenodd' [attr.mask]=\"urlFix(mask1)\"\r\n     [attr.fill]=\"color2\">\r\n    <g transform='translate(92.000000, 4.000000)' id='Hola-\uD83D\uDC4B\uD83C\uDFFC'>\r\n      <ellipse cx='40.5' cy='27.8476251' rx='39.6351047' ry='26.9138272' />\r\n    </g>\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];
if (false) {
    /** @type {?} */
    CustomAvatarClothesShirtCrewNeckComponent.prototype.option;
    /** @type {?} */
    CustomAvatarClothesShirtCrewNeckComponent.prototype.mask1;
    /** @type {?} */
    CustomAvatarClothesShirtCrewNeckComponent.prototype.path1;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcnQtY3Jldy1uZWNrLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWF2YXRhYWFycy1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2N1c3RvbS1hdmF0YXIvYXZhdGFyL2Nsb3RoZXMvc2hpcnQtY3Jldy1uZWNrLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBTzVFLE1BQU0sT0FBTyx5Q0FBMEMsU0FBUSxnQ0FBZ0M7SUFML0Y7O1FBU0UsVUFBSyxHQUFXLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNyQyxVQUFLLEdBQVcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7OztZQVhBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsNkNBQTZDO2dCQUN2RCwrbENBQStDO2FBQ2hEOzs7O0lBSUMsMkRBQWlDOztJQUVqQywwREFBcUM7O0lBQ3JDLDBEQUFxQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlOmNvbXBvbmVudC1zZWxlY3RvciAqL1xyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENsb3RoZVR5cGUgfSBmcm9tICcuLi8uLi9vcHRpb25zJztcclxuaW1wb3J0IHsgcmFuZG9tSWQgfSBmcm9tICcuLi8uLi9oZWxwZXIvcmFuZG9taWQnO1xyXG5pbXBvcnQgeyBDdXN0b21BdmF0YXJDbG90aGVzQmFzZUNvbXBvbmVudCB9IGZyb20gJy4vY2xvdGhlcy1iYXNlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1traXAtY3VzdG9tLWF2YXRhci1jbG90aGVzLXNoaXJ0LWNyZXctbmVja10nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zaGlydC1jcmV3LW5lY2suY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEN1c3RvbUF2YXRhckNsb3RoZXNTaGlydENyZXdOZWNrQ29tcG9uZW50IGV4dGVuZHMgQ3VzdG9tQXZhdGFyQ2xvdGhlc0Jhc2VDb21wb25lbnQge1xyXG5cclxuICBvcHRpb246IENsb3RoZVR5cGUuU2hpcnRDcmV3TmVjaztcclxuXHJcbiAgbWFzazE6IHN0cmluZyA9IHJhbmRvbUlkKCdraXAtbWFzaycpO1xyXG4gIHBhdGgxOiBzdHJpbmcgPSByYW5kb21JZCgna2lwLXBhdGgnKTtcclxufVxyXG4iXX0=