import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CustomAvatarIconBaseComponent } from './icon-base.component';

@Component({
  selector: 'kip-custom-avatar-icon-eye-brow',
  styleUrls: ['./icon-base.css'],
  templateUrl: './eye-brow.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarIconEyeBrowComponent extends CustomAvatarIconBaseComponent {

}
