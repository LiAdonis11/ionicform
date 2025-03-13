import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';  

import { FormsModule, ReactiveFormsModule } from '@angular/forms';  

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule], 
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  
  fullName: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  ngOnInit() {}

  navigateToRegistration() {
    this.router.navigate(['/registration']);
  }

  
  navigateToSignin() {
    this.router.navigate(['/login']);
  }

  onSubmit() {
  
    console.log('Form submitted with:', this.fullName, this.email, this.password);
  }
}
