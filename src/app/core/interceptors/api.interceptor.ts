import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export const apiInterceptor: HttpInterceptorFn = (req:HttpRequest<any>, next:HttpHandlerFn)
:Observable<HttpEvent<any>> => {
  const apiUrl = `${environment.API_URL}/${req.url}`;

  console.log('API URL:', apiUrl);

  const clonedRequest = req.clone({url:apiUrl})
  
  return next(clonedRequest);
};
