import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences = [
    {
      role: 'Software Engineer',
      company: 'InnoShri Pvt. Ltd.',
      location: 'Pune, India',
      duration: 'July 2025 - Present',
      description: [
        'Developing and maintaining frontend applications using Angular, focusing on UI components, state management, and API integrations.',
        'Collaborating with backend teams for integration and ensuring smooth data flow between frontend and services.',
        'Actively building Java Spring Boot projects independently to enhance backend development skills.'
      ]
    },
    {
      role: 'Java Application Development (Intern)',
      company: 'NEXANOVA PROTECH',
      location: 'Pune',
      duration: 'Dec 2024 - Apr 2025',
      description: [
        'Worked on Java application development projects.',
        'Gained hands-on experience with Java technologies and frameworks.'
      ]
    },
    {
      role: 'Web Development (Intern)',
      company: 'ImagineScript Solution Pvt. Ltd.',
      location: 'Pune',
      duration: 'June 2024 - July 2024',
      description: [
        'Assisted in web development tasks.',
        'Contributed to project modules and bug fixing.'
      ]
    }
  ];
}
