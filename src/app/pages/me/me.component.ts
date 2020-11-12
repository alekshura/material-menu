import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthorizationService } from '@app/core/services';
import { User } from '@app/dto/users';
import { AppRoutingService } from '@app/routing/app-routing.service';
import { ConfirmDialogComponent } from '../shared';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.sass']
})
export class MeComponent implements OnInit {

  show: boolean = false;
  user: User;
  currentProfile: User;

  constructor(private authorizationService: AuthorizationService, private dialog: MatDialog, private appRoutingService: AppRoutingService) { }

  ngOnInit(): void {
    this.user = this.authorizationService.getUser();
    this.currentProfile = this.user;
  }

  toogle() {
    this.show = !this.show;
  }

  logon() {
    this.authorizationService.logout().subscribe(() => {
      this.authorizationService.logon().subscribe(() =>
        this.appRoutingService.goToMain(true));
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Logout',
        message: 'Are you shure you want to logout from the console?',
      },
      id: 'mat-dialog-logout',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.appRoutingService.logout();
      }
    });
  }
}
