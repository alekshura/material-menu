import { Component } from '@angular/core';
import { AppRoutingService } from '@app/routing/app-routing.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.sass']
})
export class LogoutComponent {

  constructor(private appRoutingService: AppRoutingService) { }

  goToLogon(){
    this.appRoutingService.goToLogon();
  }
}