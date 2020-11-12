import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
    title: string;
    message: string;
  }

@Component({
    selector: 'confirm-dialog',
    templateUrl: 'confirm-dialog.component.html',
  })
  export class ConfirmDialogComponent {

      constructor(
        public dialogRef: MatDialogRef<ConfirmDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

      
        close() {
          this.dialogRef.close();
        }
        
  }