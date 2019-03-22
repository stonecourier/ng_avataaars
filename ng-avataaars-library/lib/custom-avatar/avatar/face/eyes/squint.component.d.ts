import { Option, EyeType } from '../../../options';
export declare class CustomAvatarEyesSquintComponent implements Option<EyeType> {
    option: EyeType;
    mask1: string;
    mask2: string;
    path1: string;
    path2: string;
    urlFix(path: string): string;
}
