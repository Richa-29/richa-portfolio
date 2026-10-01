import { Component, signal } from '@angular/core';
import { HeroComponent } from './sections/hero/hero';
import { About } from './sections/about/about';
import { Projects } from './sections/projects/projects';
import { Skills } from './sections/skills/skills';
import { Contact } from './sections/contact/contact';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar';
import { WorkComponent } from './sections/work/work';

@Component({
  selector: 'app-root',
  imports: [HeroComponent, About, Projects, Skills, Contact, NavBarComponent, WorkComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
