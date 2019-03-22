/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable:component-selector */
import { Component, Input } from '@angular/core';
import { NoseType } from '../../../options';
var CustomAvatarNoseComponent = /** @class */ (function () {
    function CustomAvatarNoseComponent() {
        this.noseType = NoseType.Default;
    }
    CustomAvatarNoseComponent.decorators = [
        { type: Component, args: [{
                    selector: '[kip-custom-avatar-nose]',
                    template: "<svg:g [ngSwitch]=\"noseType\">\r\n  <g *ngSwitchCase=\"'Default'\" kip-custom-avatar-nose-default />\r\n  <g *ngSwitchCase=\"'Clown'\" kip-custom-avatar-nose-clown />\r\n  </svg:g>\r\n"
                }] }
    ];
    CustomAvatarNoseComponent.propDecorators = {
        noseType: [{ type: Input }]
    };
    return CustomAvatarNoseComponent;
}());
export { CustomAvatarNoseComponent };
if (false) {
    /** @type {?} */
    CustomAvatarNoseComponent.prototype.noseType;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9zZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1hdmF0YWFhcnMtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9jdXN0b20tYXZhdGFyL2F2YXRhci9mYWNlL25vc2Uvbm9zZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFNUM7SUFBQTtRQVFFLGFBQVEsR0FBYSxRQUFRLENBQUMsT0FBTyxDQUFDO0lBRXhDLENBQUM7O2dCQVZBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyxxTUFBb0M7aUJBQ3JDOzs7MkJBSUUsS0FBSzs7SUFHUixnQ0FBQztDQUFBLEFBVkQsSUFVQztTQUxZLHlCQUF5Qjs7O0lBRXBDLDZDQUNzQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlOmNvbXBvbmVudC1zZWxlY3RvciAqL1xyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOb3NlVHlwZSB9IGZyb20gJy4uLy4uLy4uL29wdGlvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdba2lwLWN1c3RvbS1hdmF0YXItbm9zZV0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9ub3NlLmNvbXBvbmVudC5odG1sJyxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDdXN0b21BdmF0YXJOb3NlQ29tcG9uZW50IHtcclxuXHJcbiAgQElucHV0KClcclxuICBub3NlVHlwZTogTm9zZVR5cGUgPSBOb3NlVHlwZS5EZWZhdWx0O1xyXG5cclxufVxyXG4iXX0=