import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  education = [
    {
      degree: 'BE – CSE',
      year: '2024',
      score: '80.49 %',
      institution: 'Sant Gadge Baba Amaravati University'
    },
    {
      degree: 'HSC',
      year: '2020',
      score: '72.31 %',
      institution: 'Shree Samarth Jr. College Of Science, Akola'
    },
    {
      degree: 'SSC',
      year: '2018',
      score: '91.60 %',
      institution: 'Vikas Vidyalaya, Wadner G., Amaravati'
    }
  ];
}
