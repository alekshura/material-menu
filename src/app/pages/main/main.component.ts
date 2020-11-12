import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppRoutingService } from '@app/routing/app-routing.service';
import { MatBadge } from '@angular/material/badge';

import { ConfirmDialogComponent, InfoDialogComponent } from '@pages/shared';
import { MeComponent } from '@pages/me/me.component';
import { AuthorizationService } from '@app/core/services';
import { User } from '@app/dto/users';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  me: User;
  @ViewChild(MatBadge, { static: true }) badge: MatBadge;
  showNotifications: boolean = false;
  showSettings: boolean = false;
  constructor(
    private dialog: MatDialog,
    private appRoutingService: AppRoutingService,
    private authorizationService: AuthorizationService
  ) {}

  ngOnInit(): void {
    this.me = this.authorizationService.getUser();
  }

  showMe() {
    this.dialog.open(MeComponent, {
      id: 'mat-dialog-account',
      width: '400px',
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
      autoFocus: false,
    });
  }

  showInfo() {
    this.dialog.open(InfoDialogComponent, {
      data: {
        title: 'Your App Name.',
        message: `<b>App build version:</b> 1.0.0.`,
      },
    });
  }

  CanActivate(roles: string[]): boolean {
    if (roles.length == 0) {
      return true;
    }

    return true;
  }

  @HostListener('scroll') onScrollHost(e: Event): void {
    var offset = this.getYPosition(e);
    if (offset > 15)
      document.getElementById('toolbar').classList.add('mat-toolbar-shadow');
    else
      document.getElementById('toolbar').classList.remove('mat-toolbar-shadow');
  }

  private getYPosition(e: Event): number {
    return (e.target as Element).scrollTop;
  }
}
