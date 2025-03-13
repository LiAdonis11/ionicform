import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';  
import { Router } from '@angular/router';  

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.page.html',
  styleUrls: ['./resetpassword.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]  
})
export class ResetpasswordPage implements OnInit {
  email: string = '';



    constructor(private router: Router) {}
  
    navigateToSignin() {
      this.router.navigate(['/login']);
    }

  ngOnInit() {}

  onSubmit() {
    console.log('Reset email sent to:', this.email);
  
  }
}
