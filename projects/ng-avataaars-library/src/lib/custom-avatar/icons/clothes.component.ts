import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CustomAvatarIconBaseComponent } from './icon-base.component';

@Component({
  selector: 'kip-custom-avatar-icon-clothes',
  styleUrls: ['./icon-base.css'],
  templateUrl: './clothes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarIconClothesComponent extends CustomAvatarIconBaseComponent {

}
