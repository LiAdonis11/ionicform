import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule]
})
export class RegistrationPage {
  currentStep = 1;
  progressValue = 0.33;
  passwordStrength = 0;
  passwordStrengthText = 'Weak';

  registrationData = {
    fullName: '',
    phone: '',
    email: '',
    password: '',
    country: 'us',
    newsletter: true,
    dob: '',
    highSchool: '',
    gradYear: '',
    gpa: '',
    course: '',
    campus: '',
    scholarship: false
  };

  constructor() {}

  nextStep() {
    this.currentStep++;
    this.progressValue = this.currentStep * 0.33;
  }

  checkPasswordStrength() {
    const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const mediumRegex = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{6,}$/;

    if (strongRegex.test(this.registrationData.password)) {
      this.passwordStrength = 3;
      this.passwordStrengthText = 'Strong';
    } else if (mediumRegex.test(this.registrationData.password)) {
      this.passwordStrength = 2;
      this.passwordStrengthText = 'Medium';
    } else if (this.registrationData.password.length >= 6) {
      this.passwordStrength = 1;
      this.passwordStrengthText = 'Weak';
    } else {
      this.passwordStrength = 0;
      this.passwordStrengthText = 'Weak';
    }
  }

  onSubmit() {
    console.log('Registration data:', this.registrationData);
   
  }
}
