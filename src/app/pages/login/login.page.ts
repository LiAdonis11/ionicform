import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'; 
import { Router } from '@angular/router';  

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule] 
})
export class LoginPage implements OnInit {


  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  ngOnInit() {}

  navigateToRegistration() {
    this.router.navigate(['/registration']);
  }

 
  navigateToSignup() {
    this.router.navigate(['/signup']);
  }


  navigateToResetpassword() {
    this.router.navigate(['/resetpassword']);
  }

  onSubmit() {
 
    console.log('Email:', this.email);
    console.log('Password:', this.password);
 
  }
}
