import { Hero } from './sections/hero/hero';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [Hero],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
