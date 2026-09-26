import { Component, ChangeDetectionStrategy } from '@angular/core';

interface SkillGroup {
  category: string;
  skills: string[];
}

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
      skills: ['Angular', 'TypeScript', 'RxJS', 'Signals', 'SCSS', 'Reactive Forms']
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