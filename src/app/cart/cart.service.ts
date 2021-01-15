import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {HandleError, HttpErrorHandler} from '../error.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  entityUrl = environment.REST_API_URL + 'shop/ordersummary';
  entityUrl1 = environment.REST_API_URL + 'shop/clearcart';

  private readonly handlerError: HandleError;

  constructor(private http: HttpClient, private httpErrorHandler: HttpErrorHandler) {
    this.handlerError = httpErrorHandler.createHandleError('CartService');
  }

  orderSummary(): Observable<any[]> {
    return this.http.get<any[]>(this.entityUrl)
      .pipe(
        catchError(this.handlerError('orderSummary', []))
      );
  }
  clearCart(): Observable<any[]> {
    return this.http.delete<any[]>(this.entityUrl1)
      .pipe(
        catchError(this.handlerError('clearCart', []))
      );
  }
}
