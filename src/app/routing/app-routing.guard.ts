import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthorizationService } from '@app/core/services/authorization.service';
import { AppRoutingService } from './app-routing.service';

@Injectable()
export class AppRoutingGuard implements CanActivate {
    constructor(
        private appRoutingService: AppRoutingService,
        private authorizationService: AuthorizationService
    ) { }

    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {

        // TODO Permission check
        return true;
    }
}
