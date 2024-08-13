import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { GroupUiModule } from '@group-ui/group-ui-angular';

import {
  TextSize,
  Weight,
} from '@group-ui/group-ui-angular/node_modules/@group-ui/group-ui/dist/types';

import {
  CardModule,
  FlatIconButtonModule,
  HeaderControlsBarModule,
  TagModule,
  TagVariant,
} from 'carplan-ui-components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CardModule,
    TagModule,
    FlatIconButtonModule,
    GroupUiModule,
    HeaderControlsBarModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'carplan-groupui-playground';

  theTypedTextSize: TextSize = 'caption';
  theTypedWeight: Weight = 'italic';

  label = 'Button';

  cardTitle = 'e-tron GT quattro';
  content =
    'Im Falle eines Problems wende dich bitte an das Audi Service Desk.';
  imgSrc = 'assets/images/placeholder.png';
  imgAlt = 'Placeholder image';
  tag_1 = 'Gen 1';
  tag_2 = 'PA';
  count = '3';
  variant = TagVariant.SIGNAL;

  menuClick = (event: Event) => {
    event.preventDefault();
    event.stopPropagation();
    window.alert('Menu clicked ... 🎉');
  };
}
