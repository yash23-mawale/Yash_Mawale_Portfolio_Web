import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skillCategories = [
    {
      name: 'Languages',
      skills: ['C','Java', 'Java EE', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'SQL']
    },
    {
      name: 'Frameworks',
      skills: ['Spring Boot', 'Spring MVC', 'Hibernate', 'Angular']
    },
    {
      name: 'Databases',
      skills: ['SQL', 'PL/SQL', 'MySQL', 'JDBC']
    },
    {
      name: 'Tools & Concepts',
      skills: ['Git/GitHub', 'DSA (Java)', 'OOP', 'REST API', 'DBMS']
    }
  ];
}
