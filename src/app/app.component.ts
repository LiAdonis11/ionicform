import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { provideRouter, RouteReuseStrategy, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy } from '@ionic/angular/standalone';
import { routes } from './app.routes';  // Ensure to import the routes file
import { bootstrapApplication } from '@angular/platform-browser';
import { Router } from '@angular/router'; 
import { addIcons } from 'ionicons';
import { mailOutline, lockClosedOutline, arrowForward, logoGoogle, logoApple } from 'ionicons/icons';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],  // Import IonApp and IonRouterOutlet
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {
  constructor(private router: Router) {}
}

// Bootstrap the application
bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
});
addIcons({
  mailOutline,
  lockClosedOutline,
  arrowForward,
  logoGoogle,
  logoApple
});
