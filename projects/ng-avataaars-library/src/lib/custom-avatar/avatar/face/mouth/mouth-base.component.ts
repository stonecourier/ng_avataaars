import { urlfix } from '../../../helper/urlfix';
import { MouthType, Option } from '../../../options';

export class MouthBaseComponent implements Option<MouthType> {

  get option(): MouthType { return MouthType.Concerned; }

  urlFix(path: string): string {
    return urlfix(path);
  }
}
