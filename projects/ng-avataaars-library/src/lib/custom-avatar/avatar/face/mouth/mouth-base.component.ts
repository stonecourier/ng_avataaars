import { Option, MouthType } from '../../../options';
import { urlfix } from '../../../helper/urlfix';

export class MouthBaseComponent implements Option<MouthType> {

  get option() { return MouthType.Concerned; }

  urlFix(path: string) {
    return urlfix(path);
  }
}
