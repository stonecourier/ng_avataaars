import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CustomAvatarIconBaseComponent } from './icon-base.component';

@Component({
  selector: 'kip-custom-avatar-icon-top',
  styleUrls: ['./icon-base.css'],
  templateUrl: './top.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarIconTopComponent extends CustomAvatarIconBaseComponent {

}
