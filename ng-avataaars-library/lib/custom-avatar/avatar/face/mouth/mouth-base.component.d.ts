import { Option, MouthType } from '../../../options';
export declare class MouthBaseComponent implements Option<MouthType> {
    option: MouthType;
    urlFix(path: string): string;
}
