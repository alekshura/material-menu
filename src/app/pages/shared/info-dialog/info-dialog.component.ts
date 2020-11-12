import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../confirm-dialog/confirm-dialog.component';


@Component({
    selector: 'info-dialog',
    templateUrl: 'info-dialog.component.html',
  })
  export class InfoDialogComponent {

      constructor(
        public dialogRef: MatDialogRef<InfoDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
        
  }