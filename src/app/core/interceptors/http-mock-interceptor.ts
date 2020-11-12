import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpResponse
} from '@angular/common/http';
import { environment } from '@environments/environment';
import { mockUrls } from 'src/app/mocks/mock-urls'
import { of } from 'rxjs';


@Injectable()
export class HttpMockInterceptor implements HttpInterceptor {

  private isMock = environment.apiUrl?.length === 0;

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {

    if (!this.isMock){
      return next.handle(request);
    }    

    for (const element of mockUrls) {
      if (request.url === element.url) {
          return of(new HttpResponse({ status: 200, body: ((element.json) as any).default }));
      }
    }
    
    if (request.method !== 'GET') {
      return of(new HttpResponse({ status: 200 }));
    }
  }
}