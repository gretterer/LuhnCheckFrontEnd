import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CardCheckerComponent } from 'src/app/card-checker.component';


@Injectable()
export class CardService {

  constructor(private http: HttpClient) {
  }
  
  getResult(): Observable<any> {
    let params = new HttpParams().set('var1', this.value);
    return this.http.get('//localhost:8080/ccCheck/');
  }
}