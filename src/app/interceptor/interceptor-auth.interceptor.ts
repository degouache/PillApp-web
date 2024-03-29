import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class InterceptorAuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = this.authService.readToken();
    
    if (!token) {
      this.authService.logout();
    } else {
      request = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`),
      });
      if (!request.headers.has('Content-Type')) {
        request = request.clone({
          headers: request.headers.set('Content-Type', 'application/json'),
        });
      }
      request = request.clone({
        headers: request.headers.set('Accept', 'application/json'),
      });
    }
    return next.handle(request);
  }
}
