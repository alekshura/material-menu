import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from '@app/core/services/authorization.service';

// Here we define routing for the App
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
}
