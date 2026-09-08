import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

interface ExperienceItem {
  period: string;
  company: string;
  roleKey: string;
  pointKeys: string[];
  stack: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  sectionNumber = '05';

  experienceItems: ExperienceItem[] = [
    {
      period: '2022 — 2026',
      company: 'Yuxi Global',
      roleKey: 'experience.e1role',
      pointKeys: ['experience.e1p1', 'experience.e1p2'],
      stack: 'Angular 14 · .NET · SQL Server',
    },
    {
      period: '2018 — 2021',
      company: 'Carvajal T&S',
      roleKey: 'experience.e2role',
      pointKeys: ['experience.e2p1'],
      stack: 'Angular · Ionic · Spring Boot',
    },
    {
      period: '2016 — 2018',
      company: 'Open Systems International',
      roleKey: 'experience.e3role',
      pointKeys: ['experience.e3p1', 'experience.e3p2'],
      stack: 'Java · Apache Camel · AWS',
    },
  ];
}
