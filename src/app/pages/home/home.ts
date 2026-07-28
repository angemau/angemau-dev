import { Hero } from './sections/hero/hero';
import { AboutMe } from './sections/about-me/about-me';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [Hero, AboutMe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
