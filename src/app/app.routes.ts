import { Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';

export const routes: Routes = [
    { path: 'hero', component: HeroComponent },
    { path: '', redirectTo: 'hero', pathMatch: 'full' },
    { path: '**', redirectTo: 'hero' }
];
