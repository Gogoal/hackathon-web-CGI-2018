import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class NewsService {

  constructor(private http: Http) {

  }

  getNews(): Observable<any> {
    console.log('getRubriques');
    return this.http.get('assets/data.json')
    .mergeMap((data) => data.json());
  }


}

