import { urlfix } from '../../../helper/urlfix';
import { MouthType, Option } from '../../../options';

export class MouthBaseComponent implements Option<MouthType> {

  get option() { return MouthType.Concerned; }

  urlFix(path: string) {
    return urlfix(path);
  }
}
