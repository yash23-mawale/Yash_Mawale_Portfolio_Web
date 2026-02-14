import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Student Attendance Management System',
      description: 'Built a system to track subject wise daily attendance, summarize student activity, and mark students as active or inactive. Trainers and coordinators can view attendance and performance summaries.',
      techStack: ['Java', 'Spring Boot', 'Hibernate', 'Angular', 'MySQL'],
      link: '#' // Add actual link if available
    },
    {
      title: 'Conference Room Booking Webapp',
      description: 'A web application with separate login paths for admin and users. Users can book conference rooms and view their bookings, while admins can manage rooms (add, modify) and view all user bookings.',
      techStack: ['Java', 'Java EE', 'Servlets', 'Hibernate', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
      link: '#'
    },
    {
      title: 'Employee Management System',
      description: 'A web-based system to manage employee records, roles, attendance, and performance. Admin can add, update, and remove employees, while users can view their profiles and track attendance.',
      techStack: ['Java', 'Spring Boot', 'Hibernate', 'Angular', 'MySQL'],
      link: '#'
    },
    {
      title: 'Bank Management System',
      description: 'Console based project for account creation, transactions, and balance management.',
      techStack: ['Java', 'OOP', 'JDBC', 'MySQL'],
      link: '#'
    },
    {
      title: 'Home Automation System',
      description: 'Automate and manage household appliances.',
      techStack: ['Java', 'OOP', 'JDBC', 'MySQL'],
      link: '#'
    },
    {
      title: 'Coin Collection Management',
      description: 'Tracked and categorized coins based on price and year of issue.',
      techStack: ['Java', 'OOP', 'JDBC', 'Collections', 'MySQL'],
      link: '#'
    }
  ];
}
