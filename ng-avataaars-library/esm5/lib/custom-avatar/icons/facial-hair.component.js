/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CustomAvatarIconBaseComponent } from './icon-base.component';
var CustomAvatarIconFacialHairComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CustomAvatarIconFacialHairComponent, _super);
    function CustomAvatarIconFacialHairComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomAvatarIconFacialHairComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kip-custom-avatar-icon-facial-hair',
                    template: "<a (click)='select()' [ngClass]=\"{'kip-avatar-nav-link':true, 'active': currentIndex===index}\">\r\n  <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" height=\"30\"\r\n    width=\"33\">\r\n    <defs>\r\n      <path id=\"1-path-0\" opacity=\"1\" fill-rule=\"evenodd\"\r\n        d=\"M24.165217559686802,72.0716888623889 C30.039075146678506,72.0716888623889 35.5257120018946,69.85368369875816 40.02804807804521,65.6608681450626 C45.94211493021418,60.157439247975184 54.940728152146235,58.05701646307324 62.52540735065297,60.0736976514171 L91.51573673161202,67.76129092996452 C112.72750114225067,73.3324013913934 132.74565627016136,56.569169192719436 132.74565627016136,34.414354749895224 C132.74565627016136,15.434264532748843 117.923860151598,0 99.69694516555687,0 C93.87927038744299,0 88.17506285078827,1.5882224717076638 83.19682533473134,4.587433488161032 C77.835222769861,7.804602084697072 76.49069103975535,10.211312626873076 60.59701505769931,25.35707015230197 C47.44528047362195,38.15347439347135 28.02200214559415,43.236474590030866 10.344246575741213,38.45574714269126 C7.858983500674955,37.76688647511419 5.228856908600181,38.44714355400378 3.2117839075158217,40.08584041267796 C1.185897916803557,41.71536011008549 0,44.33716036944834 0,47.00025785451107 C0,53.99899046548143 2.6383887698509247,60.44365196497848 7.431002691870319,65.14866783186832 C11.925076590244787,69.55141094953824 18.025317848303033,72.0716888623889 24.165217559686802,72.0716888623889Z\" />\r\n      <path id=\"1-path-1\" opacity=\"1\" fill-rule=\"evenodd\"\r\n        d=\"M221.96946488674124,25.357070152302125 C206.26581899353755,10.399444432839237 204.25700817022945,7.866547923246935 198.82655412389147,4.596037076848539 C193.84060524191045,1.5882224717076738 188.13639770525603,0 182.31872292714246,0 C164.09180794110236,0 149.2700118225398,15.434264532748939 149.2700118225398,34.41435474989544 C149.2700118225398,56.609319273261335 169.35261193710335,73.36050644777295 190.508193538863,67.76186450254411 L220.05704613748824,60.07427122399664 C227.56901817156444,58.05759003565277 236.0570288069299,60.15801282055471 241.9870692027991,65.65341170153386 C246.48940527894945,69.85425727133777 251.97604213416525,72.07226243496852 257.8416375433805,72.07226243496852 C269.72650486844736,72.07226243496852 282.0151172808421,62.695497910780354 282.0151172808421,46.7823002744287 C282.0151172808421,44.118629216786786 280.82921936403864,41.60695489262359 278.8038841851782,39.97686162263688 C276.77854900631786,38.346768352650166 274.1241866927665,37.79212366859768 271.6714215169532,38.456320715270664 C254.0019281248774,43.23647459003114 235.1211994708179,38.15347439347158 221.96946488674124,25.357070152302125Z\" />\r\n      <path id=\"1-path-2\" opacity=\"1\" fill-rule=\"evenodd\"\r\n        d=\"M177.06838435627327,85.52540727929339 C165.94914550512948,84.30484483083046 155.54871612051085,79.44668508530359 147.43856241544125,71.08858546171238 C144.9918561699971,68.56486611338673 142.85746024449148,65.80999701565763 140.99461456189533,62.89338045060401 C133.02106219605807,75.40701341024504 119.86932761198122,83.72783081619053 104.82555431716582,85.36939553776052 C111.90458823577185,96.0837313165612 125.54929942715903,103.24306424969772 141.0078340463372,103.24306424969772 C156.38760257071607,103.24306424969772 169.9585049739696,96.1473978728485 177.06838435627327,85.52540727929339Z\" />\r\n      <path id=\"1-path-3\" opacity=\"1\" fill-rule=\"evenodd\"\r\n        d=\"M85.79390321582405,84.00257208159645 L57.89968941983567,76.75146753579361 C57.34281863772311,76.60004437489405 56.76997431190999,76.53293638313177 56.17289426462016,76.53293638313177 C54.27699987091944,76.53293638313177 52.356318943890265,77.26366784898788 51.041531053778805,78.49053959582163 C43.46511403304858,85.54835018244592 34.170164034879,89.27886623733451 24.1652175598122,89.27886623733451 C22.280339403146346,89.27886623733451 20.414188849439764,88.98806493969789 18.550792354991902,88.7116029565404 C17.229394722659535,93.40629451700522 16.524355552428005,98.29026502859448 16.524355552428005,103.24306424968351 C16.524355552428005,121.00488630868342 25.407849097345277,137.38841345995007 39.4149944871795,146.74854437934232 C35.26738124355183,154.41950405309387 33.048711104729485,163.12346794192146 33.048711104729485,172.07177374947327 C33.048711104729485,200.53760728084887 55.836348223204965,223.6933058743156 83.1725896133773,223.6933058743156 C84.98806547672348,223.6933058743156 86.79527916229353,223.59235710038263 88.586519304163,223.39103312509573 C97.98667436601558,244.42910175628563 118.23011154128835,258.1076606242105 141.00783404643246,258.1076606242105 C163.78555655157658,258.1076606242105 184.02899372684936,244.42910175628563 193.42914878870192,223.39103312509573 C195.2203889305714,223.59293067296176 197.02760261614145,223.6933058743156 198.84307847948762,223.6933058743156 C226.17931986966,223.6933058743156 248.96695698813545,200.53760728084887 248.96695698813545,172.07177374947327 C248.96695698813545,163.12346794192146 246.74828684931308,154.41950405309387 242.60067360568542,146.74854437934232 C256.60781899551966,137.38841345995007 265.4913125404369,121.00488630868344 265.4913125404369,103.24306424968351 C265.4913125404369,98.29542718180696 264.78957824131584,93.41604525085103 263.4709346682422,88.72651584359869 C261.5981743723147,89.00297782675618 259.71990595786974,89.2788662373345 257.84218835527656,89.2788662373345 C247.83724188020977,89.2788662373345 238.5422918820402,85.53974659375841 230.9576126835338,78.46530240233835 C229.6665097030473,77.27227143767533 227.73040604416934,76.53293638313176 225.82624947269247,76.53293638313176 C225.24514296910317,76.53293638313176 224.6965343647668,76.60004437489404 224.18042365968324,76.73483393099781 L196.22176487704087,84.00486637191311 C188.8877050710777,105.26605473639816 166.67897120878456,120.45024162463096 141.00783404643246,120.45024162463096 C115.33559526037689,120.45024162463096 93.12741220993544,105.26490759123985 85.79390321582405,84.00257208159645Z\" />\r\n    </defs>\r\n    <g opacity=\"1\" transform=\"scale(0.11)\">\r\n      <g opacity=\"1\">\r\n        <use xlink:href=\"#1-path-0\" [attr.fill]=\"avatarTabFillColor\" fill-opacity=\"1\" />\r\n      </g>\r\n      <g opacity=\"1\">\r\n        <use xlink:href=\"#1-path-1\" [attr.fill]=\"avatarTabFillColor\" fill-opacity=\"1\" />\r\n      </g>\r\n      <g opacity=\"1\">\r\n        <use xlink:href=\"#1-path-2\" [attr.fill]=\"avatarTabFillColor\" fill-opacity=\"1\" />\r\n      </g>\r\n      <g opacity=\"1\">\r\n        <use xlink:href=\"#1-path-3\" [attr.fill]=\"avatarTabFillColor\" fill-opacity=\"1\" />\r\n      </g>\r\n    </g>\r\n  </svg>\r\n</a>\r\n",
                    styles: [".kip-avatar-nav-link{display:block;padding:.15rem}"]
                }] }
    ];
    return CustomAvatarIconFacialHairComponent;
}(CustomAvatarIconBaseComponent));
export { CustomAvatarIconFacialHairComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjaWFsLWhhaXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctYXZhdGFhYXJzLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvY3VzdG9tLWF2YXRhci9pY29ucy9mYWNpYWwtaGFpci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXRFO0lBTXlELCtEQUE2QjtJQU50Rjs7SUFRQSxDQUFDOztnQkFSQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9DQUFvQztvQkFFOUMseW1OQUEyQzs7aUJBQzVDOztJQUlELDBDQUFDO0NBQUEsQUFSRCxDQU15RCw2QkFBNkIsR0FFckY7U0FGWSxtQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ3VzdG9tQXZhdGFySWNvbkJhc2VDb21wb25lbnQgfSBmcm9tICcuL2ljb24tYmFzZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdraXAtY3VzdG9tLWF2YXRhci1pY29uLWZhY2lhbC1oYWlyJyxcclxuICBzdHlsZVVybHM6IFsnLi9pY29uLWJhc2UuY3NzJ10sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2ZhY2lhbC1oYWlyLmNvbXBvbmVudC5odG1sJyxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDdXN0b21BdmF0YXJJY29uRmFjaWFsSGFpckNvbXBvbmVudCBleHRlbmRzIEN1c3RvbUF2YXRhckljb25CYXNlQ29tcG9uZW50IHtcclxuXHJcbn1cclxuIl19