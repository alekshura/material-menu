import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {

    request  = request.clone({
      withCredentials: true
    });
    
    return next.handle(request);
  }
}