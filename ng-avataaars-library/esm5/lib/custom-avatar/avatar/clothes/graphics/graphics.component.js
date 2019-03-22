/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable:component-selector */
import { Component, Input } from '@angular/core';
import { GraphicType, ClotheColor } from '../../../options';
var CustomAvatarClothesGraphicsComponent = /** @class */ (function () {
    function CustomAvatarClothesGraphicsComponent() {
        this.graphicType = GraphicType.Bat;
    }
    CustomAvatarClothesGraphicsComponent.decorators = [
        { type: Component, args: [{
                    selector: '[kip-custom-avatar-graphics]',
                    template: "<svg:g [ngSwitch]=\"graphicType\">\r\n  <g *ngSwitchCase=\"'Skull'\" kip-custom-avatar-clothes-graphics-skull [clotheColor2]=\"clotheColor2\" />\r\n  <g *ngSwitchCase=\"'SkullOutline'\" kip-custom-avatar-clothes-graphics-skull-outline [clotheColor2]=\"clotheColor2\" />\r\n  <g *ngSwitchCase=\"'IKip'\" kip-custom-avatar-clothes-graphics-ikip [clotheColor2]=\"clotheColor2\" />\r\n  <g *ngSwitchCase=\"'Bat'\" kip-custom-avatar-clothes-graphics-bat [clotheColor2]=\"clotheColor2\" />\r\n  <g *ngSwitchCase=\"'Cumbia'\" kip-custom-avatar-clothes-graphics-cumbia [clotheColor2]=\"clotheColor2\" />\r\n  <g *ngSwitchCase=\"'Deer'\" kip-custom-avatar-clothes-graphics-deer [clotheColor2]=\"clotheColor2\" />\r\n  <g *ngSwitchCase=\"'Diamond'\" kip-custom-avatar-clothes-graphics-diamond [clotheColor2]=\"clotheColor2\" />\r\n  <g *ngSwitchCase=\"'Hola'\" kip-custom-avatar-clothes-graphics-hola [clotheColor2]=\"clotheColor2\" />\r\n  <g *ngSwitchCase=\"'Selena'\" kip-custom-avatar-clothes-graphics-selena [clotheColor2]=\"clotheColor2\" />\r\n  <g *ngSwitchCase=\"'Pizza'\" kip-custom-avatar-clothes-graphics-pizza [clotheColor2]=\"clotheColor2\" />\r\n  <g *ngSwitchCase=\"'Resist'\" kip-custom-avatar-clothes-graphics-resist [clotheColor2]=\"clotheColor2\" />\r\n  <g *ngSwitchCase=\"'Bear'\" kip-custom-avatar-clothes-graphics-bear [clotheColor2]=\"clotheColor2\" />\r\n</svg:g>\r\n"
                }] }
    ];
    CustomAvatarClothesGraphicsComponent.propDecorators = {
        graphicType: [{ type: Input }],
        clotheColor2: [{ type: Input }]
    };
    return CustomAvatarClothesGraphicsComponent;
}());
export { CustomAvatarClothesGraphicsComponent };
if (false) {
    /** @type {?} */
    CustomAvatarClothesGraphicsComponent.prototype.graphicType;
    /** @type {?} */
    CustomAvatarClothesGraphicsComponent.prototype.clotheColor2;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhcGhpY3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctYXZhdGFhYXJzLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvY3VzdG9tLWF2YXRhci9hdmF0YXIvY2xvdGhlcy9ncmFwaGljcy9ncmFwaGljcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRTVEO0lBQUE7UUFRRSxnQkFBVyxHQUFnQixXQUFXLENBQUMsR0FBRyxDQUFDO0lBSTdDLENBQUM7O2dCQVpBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsOEJBQThCO29CQUN4QyxtM0NBQXdDO2lCQUN6Qzs7OzhCQUlFLEtBQUs7K0JBR0wsS0FBSzs7SUFFUiwyQ0FBQztDQUFBLEFBWkQsSUFZQztTQVBZLG9DQUFvQzs7O0lBRS9DLDJEQUMyQzs7SUFFM0MsNERBQzBCIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6Y29tcG9uZW50LXNlbGVjdG9yICovXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEdyYXBoaWNUeXBlLCBDbG90aGVDb2xvciB9IGZyb20gJy4uLy4uLy4uL29wdGlvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdba2lwLWN1c3RvbS1hdmF0YXItZ3JhcGhpY3NdJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZ3JhcGhpY3MuY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEN1c3RvbUF2YXRhckNsb3RoZXNHcmFwaGljc0NvbXBvbmVudCB7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ3JhcGhpY1R5cGU6IEdyYXBoaWNUeXBlID0gR3JhcGhpY1R5cGUuQmF0O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGNsb3RoZUNvbG9yMjogQ2xvdGhlQ29sb3I7XHJcbn1cclxuIl19