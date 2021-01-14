import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {HandleError, HttpErrorHandler} from '../error.service';

@Injectable({
  providedIn: 'root'
})
export class OnlineShopService {

  entityUrl = environment.REST_API_URL + 'shop/getproducts';
  entityUrl1 = environment.REST_API_URL + 'shop/addtocart';

  private readonly handlerError: HandleError;

  constructor(private http: HttpClient, private httpErrorHandler: HttpErrorHandler) {
    this.handlerError = httpErrorHandler.createHandleError('OnlineShopService');
  }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.entityUrl)
      .pipe(
        catchError(this.handlerError('getProducts', []))
      );
  }
  addtoCart(prodInfo): Observable<any> {
    return this.http.post<any>(this.entityUrl1, prodInfo)
      .pipe(
        catchError(this.handlerError('addOwner', prodInfo))
      );
  }
}
