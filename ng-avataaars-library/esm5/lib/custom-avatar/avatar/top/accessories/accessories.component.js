/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable:component-selector */
import { Component, Input } from '@angular/core';
import { AccessoriesType, AccessoriesColor } from '../../../options';
var CustomAvatarAccessoriesComponent = /** @class */ (function () {
    function CustomAvatarAccessoriesComponent() {
    }
    CustomAvatarAccessoriesComponent.decorators = [
        { type: Component, args: [{
                    selector: '[kip-custom-avatar-accessories]',
                    template: "<svg:g [ngSwitch]=\"accessoriesType\">\r\n  <g *ngSwitchCase=\"'Prescription01'\" kip-custom-avatar-accessories-prescription1 [accessoriesColor]=\"accessoriesColor\" />\r\n  <g *ngSwitchCase=\"'Prescription02'\" kip-custom-avatar-accessories-prescription2  [accessoriesColor]=\"accessoriesColor\"/>\r\n  <g *ngSwitchCase=\"'Kurt'\" kip-custom-avatar-accessories-kurt  [accessoriesColor]=\"accessoriesColor\"/>\r\n  <g *ngSwitchCase=\"'Round'\" kip-custom-avatar-accessories-round  [accessoriesColor]=\"accessoriesColor\"/>\r\n  <g *ngSwitchCase=\"'Sunglasses'\" kip-custom-avatar-accessories-sunglasses  [accessoriesColor]=\"accessoriesColor\"/>\r\n  <g *ngSwitchCase=\"'Wayfarers'\" kip-custom-avatar-accessories-wayfarers  [accessoriesColor]=\"accessoriesColor\"/>\r\n</svg:g>\r\n"
                }] }
    ];
    CustomAvatarAccessoriesComponent.propDecorators = {
        accessoriesType: [{ type: Input }],
        accessoriesColor: [{ type: Input }]
    };
    return CustomAvatarAccessoriesComponent;
}());
export { CustomAvatarAccessoriesComponent };
if (false) {
    /** @type {?} */
    CustomAvatarAccessoriesComponent.prototype.accessoriesType;
    /** @type {?} */
    CustomAvatarAccessoriesComponent.prototype.accessoriesColor;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzb3JpZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctYXZhdGFhYXJzLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvY3VzdG9tLWF2YXRhci9hdmF0YXIvdG9wL2FjY2Vzc29yaWVzL2FjY2Vzc29yaWVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVyRTtJQUFBO0lBWUEsQ0FBQzs7Z0JBWkEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQ0FBaUM7b0JBQzNDLDB4QkFBMkM7aUJBQzVDOzs7a0NBSUUsS0FBSzttQ0FHTCxLQUFLOztJQUVSLHVDQUFDO0NBQUEsQUFaRCxJQVlDO1NBUFksZ0NBQWdDOzs7SUFFM0MsMkRBQ2lDOztJQUVqQyw0REFDbUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTpjb21wb25lbnQtc2VsZWN0b3IgKi9cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWNjZXNzb3JpZXNUeXBlLCBBY2Nlc3Nvcmllc0NvbG9yIH0gZnJvbSAnLi4vLi4vLi4vb3B0aW9ucyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1traXAtY3VzdG9tLWF2YXRhci1hY2Nlc3Nvcmllc10nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hY2Nlc3Nvcmllcy5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ3VzdG9tQXZhdGFyQWNjZXNzb3JpZXNDb21wb25lbnQge1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGFjY2Vzc29yaWVzVHlwZTogQWNjZXNzb3JpZXNUeXBlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGFjY2Vzc29yaWVzQ29sb3I6IEFjY2Vzc29yaWVzQ29sb3I7XHJcbn1cclxuIl19