import { Component, ChangeDetectionStrategy } from '@angular/core';

interface ExperienceItem {
  period: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Experience {
  timeline: ExperienceItem[] = [
    {
      period: '2014 – 2023',
      title: 'Frontend Developer',
      description: '10 years building web applications, specializing in Angular across various product teams.'
    },
    {
      period: '2024 – Present',
      title: 'Career Break & Skill Refresh',
      description: 'Focused on personal priorities while staying current with Angular\'s evolving ecosystem — signals, standalone components, and modern patterns.'
    },
    {
      period: 'Present',
      title: 'Returning to Frontend Development',
      description: 'Actively seeking remote opportunities, backed by two production-quality projects built from scratch to demonstrate current, hands-on expertise.'
    }
  ];
}