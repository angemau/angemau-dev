import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  tech = ['Angular', 'Java', 'C#', '.NET', 'TypeScript', 'AWS'];
  badge = '8+';
}
