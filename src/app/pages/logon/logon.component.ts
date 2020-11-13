import { Component, OnInit } from '@angular/core';
import { AppRoutingService } from '@app/routing/app-routing.service';
import { AuthorizationService } from '@app/core/services';
import { timer } from 'rxjs';

@Component({
  selector: 'app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.sass'],
})
export class LogonComponent implements OnInit {
  showProgressBar: boolean = true;

  constructor(
    private appRoutingService: AppRoutingService,
    private authorizationService: AuthorizationService
  ) {}

  ngOnInit() {
    // TODO write your logic here: app setup, auth, etc.
    this.authorizationService.logon().subscribe(user =>{
      timer(2000).subscribe(x => {
        this.authorizationService.setUser(user);
        this.showProgressBar = false;
        this.appRoutingService.goToMain();
      });
    });
  }
}
