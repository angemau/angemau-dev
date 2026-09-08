import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  sectionNumber = '04';

  p1Url = 'https://www.gatoblanco.music/';
  p1Stack = ['Web', 'Frontend', 'UI'];
}
