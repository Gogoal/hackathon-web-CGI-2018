
import { Component, OnInit } from '@angular/core';
import { ListDataService } from '../../../core/service/listData.service';
import { Subscription } from 'rxjs/Subscription';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls:  ['./list.component.scss']
})


export class ListComponent implements OnInit {

  public currentCategory: string;
  public imgBoolean = false;

  public currentUser: any;
  public userSubscription: Subscription;
  articles = [];


  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };

  constructor(
    private route: ActivatedRoute,
    private dataServ: ListDataService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.currentCategory = params['rubrique'];
        this.articles = this.dataServ.getNewsByCategory(this.currentCategory);
        console.log(this.articles);
      }
    );

    this.userSubscription = this.dataServ.getUser().subscribe(
      data => {
        if (data) {
          this.currentUser = data;
        }
      }
    );
  }

  // action triggered when user swipes
  swipe(currentIndex: number, action = this.SWIPE_ACTION.RIGHT) {
    // out of range

    if (currentIndex > this.articles.length || currentIndex < 0) {
        return;

    }

    const nextIndex = 0;

    // swipe right =>  j'aime le profil
    if (action === this.SWIPE_ACTION.RIGHT) {
      // const isLast = currentIndex === this.articles.length - 1;
      // nextIndex = isLast ? 0 : currentIndex + 1;

      alert('Actualité dans les favoris');

    }

    // swipe left => je n'aime pas le profil
    if (action === this.SWIPE_ACTION.LEFT) {
      // const isFirst = currentIndex === 0;
      // nextIndex = isFirst ? this.articles.length - 1 : currentIndex - 1;

      this.articles[currentIndex].visible = false;
    }

    // toggle article visibility
    // this.articles.forEach((x, i) => x.visible = (i === nextIndex));
  }

}
