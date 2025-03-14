import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';  
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,]  
})

export class LandingPage {

  constructor(private router: Router) {}

  navigateToLogin() {
    this.router.navigate(['/login']); 
  }

  navigateToSignup() {
    this.router.navigate(['/signup']);
  }
}