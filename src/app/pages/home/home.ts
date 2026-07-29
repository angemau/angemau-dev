import { Hero } from './sections/hero/hero';
import { AboutMe } from './sections/about-me/about-me';
import { Skills } from './sections/skills/skills';
import { Projects } from './sections/projects/projects';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [Hero, AboutMe, Skills, Projects],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
