import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  sectionNumber = '06';
  email = 'info@angemau.dev';
  linkedInUrl = 'https://www.linkedin.com/in/angela-maria-lopez-dev/';
  githubUrl = 'https://github.com/angemau';
}
