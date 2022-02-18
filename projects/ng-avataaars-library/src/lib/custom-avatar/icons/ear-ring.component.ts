import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CustomAvatarIconBaseComponent } from './icon-base.component';

@Component({
  selector: 'kip-custom-avatar-icon-ear-ring',
  styleUrls: ['./icon-base.css'],
  templateUrl: './ear-ring.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarIconEarringComponent extends CustomAvatarIconBaseComponent {

}
