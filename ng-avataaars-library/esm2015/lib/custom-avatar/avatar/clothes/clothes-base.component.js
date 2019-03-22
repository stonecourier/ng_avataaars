/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Input } from '@angular/core';
import { ClotheType, ClotheColor, GraphicType } from '../../options';
import { clotheColorTranslation } from '../../colors/clothe-color-translation';
import { urlfix } from '../../helper/urlfix';
export class CustomAvatarClothesBaseComponent {
    constructor() {
        this._color = '';
        this._color2 = '';
        this._color3 = '';
        this.option = ClotheType.BlazerShirt;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set clotheColor(value) {
        if (this._clotheColor !== value) {
            this._clotheColor = value;
            this._color = clotheColorTranslation(value);
        }
    }
    /**
     * @return {?}
     */
    get clotheColor() {
        return this._clotheColor;
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
     * @param {?} value
     * @return {?}
     */
    set clotheColor3(value) {
        if (this._clotheColor3 !== value) {
            this._clotheColor3 = value;
            this._color3 = clotheColorTranslation(value);
        }
    }
    /**
     * @return {?}
     */
    get clotheColor3() {
        return this._clotheColor3;
    }
    /**
     * @return {?}
     */
    get color() {
        return this._color;
    }
    /**
     * @return {?}
     */
    get color2() {
        return this._color2;
    }
    /**
     * @return {?}
     */
    get color3() {
        return this._color3;
    }
    /**
     * @param {?} path
     * @return {?}
     */
    urlFix(path) {
        return urlfix(path);
    }
}
CustomAvatarClothesBaseComponent.propDecorators = {
    clotheColor: [{ type: Input }],
    clotheColor2: [{ type: Input }],
    clotheColor3: [{ type: Input }],
    graphicType: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    CustomAvatarClothesBaseComponent.prototype._clotheColor;
    /**
     * @type {?}
     * @private
     */
    CustomAvatarClothesBaseComponent.prototype._color;
    /**
     * @type {?}
     * @private
     */
    CustomAvatarClothesBaseComponent.prototype._clotheColor2;
    /**
     * @type {?}
     * @private
     */
    CustomAvatarClothesBaseComponent.prototype._color2;
    /**
     * @type {?}
     * @private
     */
    CustomAvatarClothesBaseComponent.prototype._clotheColor3;
    /**
     * @type {?}
     * @private
     */
    CustomAvatarClothesBaseComponent.prototype._color3;
    /** @type {?} */
    CustomAvatarClothesBaseComponent.prototype.option;
    /** @type {?} */
    CustomAvatarClothesBaseComponent.prototype.graphicType;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdGhlcy1iYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWF2YXRhYWFycy1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2N1c3RvbS1hdmF0YXIvYXZhdGFyL2Nsb3RoZXMvY2xvdGhlcy1iYXNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0QyxPQUFPLEVBQVUsVUFBVSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDL0UsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRTdDLE1BQU0sT0FBTyxnQ0FBZ0M7SUFBN0M7UUFHVSxXQUFNLEdBQUcsRUFBRSxDQUFDO1FBRVosWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUViLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFFckIsV0FBTSxHQUFHLFVBQVUsQ0FBQyxXQUFXLENBQUM7SUF3RGxDLENBQUM7Ozs7O0lBdERDLElBQ0ksV0FBVyxDQUFDLEtBQWtCO1FBQ2hDLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxLQUFLLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3QztJQUNILENBQUM7Ozs7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFRCxJQUNJLFlBQVksQ0FBQyxLQUFrQjtRQUNqQyxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssS0FBSyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDOUM7SUFDSCxDQUFDOzs7O0lBRUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRUQsSUFDSSxZQUFZLENBQUMsS0FBa0I7UUFDakMsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLEtBQUssRUFBRTtZQUNoQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzlDO0lBQ0gsQ0FBQzs7OztJQUVELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDOzs7OztJQUtELE1BQU0sQ0FBQyxJQUFZO1FBQ2pCLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RCLENBQUM7OzswQkFyREEsS0FBSzsyQkFZTCxLQUFLOzJCQVlMLEtBQUs7MEJBd0JMLEtBQUs7Ozs7Ozs7SUF6RE4sd0RBQWtDOzs7OztJQUNsQyxrREFBb0I7Ozs7O0lBQ3BCLHlEQUFtQzs7Ozs7SUFDbkMsbURBQXFCOzs7OztJQUNyQix5REFBbUM7Ozs7O0lBQ25DLG1EQUFxQjs7SUFFckIsa0RBQWdDOztJQWtEaEMsdURBQ3lCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT3B0aW9uLCBDbG90aGVUeXBlLCBDbG90aGVDb2xvciwgR3JhcGhpY1R5cGUgfSBmcm9tICcuLi8uLi9vcHRpb25zJztcclxuaW1wb3J0IHsgY2xvdGhlQ29sb3JUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uL2NvbG9ycy9jbG90aGUtY29sb3ItdHJhbnNsYXRpb24nO1xyXG5pbXBvcnQgeyB1cmxmaXggfSBmcm9tICcuLi8uLi9oZWxwZXIvdXJsZml4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBDdXN0b21BdmF0YXJDbG90aGVzQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9wdGlvbjxDbG90aGVUeXBlPiB7XHJcblxyXG4gIHByaXZhdGUgX2Nsb3RoZUNvbG9yOiBDbG90aGVDb2xvcjtcclxuICBwcml2YXRlIF9jb2xvciA9ICcnO1xyXG4gIHByaXZhdGUgX2Nsb3RoZUNvbG9yMjogQ2xvdGhlQ29sb3I7XHJcbiAgcHJpdmF0ZSBfY29sb3IyID0gJyc7XHJcbiAgcHJpdmF0ZSBfY2xvdGhlQ29sb3IzOiBDbG90aGVDb2xvcjtcclxuICBwcml2YXRlIF9jb2xvcjMgPSAnJztcclxuXHJcbiAgb3B0aW9uID0gQ2xvdGhlVHlwZS5CbGF6ZXJTaGlydDtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgY2xvdGhlQ29sb3IodmFsdWU6IENsb3RoZUNvbG9yKSB7XHJcbiAgICBpZiAodGhpcy5fY2xvdGhlQ29sb3IgIT09IHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuX2Nsb3RoZUNvbG9yID0gdmFsdWU7XHJcbiAgICAgIHRoaXMuX2NvbG9yID0gY2xvdGhlQ29sb3JUcmFuc2xhdGlvbih2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgY2xvdGhlQ29sb3IoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY2xvdGhlQ29sb3I7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBjbG90aGVDb2xvcjIodmFsdWU6IENsb3RoZUNvbG9yKSB7XHJcbiAgICBpZiAodGhpcy5fY2xvdGhlQ29sb3IyICE9PSB2YWx1ZSkge1xyXG4gICAgICB0aGlzLl9jbG90aGVDb2xvcjIgPSB2YWx1ZTtcclxuICAgICAgdGhpcy5fY29sb3IyID0gY2xvdGhlQ29sb3JUcmFuc2xhdGlvbih2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgY2xvdGhlQ29sb3IyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Nsb3RoZUNvbG9yMjtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGNsb3RoZUNvbG9yMyh2YWx1ZTogQ2xvdGhlQ29sb3IpIHtcclxuICAgIGlmICh0aGlzLl9jbG90aGVDb2xvcjMgIT09IHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuX2Nsb3RoZUNvbG9yMyA9IHZhbHVlO1xyXG4gICAgICB0aGlzLl9jb2xvcjMgPSBjbG90aGVDb2xvclRyYW5zbGF0aW9uKHZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBjbG90aGVDb2xvcjMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY2xvdGhlQ29sb3IzO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbG9yKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbG9yO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbG9yMigpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb2xvcjI7XHJcbiAgfVxyXG5cclxuICBnZXQgY29sb3IzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbG9yMztcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ3JhcGhpY1R5cGU6IEdyYXBoaWNUeXBlO1xyXG5cclxuICB1cmxGaXgocGF0aDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdXJsZml4KHBhdGgpO1xyXG4gIH1cclxufVxyXG4iXX0=