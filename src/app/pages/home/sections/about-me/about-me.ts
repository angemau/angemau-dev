import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css',
})
export class AboutMe {
  sectionNumber = '02';
}
