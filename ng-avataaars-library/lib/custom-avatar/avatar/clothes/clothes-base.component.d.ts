import { Option, ClotheType, ClotheColor, GraphicType } from '../../options';
export declare class CustomAvatarClothesBaseComponent implements Option<ClotheType> {
    private _clotheColor;
    private _color;
    private _clotheColor2;
    private _color2;
    private _clotheColor3;
    private _color3;
    option: ClotheType;
    clotheColor: ClotheColor;
    clotheColor2: ClotheColor;
    clotheColor3: ClotheColor;
    readonly color: string;
    readonly color2: string;
    readonly color3: string;
    graphicType: GraphicType;
    urlFix(path: string): string;
}
