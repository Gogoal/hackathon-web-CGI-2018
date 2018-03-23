import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Observer} from 'rxjs/Observer';
import { ListDataService } from './listData.service';


// Classe de récupération des données obligatoire de l'application.
// Permet de forcer la recuperation des données au moment du routing principal
@Injectable()
export class BaseDataResolver implements Resolve<any> {

  constructor(
      private http: Http,
      private listDataServ: ListDataService,
    ) { }

  resolve(): Observable<any> {
    return Observable.create((observer: Observer<any>) => {

        // les les donnée sont deja presente on ne fais rien
        // sinon on lance la récupération
        if (this.listDataServ.users.length > 1) {
            observer.next(null);
            observer.complete();
        } else {
            this.listDataServ.getAllData().subscribe (
                (data) => {
                    observer.next(null);

                },
                (err) => {
                    observer.error(err);
                },
                () => {
                    observer.complete();
                }
            );
        }
    });

  }
}


