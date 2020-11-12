import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@pages/pages.module.material';

import { AvatarComponent } from './avatar/avatar.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';

import { SnackbarComponent } from '@app/pages/shared/snackbar/snackbar.component';


@NgModule({
  declarations: [
    AvatarComponent,
    ConfirmDialogComponent,
    InfoDialogComponent,
    SnackbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    AvatarComponent,
    ConfirmDialogComponent,
    InfoDialogComponent,
    SnackbarComponent
  ]
})
export class SharedModule { }
