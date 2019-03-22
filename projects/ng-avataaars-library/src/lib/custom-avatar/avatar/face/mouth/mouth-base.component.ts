import { Option, MouthType } from '../../../options';
import { urlfix } from '../../../helper/urlfix';

export class MouthBaseComponent implements Option<MouthType> {

  option = MouthType.Concerned;

  urlFix(path: string) {
    return urlfix(path);
  }
}
