import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Skills {
  skillGroups: SkillGroup[] = [
    {
      category: 'Frontend',
      skills: ['Angular', 'TypeScript', 'Javascript', 'RxJS', 'Signals', 'SCSS', 'Reactive Forms', 'Standalone Components', 'NgRx']
    },
    {
      category: 'Concepts',
      skills: ['Component Architecture', 'State Management', 'Responsive Design', 'Performance Optimization']
    },
    {
      category: 'Tools',
      skills: ['Git', 'VS Code', 'Chrome DevTools', 'Vercel']
    }
  ];
}