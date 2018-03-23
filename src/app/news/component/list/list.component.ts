
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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

  public users: any;
  public currentUser: any;
  public userSubscription: Subscription;
  articles = [];


  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };

  constructor(
    private route: ActivatedRoute,
    private dataServ: ListDataService,
    private ref: ChangeDetectorRef,
    private router: Router,
  ) {}

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.currentCategory = params['rubrique'];

        this.articles = this.dataServ.getNewsByCategory(this.currentCategory).sort(this.compare);
        console.log('>>> article', this.articles);
      }
    );

    this.userSubscription = this.dataServ.getUser().subscribe(
      data => {
        if (data) {
          this.users = this.dataServ.getAllUser();
          this.currentUser = data;

          console.log('>>> user', this.currentUser);

          const tempUserTag =  this.currentUser.tags;

          for (let index = 0; index < this.articles.length; index++) {
            const news = this.articles[index];

            const tempNewsTag = news.tags;

            for (let index2 = 0; index2 < tempNewsTag.length; index2++) {
              const newsTag = tempNewsTag[index2];

              for (let index3 = 0; index3 < tempUserTag.length; index3++) {
                const userTags = tempUserTag[index3];

                if (userTags.tag === newsTag) {
                    const temp = Number(news.community_weight) + Number(userTags.weight);
                    news.community_weight = temp;
                   this.dataServ.modifyNewsWeight(news.UID, news.community_weight);
                }



              }

            }

          }

        }

        console.log('>>>>> algo', this.articles);
        this.articles = this.dataServ.getNewsByCategory(this.currentCategory).sort(this.compare);
        this.ref.detectChanges();
      }
    );

  }

   compare(a, b) {
    if (a.community_weight > b.community_weight) {
      return -1;
    }
    if (a.community_weight < b.community_weight) {
      return 1;
    }
    return 0;
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

  userClick(user) {
    this.dataServ.setUser(user);
  }

  onNav(id) {
    this.router.navigate(['/news/' + this.currentCategory + '/' + id ]);
  }

}
