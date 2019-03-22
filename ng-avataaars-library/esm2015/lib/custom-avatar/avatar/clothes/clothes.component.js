/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable:component-selector */
import { Component, Input } from '@angular/core';
import { ClotheType, ClotheColor, GraphicType } from '../../options';
export class CustomAvatarClothesComponent {
}
CustomAvatarClothesComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-clothes]',
                template: "<svg:g [ngSwitch]=\"clotheType\">\r\n  <g *ngSwitchCase=\"'BlazerShirt'\" kip-custom-avatar-clothes-blazer-shirt [clotheColor]=\"clotheColor\"\r\n    [clotheColor2]=\"clotheColor2\" [clotheColor3]=\"clotheColor3\" />\r\n  <g *ngSwitchCase=\"'BlazerSweater'\" kip-custom-avatar-clothes-blazer-sweater [clotheColor]=\"clotheColor\"\r\n    [clotheColor2]=\"clotheColor2\" [clotheColor3]=\"clotheColor3\"/>\r\n  <g *ngSwitchCase=\"'CollarSweater'\" kip-custom-avatar-clothes-collar-sweater [clotheColor]=\"clotheColor\"\r\n    [clotheColor2]=\"clotheColor2\" />\r\n  <g *ngSwitchCase=\"'GraphicShirt'\" kip-custom-avatar-clothes-graphic-shirt [clotheColor]=\"clotheColor\"\r\n    [graphicType]=\"graphicType\" [clotheColor2]=\"clotheColor2\" />\r\n  <g *ngSwitchCase=\"'Hoodie'\" kip-custom-avatar-clothes-hoodie [clotheColor]=\"clotheColor\"\r\n    [clotheColor2]=\"clotheColor2\" />\r\n  <g *ngSwitchCase=\"'Overall'\" kip-custom-avatar-clothes-overall [clotheColor]=\"clotheColor\"\r\n    [clotheColor2]=\"clotheColor2\" />\r\n  <g *ngSwitchCase=\"'ShirtCrewNeck'\" kip-custom-avatar-clothes-shirt-crew-neck [clotheColor]=\"clotheColor\"\r\n    [clotheColor2]=\"clotheColor2\" />\r\n  <g *ngSwitchCase=\"'ShirtScoopNeck'\" kip-custom-avatar-clothes-shirt-scoop-neck [clotheColor]=\"clotheColor\"\r\n    [clotheColor2]=\"clotheColor2\" />\r\n  <g *ngSwitchCase=\"'ShirtVNeck'\" kip-custom-avatar-clothes-shirt-v-neck [clotheColor]=\"clotheColor\"\r\n    [clotheColor2]=\"clotheColor2\" />\r\n</svg:g>\r\n"
            }] }
];
CustomAvatarClothesComponent.propDecorators = {
    clotheType: [{ type: Input }],
    clotheColor: [{ type: Input }],
    clotheColor2: [{ type: Input }],
    clotheColor3: [{ type: Input }],
    graphicType: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CustomAvatarClothesComponent.prototype.clotheType;
    /** @type {?} */
    CustomAvatarClothesComponent.prototype.clotheColor;
    /** @type {?} */
    CustomAvatarClothesComponent.prototype.clotheColor2;
    /** @type {?} */
    CustomAvatarClothesComponent.prototype.clotheColor3;
    /** @type {?} */
    CustomAvatarClothesComponent.prototype.graphicType;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdGhlcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1hdmF0YWFhcnMtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9jdXN0b20tYXZhdGFyL2F2YXRhci9jbG90aGVzL2Nsb3RoZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT3JFLE1BQU0sT0FBTyw0QkFBNEI7OztZQUx4QyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsMCtDQUF1QzthQUN4Qzs7O3lCQUlFLEtBQUs7MEJBR0wsS0FBSzsyQkFHTCxLQUFLOzJCQUdMLEtBQUs7MEJBR0wsS0FBSzs7OztJQVpOLGtEQUN1Qjs7SUFFdkIsbURBQ3lCOztJQUV6QixvREFDMEI7O0lBRTFCLG9EQUMwQjs7SUFFMUIsbURBQ3lCIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6Y29tcG9uZW50LXNlbGVjdG9yICovXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENsb3RoZVR5cGUsIENsb3RoZUNvbG9yLCBHcmFwaGljVHlwZSB9IGZyb20gJy4uLy4uL29wdGlvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdba2lwLWN1c3RvbS1hdmF0YXItY2xvdGhlc10nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbG90aGVzLmNvbXBvbmVudC5odG1sJyxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDdXN0b21BdmF0YXJDbG90aGVzQ29tcG9uZW50IHtcclxuXHJcbiAgQElucHV0KClcclxuICBjbG90aGVUeXBlOiBDbG90aGVUeXBlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGNsb3RoZUNvbG9yOiBDbG90aGVDb2xvcjtcclxuXHJcbiAgQElucHV0KClcclxuICBjbG90aGVDb2xvcjI6IENsb3RoZUNvbG9yO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGNsb3RoZUNvbG9yMzogQ2xvdGhlQ29sb3I7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ3JhcGhpY1R5cGU6IEdyYXBoaWNUeXBlO1xyXG59XHJcbiJdfQ==