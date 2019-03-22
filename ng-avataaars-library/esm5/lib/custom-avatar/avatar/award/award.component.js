/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable:component-selector */
import { Component, Input } from '@angular/core';
import { AwardType, SkinColor, ClotheColor } from '../../options';
var CustomAvatarAwardComponent = /** @class */ (function () {
    function CustomAvatarAwardComponent() {
        this.awardType = AwardType.None;
    }
    CustomAvatarAwardComponent.decorators = [
        { type: Component, args: [{
                    selector: '[kip-custom-avatar-award]',
                    template: "<svg:g [ngSwitch]=\"awardType\">\r\n  <g *ngSwitchCase=\"'TrophyA'\" kip-custom-avatar-award-trophy-a />\r\n  <g *ngSwitchCase=\"'TrophyB'\" kip-custom-avatar-award-trophy-b />\r\n  <g *ngSwitchCase=\"'BirthdayA'\" kip-custom-avatar-award-birthday-a />\r\n  <g *ngSwitchCase=\"'BirthdayB'\" kip-custom-avatar-award-birthday-b />\r\n  <g *ngSwitchCase=\"'BirthdayC'\" kip-custom-avatar-award-birthday-c />\r\n  <g *ngSwitchCase=\"'BirthdayD'\" kip-custom-avatar-award-birthday-d />\r\n  <g *ngSwitchCase=\"'Correct'\" kip-custom-avatar-award-correct />\r\n  <g *ngSwitchCase=\"'Incorrect'\" kip-custom-avatar-award-incorrect />\r\n  <g *ngSwitchCase=\"'ThumbUp'\" kip-custom-avatar-award-thumb-up [skinColor]=\"skinColor\" [clotheColor]=\"clotheColor\" [clotheColor2]=\"clotheColor2\"  />\r\n</svg:g>\r\n"
                }] }
    ];
    CustomAvatarAwardComponent.propDecorators = {
        awardType: [{ type: Input }],
        skinColor: [{ type: Input }],
        clotheColor: [{ type: Input }],
        clotheColor2: [{ type: Input }]
    };
    return CustomAvatarAwardComponent;
}());
export { CustomAvatarAwardComponent };
if (false) {
    /** @type {?} */
    CustomAvatarAwardComponent.prototype.awardType;
    /** @type {?} */
    CustomAvatarAwardComponent.prototype.skinColor;
    /** @type {?} */
    CustomAvatarAwardComponent.prototype.clotheColor;
    /** @type {?} */
    CustomAvatarAwardComponent.prototype.clotheColor2;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXdhcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctYXZhdGFhYXJzLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvY3VzdG9tLWF2YXRhci9hdmF0YXIvYXdhcmQvYXdhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWxFO0lBQUE7UUFRRSxjQUFTLEdBQWMsU0FBUyxDQUFDLElBQUksQ0FBQztJQVV4QyxDQUFDOztnQkFsQkEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLCt5QkFBcUM7aUJBQ3RDOzs7NEJBSUUsS0FBSzs0QkFHTCxLQUFLOzhCQUdMLEtBQUs7K0JBR0wsS0FBSzs7SUFFUixpQ0FBQztDQUFBLEFBbEJELElBa0JDO1NBYlksMEJBQTBCOzs7SUFFckMsK0NBQ3NDOztJQUV0QywrQ0FDcUI7O0lBRXJCLGlEQUN5Qjs7SUFFekIsa0RBQzBCIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6Y29tcG9uZW50LXNlbGVjdG9yICovXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEF3YXJkVHlwZSwgU2tpbkNvbG9yLCBDbG90aGVDb2xvciB9IGZyb20gJy4uLy4uL29wdGlvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdba2lwLWN1c3RvbS1hdmF0YXItYXdhcmRdJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYXdhcmQuY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEN1c3RvbUF2YXRhckF3YXJkQ29tcG9uZW50IHtcclxuXHJcbiAgQElucHV0KClcclxuICBhd2FyZFR5cGU6IEF3YXJkVHlwZSA9IEF3YXJkVHlwZS5Ob25lO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNraW5Db2xvcjogU2tpbkNvbG9yO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGNsb3RoZUNvbG9yOiBDbG90aGVDb2xvcjtcclxuXHJcbiAgQElucHV0KClcclxuICBjbG90aGVDb2xvcjI6IENsb3RoZUNvbG9yO1xyXG59XHJcbiJdfQ==