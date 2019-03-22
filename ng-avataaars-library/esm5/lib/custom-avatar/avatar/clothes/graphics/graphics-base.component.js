/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Input } from '@angular/core';
import { ClotheColor, GraphicType } from '../../../options';
import { clotheColorTranslation } from '../../../colors/clothe-color-translation';
import { urlfix } from '../../../helper/urlfix';
var CustomAvatarClothesGraphicsBaseComponent = /** @class */ (function () {
    function CustomAvatarClothesGraphicsBaseComponent() {
        this._color2 = '';
        this.option = GraphicType.Bat;
    }
    Object.defineProperty(CustomAvatarClothesGraphicsBaseComponent.prototype, "clotheColor2", {
        get: /**
         * @return {?}
         */
        function () {
            return this._clotheColor2;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._clotheColor2 !== value) {
                this._clotheColor2 = value;
                this._color2 = clotheColorTranslation(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomAvatarClothesGraphicsBaseComponent.prototype, "color2", {
        get: /**
         * @return {?}
         */
        function () {
            return this._color2;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} path
     * @return {?}
     */
    CustomAvatarClothesGraphicsBaseComponent.prototype.urlFix = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        return urlfix(path);
    };
    CustomAvatarClothesGraphicsBaseComponent.propDecorators = {
        clotheColor2: [{ type: Input }]
    };
    return CustomAvatarClothesGraphicsBaseComponent;
}());
export { CustomAvatarClothesGraphicsBaseComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CustomAvatarClothesGraphicsBaseComponent.prototype._clotheColor2;
    /**
     * @type {?}
     * @private
     */
    CustomAvatarClothesGraphicsBaseComponent.prototype._color2;
    /** @type {?} */
    CustomAvatarClothesGraphicsBaseComponent.prototype.option;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhcGhpY3MtYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1hdmF0YWFhcnMtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9jdXN0b20tYXZhdGFyL2F2YXRhci9jbG90aGVzL2dyYXBoaWNzL2dyYXBoaWNzLWJhc2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RDLE9BQU8sRUFBVSxXQUFXLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDcEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDbEYsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRWhEO0lBQUE7UUFHVSxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBRXJCLFdBQU0sR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDO0lBcUIzQixDQUFDO0lBbkJDLHNCQUNJLGtFQUFZOzs7O1FBT2hCO1lBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzVCLENBQUM7Ozs7O1FBVkQsVUFDaUIsS0FBa0I7WUFDakMsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLEtBQUssRUFBRTtnQkFDaEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDOUM7UUFDSCxDQUFDOzs7T0FBQTtJQU1ELHNCQUFJLDREQUFNOzs7O1FBQVY7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7Ozs7O0lBRUQseURBQU07Ozs7SUFBTixVQUFPLElBQVk7UUFDakIsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEIsQ0FBQzs7K0JBbEJBLEtBQUs7O0lBbUJSLCtDQUFDO0NBQUEsQUExQkQsSUEwQkM7U0ExQlksd0NBQXdDOzs7Ozs7SUFFbkQsaUVBQW1DOzs7OztJQUNuQywyREFBcUI7O0lBRXJCLDBEQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9wdGlvbiwgQ2xvdGhlQ29sb3IsIEdyYXBoaWNUeXBlIH0gZnJvbSAnLi4vLi4vLi4vb3B0aW9ucyc7XHJcbmltcG9ydCB7IGNsb3RoZUNvbG9yVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi9jb2xvcnMvY2xvdGhlLWNvbG9yLXRyYW5zbGF0aW9uJztcclxuaW1wb3J0IHsgdXJsZml4IH0gZnJvbSAnLi4vLi4vLi4vaGVscGVyL3VybGZpeCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ3VzdG9tQXZhdGFyQ2xvdGhlc0dyYXBoaWNzQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9wdGlvbjxHcmFwaGljVHlwZT4ge1xyXG5cclxuICBwcml2YXRlIF9jbG90aGVDb2xvcjI6IENsb3RoZUNvbG9yO1xyXG4gIHByaXZhdGUgX2NvbG9yMiA9ICcnO1xyXG5cclxuICBvcHRpb24gPSBHcmFwaGljVHlwZS5CYXQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGNsb3RoZUNvbG9yMih2YWx1ZTogQ2xvdGhlQ29sb3IpIHtcclxuICAgIGlmICh0aGlzLl9jbG90aGVDb2xvcjIgIT09IHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuX2Nsb3RoZUNvbG9yMiA9IHZhbHVlO1xyXG4gICAgICB0aGlzLl9jb2xvcjIgPSBjbG90aGVDb2xvclRyYW5zbGF0aW9uKHZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBjbG90aGVDb2xvcjIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY2xvdGhlQ29sb3IyO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbG9yMigpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb2xvcjI7XHJcbiAgfVxyXG5cclxuICB1cmxGaXgocGF0aDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdXJsZml4KHBhdGgpO1xyXG4gIH1cclxufVxyXG4iXX0=