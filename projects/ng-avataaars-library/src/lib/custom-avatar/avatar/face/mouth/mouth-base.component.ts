import { MouthType, Option } from '../../../options';

export class MouthBaseComponent implements Option<MouthType> {

  get option(): MouthType { return MouthType.Concerned; }

}
