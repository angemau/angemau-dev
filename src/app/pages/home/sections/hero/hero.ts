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
  fullName = 'Ángela María López Moya';
  tech = ['Angular', 'Java', 'C#', '.NET', 'TypeScript', 'SQL Server'];
  badge = '8+';
}
