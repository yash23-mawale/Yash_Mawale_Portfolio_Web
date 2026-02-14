import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit, OnDestroy {
  displayedText = signal('');
  roles = ['Software Engineer', 'Java Developer', 'Full Stack Developer'];
  currentRoleIndex = 0;
  isDeleting = false;
  typingSpeed = 100;
  deletingSpeed = 50;
  pauseBetweenRoles = 2000;
  private typingTimeout: any;

  ngOnInit() {
    this.type();
  }

  ngOnDestroy() {
    clearTimeout(this.typingTimeout);
  }

  type() {
    const currentRole = this.roles[this.currentRoleIndex];
    const currentText = this.displayedText();

    if (this.isDeleting) {
      this.displayedText.set(currentRole.substring(0, currentText.length - 1));
      this.typingSpeed = this.deletingSpeed;
    } else {
      this.displayedText.set(currentRole.substring(0, currentText.length + 1));
      this.typingSpeed = 100;
    }

    if (!this.isDeleting && this.displayedText() === currentRole) {
      this.isDeleting = true;
      this.typingSpeed = this.pauseBetweenRoles;
    } else if (this.isDeleting && this.displayedText() === '') {
      this.isDeleting = false;
      this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
      this.typingSpeed = 500;
    }

    this.typingTimeout = setTimeout(() => this.type(), this.typingSpeed);
  }
}
