import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  sectionNumber = '03';

  frontendTags = ['Angular', 'TypeScript', 'RxJS', 'Ionic', 'HTML5', 'CSS3'];
  backendTags = ['Java · Spring Boot', 'C# · .NET', 'Apache Camel', 'ActiveMQ', 'REST APIs'];
  cloudTags = ['AWS', 'Azure', 'Docker', 'Git', 'SQL Server', 'Oracle'];
}
