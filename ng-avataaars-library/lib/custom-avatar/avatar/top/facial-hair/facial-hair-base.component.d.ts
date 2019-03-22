import { Option, FacialHairType, HairColor } from '../../../options';
export declare class CustomAvatarFacialHairBaseComponent implements Option<FacialHairType> {
    private _hairColor;
    private _color;
    option: FacialHairType;
    facialHairColor: HairColor;
    readonly color: any;
}
