import { Option, AccessoriesType, AccessoriesColor } from '../../../options';
export declare class CustomAvatarAccessoriesBaseComponent implements Option<AccessoriesType> {
    private _accessoriesColor;
    private _color;
    option: AccessoriesType;
    accessoriesColor: AccessoriesColor;
    readonly color: any;
    urlFix(path: string): string;
}
