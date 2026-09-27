import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Projects {
  projects: Project[] = [
    {
      name: 'Hamper Catalogue',
      tagline: 'A full-featured e-commerce app for gift hampers',
      description: 'Built end-to-end with signal-based state management instead of NgRx, covering product catalogue, cart, wishlist, checkout, and mock authentication with route guards.',
      liveUrl: 'https://hamper-catalogue-app.vercel.app/',
      githubUrl: 'https://github.com/Richa-29/hamper-catalogue-app',
      techStack: ['Angular', 'Signals', 'RxJS', 'Reactive Forms', 'SCSS'],
      highlights: ['Signal Store (no NgRx)', 'Route Guards', '@defer Lazy Loading', 'Reusable Components']
    },
    {
      name: 'Employee Management System',
      tagline: 'An admin dashboard for managing employees, leaves, departments and roles',
      description: 'A role-based admin system with server-side pagination, debounced search, and department-wise leave approval workflows.',
      liveUrl: 'https://your-employee-app.vercel.app/',
      githubUrl: 'https://github.com/Richa-29/Employee-Management-System',
      techStack: ['Angular', 'RxJS', 'Reactive Forms', 'Signals'],
      highlights: ['Role-Based Access', 'Server-Side Pagination', 'Debounced Search', 'Signal-Based Charts']
    }
  ];
}