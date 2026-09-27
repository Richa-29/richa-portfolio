import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [],
  templateUrl: './work.html',
  styleUrl: './work.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkComponent {
  workProjects: WorkProject[] = [
    {
      company: 'Rsystems Int. Ltd. (Mobilize — Oil & Gas)',
      role: 'Senior Front-End Developer',
      duration: 'Aug 2022 – Feb 2026',
      description: 'A data-rich analytics platform for the oil and gas industry, providing real-time well operations visualization for drilling engineers and operations managers.',
      impact: [
        'Built interactive Highcharts dashboards visualizing drilling metrics — wellbore trajectory, BHA configuration, and directional drilling parameters',
        'Implemented NgRx store to manage deeply nested well data across multiple dashboard views without redundant API calls',
        'Designed reusable components for well cards, KPI tiles, and chart wrappers for consistent UX across the app'
      ],
      techStack: ['Angular 16-19', 'NgRx', 'RxJS', 'Highcharts', 'TypeScript']
    },
    {
      company: 'Eshopbox Ecommerce Pvt. Ltd.',
      role: 'Front-End Developer & Team Lead',
      duration: 'May 2021 – July 2022',
      description: 'An order-tracking platform for brand owners covering the full customer order lifecycle — analytics, sales metrics, and shipment tracking.',
      impact: [
        'Led a team of 5 front-end engineers, conducting code reviews and ensuring delivery standards',
        'Architected a centralized NgRx store for scalable state management across the application',
        'Built real-time data visualizations consolidating business KPIs into a dynamic dashboard'
      ],
      techStack: ['Angular 9', 'NgRx', 'RxJS', 'TypeScript']
    },
    {
      company: 'Policybazaar',
      role: 'Full-Stack Developer',
      duration: 'Aug 2018 – Dec 2020',
      description: 'Built multiple enterprise systems from scratch — including a Revenue Management System, Purchase Order System, and a Cost Invoicing ERP — handling everything from UI to database design.',
      impact: [
        'Designed and implemented role-based access control architecture across all modules',
        'Built an interactive dashboard with charting libraries for financial statistics and vendor insights',
        'Owned full-stack delivery, integrating Angular front-ends with C# Web APIs and SQL Server'
      ],
      techStack: ['Angular 6/7', 'TypeScript', 'C#', 'Web API', 'SQL Server']
    },
    {
      company: 'Iris Software Pvt. Ltd.',
      role: 'Developer',
      duration: 'Jul 2016 – Jul 2018',
      description: 'Contributed to financial and enterprise platforms including a municipal bonds transaction system and an HRMS for centralized employee management.',
      impact: [
        'Developed responsive Angular UI screens integrated with C# Web API services',
        'Wrote unit test cases and participated in cross-team code reviews',
        'Built an automated appraisal system integrated with the core HRMS module'
      ],
      techStack: ['Angular 2-4', 'AngularJS', 'C#', 'SQL Server']
    }
  ];
}