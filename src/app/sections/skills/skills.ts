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
      skills: ['Angular', 'TypeScript', 'Javascript', 'RxJS', 'Signals', 'SCSS', 'Reactive Forms', 'Standalone Components', 'NgRx',
                'HTML5', 'CSS3', 'SCSS']
    },
     {
      category: 'UI Libraries',
      skills: ['Angular Material', 'Bootstrap']
    },
    {
      category: 'State Management',
      skills: ['NgRx', 'RxJS', 'Signals', 'Reactive Forms']
    },
    {
      category: 'Architecture',
      skills: ['Component Design', 'Reusable Components', 'Lazy Loading', 'Route Guards', 'Standalone Components',
                'Performance Optimization', 'Dependency Injection', 'Http Interceptors', 'Route Guards']
    },
    {
      category: 'Testing',
      skills: ['Jasmine', 'Karma', 'Unit Testing']
    },
    {
      category: 'Tools',
      skills: ['Git', 'Github', 'Jira', 'Agile', 'Scrum', 'VS Code', 'Code Reviews', 'Angular CLI', 'Chrome DevTools', 'Vercel']
    },
    {
      category: 'AI assisted development',
      skills: ['Cursor', 'Claude']
    },
    {
      category: 'Leadership',
      skills: ['Team Leadership', 'Mentoring', 'Stakeholder Communication', 'Solution Design']
    },
  ];
}