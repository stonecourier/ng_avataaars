/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable:component-selector */
import { Component, Input } from '@angular/core';
import { NoseType } from '../../../options';
export class CustomAvatarNoseComponent {
    constructor() {
        this.noseType = NoseType.Default;
    }
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
if (false) {
    /** @type {?} */
    CustomAvatarNoseComponent.prototype.noseType;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9zZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1hdmF0YWFhcnMtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9jdXN0b20tYXZhdGFyL2F2YXRhci9mYWNlL25vc2Uvbm9zZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFPNUMsTUFBTSxPQUFPLHlCQUF5QjtJQUx0QztRQVFFLGFBQVEsR0FBYSxRQUFRLENBQUMsT0FBTyxDQUFDO0lBRXhDLENBQUM7OztZQVZBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxxTUFBb0M7YUFDckM7Ozt1QkFJRSxLQUFLOzs7O0lBQU4sNkNBQ3NDIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6Y29tcG9uZW50LXNlbGVjdG9yICovXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5vc2VUeXBlIH0gZnJvbSAnLi4vLi4vLi4vb3B0aW9ucyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1traXAtY3VzdG9tLWF2YXRhci1ub3NlXScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL25vc2UuY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEN1c3RvbUF2YXRhck5vc2VDb21wb25lbnQge1xyXG5cclxuICBASW5wdXQoKVxyXG4gIG5vc2VUeXBlOiBOb3NlVHlwZSA9IE5vc2VUeXBlLkRlZmF1bHQ7XHJcblxyXG59XHJcbiJdfQ==