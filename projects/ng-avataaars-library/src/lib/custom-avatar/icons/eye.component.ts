import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CustomAvatarIconBaseComponent } from './icon-base.component';

@Component({
  selector: 'kip-custom-avatar-icon-eye',
  styleUrls: ['./icon-base.css'],
  templateUrl: './eye.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarIconEyeComponent extends CustomAvatarIconBaseComponent {

}
