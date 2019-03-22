/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable:component-selector */
import { Component, Input } from '@angular/core';
import { PetType } from '../../options';
export class CustomAvatarPetComponent {
    constructor() {
        this.petType = PetType.Dog;
    }
}
CustomAvatarPetComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-pet]',
                template: "<svg:g [ngSwitch]=\"petType\">\r\n  <g *ngSwitchCase=\"'Cat'\" kip-custom-avatar-pet-cat />\r\n  <g *ngSwitchCase=\"'Dog'\" kip-custom-avatar-pet-dog />\r\n  <g *ngSwitchCase=\"'Chick'\" kip-custom-avatar-pet-chick />\r\n  <g *ngSwitchCase=\"'Rabbit'\" kip-custom-avatar-pet-rabbit />\r\n  <g *ngSwitchCase=\"'Rat'\" kip-custom-avatar-pet-rat />\r\n  <g *ngSwitchCase=\"'Snake'\" kip-custom-avatar-pet-snake />\r\n  <g *ngSwitchCase=\"'Parrot'\" kip-custom-avatar-pet-parrot />\r\n  <g *ngSwitchCase=\"'Turtle'\" kip-custom-avatar-pet-turtle />\r\n  <g *ngSwitchCase=\"'Bird'\" kip-custom-avatar-pet-bird />\r\n  <g *ngSwitchCase=\"'Flea'\" kip-custom-avatar-pet-flea />\r\n  <g *ngSwitchCase=\"'Spider'\" kip-custom-avatar-pet-spider />\r\n  <g *ngSwitchCase=\"'Hamster'\" kip-custom-avatar-pet-hamster />\r\n  <g *ngSwitchCase=\"'Fish'\" kip-custom-avatar-pet-fish />\r\n</svg:g>\r\n"
            }] }
];
CustomAvatarPetComponent.propDecorators = {
    petType: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CustomAvatarPetComponent.prototype.petType;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWF2YXRhYWFycy1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2N1c3RvbS1hdmF0YXIvYXZhdGFyL3BldC9wZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU94QyxNQUFNLE9BQU8sd0JBQXdCO0lBTHJDO1FBUUUsWUFBTyxHQUFZLE9BQU8sQ0FBQyxHQUFHLENBQUM7SUFDakMsQ0FBQzs7O1lBVEEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLGk0QkFBbUM7YUFDcEM7OztzQkFJRSxLQUFLOzs7O0lBQU4sMkNBQytCIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6Y29tcG9uZW50LXNlbGVjdG9yICovXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBldFR5cGUgfSBmcm9tICcuLi8uLi9vcHRpb25zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnW2tpcC1jdXN0b20tYXZhdGFyLXBldF0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wZXQuY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEN1c3RvbUF2YXRhclBldENvbXBvbmVudCB7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcGV0VHlwZTogUGV0VHlwZSA9IFBldFR5cGUuRG9nO1xyXG59XHJcbiJdfQ==