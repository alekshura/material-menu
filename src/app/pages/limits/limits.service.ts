import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { HttpErrorHandler, HandleError } from '@core/services/http-error-handler.service';
import { environment } from '@environments/environment';
import { Limit } from '@app/dto/limits';


@Injectable()
export class LimitsService {

  private readonly limitsUrl = `${environment.apiUrl}/api/limits`;
  private handleError: HandleError;


  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('LimitsService');
  }

  getLimits(): Observable<Limit[]> {
    return this.http.get<Limit[]>(`${this.limitsUrl}`)
      .pipe(
        catchError(this.handleError('getLimits', null))
    );
  }
}
