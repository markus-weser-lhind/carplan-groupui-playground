import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { GroupUiModule } from '@group-ui/group-ui-angular';

import {
  TextSize,
  Weight,
} from '@group-ui/group-ui-angular/node_modules/@group-ui/group-ui/dist/types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GroupUiModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'carplan-groupui-playground';

  theTypedTextSize: TextSize = 'caption';
  theTypedWeight: Weight = 'italic';
}
