import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CardCheckerComponent } from 'src/app/card-checker.component';


@Injectable()
export class CardService {
  
  constructor(private http: HttpClient) {
  }
  
  
  public getResult(card: String): Observable<any> {
    //let params = new HttpParams().set(this.var1: value, );
    console.log("Service");
    console.log(card);
    return this.http.get('//localhost:8080/ccCheck/' + card);
  }

}