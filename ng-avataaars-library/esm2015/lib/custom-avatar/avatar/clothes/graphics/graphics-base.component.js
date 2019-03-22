/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Input } from '@angular/core';
import { ClotheColor, GraphicType } from '../../../options';
import { clotheColorTranslation } from '../../../colors/clothe-color-translation';
import { urlfix } from '../../../helper/urlfix';
export class CustomAvatarClothesGraphicsBaseComponent {
    constructor() {
        this._color2 = '';
        this.option = GraphicType.Bat;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set clotheColor2(value) {
        if (this._clotheColor2 !== value) {
            this._clotheColor2 = value;
            this._color2 = clotheColorTranslation(value);
        }
    }
    /**
     * @return {?}
     */
    get clotheColor2() {
        return this._clotheColor2;
    }
    /**
     * @return {?}
     */
    get color2() {
        return this._color2;
    }
    /**
     * @param {?} path
     * @return {?}
     */
    urlFix(path) {
        return urlfix(path);
    }
}
CustomAvatarClothesGraphicsBaseComponent.propDecorators = {
    clotheColor2: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhcGhpY3MtYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1hdmF0YWFhcnMtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9jdXN0b20tYXZhdGFyL2F2YXRhci9jbG90aGVzL2dyYXBoaWNzL2dyYXBoaWNzLWJhc2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RDLE9BQU8sRUFBVSxXQUFXLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDcEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDbEYsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRWhELE1BQU0sT0FBTyx3Q0FBd0M7SUFBckQ7UUFHVSxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBRXJCLFdBQU0sR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDO0lBcUIzQixDQUFDOzs7OztJQW5CQyxJQUNJLFlBQVksQ0FBQyxLQUFrQjtRQUNqQyxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssS0FBSyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDOUM7SUFDSCxDQUFDOzs7O0lBRUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsSUFBWTtRQUNqQixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QixDQUFDOzs7MkJBbEJBLEtBQUs7Ozs7Ozs7SUFMTixpRUFBbUM7Ozs7O0lBQ25DLDJEQUFxQjs7SUFFckIsMERBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT3B0aW9uLCBDbG90aGVDb2xvciwgR3JhcGhpY1R5cGUgfSBmcm9tICcuLi8uLi8uLi9vcHRpb25zJztcclxuaW1wb3J0IHsgY2xvdGhlQ29sb3JUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uL2NvbG9ycy9jbG90aGUtY29sb3ItdHJhbnNsYXRpb24nO1xyXG5pbXBvcnQgeyB1cmxmaXggfSBmcm9tICcuLi8uLi8uLi9oZWxwZXIvdXJsZml4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBDdXN0b21BdmF0YXJDbG90aGVzR3JhcGhpY3NCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgT3B0aW9uPEdyYXBoaWNUeXBlPiB7XHJcblxyXG4gIHByaXZhdGUgX2Nsb3RoZUNvbG9yMjogQ2xvdGhlQ29sb3I7XHJcbiAgcHJpdmF0ZSBfY29sb3IyID0gJyc7XHJcblxyXG4gIG9wdGlvbiA9IEdyYXBoaWNUeXBlLkJhdDtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgY2xvdGhlQ29sb3IyKHZhbHVlOiBDbG90aGVDb2xvcikge1xyXG4gICAgaWYgKHRoaXMuX2Nsb3RoZUNvbG9yMiAhPT0gdmFsdWUpIHtcclxuICAgICAgdGhpcy5fY2xvdGhlQ29sb3IyID0gdmFsdWU7XHJcbiAgICAgIHRoaXMuX2NvbG9yMiA9IGNsb3RoZUNvbG9yVHJhbnNsYXRpb24odmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGNsb3RoZUNvbG9yMigpIHtcclxuICAgIHJldHVybiB0aGlzLl9jbG90aGVDb2xvcjI7XHJcbiAgfVxyXG5cclxuICBnZXQgY29sb3IyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbG9yMjtcclxuICB9XHJcblxyXG4gIHVybEZpeChwYXRoOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB1cmxmaXgocGF0aCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==