import { Component, OnInit, Injector, Input } from '@angular/core';
import { of, Observable, timer } from 'rxjs';
import { delay } from 'rxjs/operators';
import { MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.sass']
})
export class SnackbarComponent implements OnInit {

  message: string;
  action: string;
  show: boolean = false;
  private duration: number = 3000;
  private cancelled: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  cancel() {
    this.show = false;
    this.cancelled = true;
  }

  isCancelled(): boolean {
    return this.cancelled;
  }

  open(message?: string | undefined, action?: string | undefined, config?: MatSnackBarConfig<any> | undefined, show = true): Observable<{}> {
    this.cancelled = false;
    this.message = message == undefined ? 'Zmiany zostały zapisane' : message;
    this.action = action == undefined ? 'Anuluj' : action;
    this.duration = config == undefined ? this.duration : config.duration;
    this.show = show;
    setTimeout(() => {
      this.show = false;
    }, this.duration);

    return of({}).pipe(delay(this.duration));
  }

  hide() {
    this.show = false;
  }

}
