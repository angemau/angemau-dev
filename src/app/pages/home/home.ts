import { Hero } from './sections/hero/hero';
import { AboutMe } from './sections/about-me/about-me';
import { Skills } from './sections/skills/skills';
import { Projects } from './sections/projects/projects';
import { Experience } from './sections/experience/experience';
import { Contact } from './sections/contact/contact';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [Hero, AboutMe, Skills, Projects, Experience, Contact],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
