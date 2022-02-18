import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CustomAvatarIconBaseComponent } from './icon-base.component';

@Component({
  selector: 'kip-custom-avatar-icon-accessories',
  styleUrls: ['./icon-base.css'],
  templateUrl: './accessories.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarIconAccessoriesComponent extends CustomAvatarIconBaseComponent {

}
