import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from '@app/core/services/authorization.service';

// Define here routing for the App
@Injectable()
export class AppRoutingService {

  private meRoute: string = "me";

  constructor(private router: Router,
    private authenticationService: AuthorizationService) {

  }

  logout() {
    this.authenticationService.logout().subscribe();
    this.router.navigate(["logout"]);
  }

  goToLogon(refresh?: boolean) {
    this.router.navigate([``]);
  }

  unathorized() {
    this.router.navigate([`401`]);
  }

  goToMain(refresh?: boolean) {
    this.router.navigate([`${this.meRoute}/home`]);
  } 
  
  // Define and use in application routing for menu injecting app-routing.service in youe components
  goToMenu1(refresh?: boolean) {
    this.router.navigate([`${this.meRoute}/menu1`]);
  }
}
