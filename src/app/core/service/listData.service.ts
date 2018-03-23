import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { Observer } from 'rxjs/Observer';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ListDataService {

  public news = [];
  public users = [];

  private subject: BehaviorSubject<any> = new BehaviorSubject<any>(this.users[0]);

  constructor(
    private http: Http
  ) {}

  getAllData(): Observable<any> {
    return Observable.create((observer: Observer<any>) => {
      const news = this.http.get('assets/data.json').map(response => response.json());
      const users = this.http.get('assets/users.json').map(response => response.json());

      Observable.forkJoin([
        news,
       users,
      ]).subscribe(
        (results) => {

        for (let  i = 0; i <  results[0].length; i++) {
          const element =  results[0][i];
          this.news.push(element);
        }

         for (let index = 0; index <  results[1].length; index++) {
          const element =  results[1][index];
          this.users.push(element);
        }

        observer.next(null);
        },
        (err) => {
          console.log(err);
          observer.error(err);
        },
        () => {
          this.subject.next(this.users[0]);
          observer.complete();
        }

      );

    });
  }

  getNewsByCategory(cat) {
    const tempData = [];
    for (let index = 0; index < this.news.length; index++) {
      const element = this.news[index];
      if (element.category === cat) {
        tempData.push(element);
      }
    }
    return tempData ;
  }

  getNewsById(id) {
    let tempData = {} ;
    for (let index = 0; index < this.news.length; index++) {
      const element = this.news[index];
      if (element.UID === id) {
        tempData = element;
      }
    }
    return tempData ;
  }

  setUser(value) {
    this.subject.next(this.users[value]);
  }

  getUser(): Observable<any>  {
    return this.subject.asObservable();
  }

  getAllUser() {
    return this.users;
  }


}


