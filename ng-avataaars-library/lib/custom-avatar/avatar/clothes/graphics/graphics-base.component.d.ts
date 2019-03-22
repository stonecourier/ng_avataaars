import { Option, ClotheColor, GraphicType } from '../../../options';
export declare class CustomAvatarClothesGraphicsBaseComponent implements Option<GraphicType> {
    private _clotheColor2;
    private _color2;
    option: GraphicType;
    clotheColor2: ClotheColor;
    readonly color2: string;
    urlFix(path: string): string;
}
