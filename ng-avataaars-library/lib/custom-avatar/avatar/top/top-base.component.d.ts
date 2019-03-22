import { Option, TopType, FacialHairType, HairColor, HatColor, AccessoriesType, AccessoriesColor } from '../../options';
export declare class CustomAvatarTopBaseComponent implements Option<TopType> {
    private _hairColor;
    private _color;
    private _hatColor;
    private _color2;
    option: TopType;
    hairColor: HairColor;
    readonly color: string;
    hatColor: HatColor;
    readonly color2: string;
    facialHairType: FacialHairType;
    facialHairColor: HairColor;
    accessoriesType: AccessoriesType;
    accessoriesColor: AccessoriesColor;
    urlFix(path: string): string;
}
