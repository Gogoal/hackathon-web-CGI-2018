import { Component, OnInit } from '@angular/core';
import { ImagerComponent} from '../shared/component/imager/imager.component';
import { ListDataService } from '../core/service/listData.service';
import { Subscription } from 'rxjs/Subscription';
import { CategoriesService } from '../core/service/categories.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls:  ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  public categories = [];
  public mainCategory: any;

  public bandai = 'assets/img/cat_bandai.jpg';
  public manga = 'assets/img/cat_manga.jpg';
  public mobile = 'assets/img/cat_mobile.jpg';

  public ivg = 'assets/img/cat_ivg.png';
  public fav = 'assets/img/cat_favoris.jpg';

  public currentUser: any;
  public userSubscription: Subscription;

  constructor(
    private dataServ: ListDataService,
    private catServ: CategoriesService
  ) {}

  ngOnInit() {
    this.userSubscription = this.dataServ.getUser().subscribe(
      data => {
        if (data) {
          this.currentUser = data;
        }
      }
    );

    this.getCategories();

    console.log(this.categories);
  }

  onNav() {

  }

  onSuppCat(id) {
    this.catServ.suppCategories(Number(id) + 1);
    this.getCategories();
  }

  getCategories() {
    const tempdata = this.catServ.getCategories();
    this.mainCategory = tempdata[0];
    this.categories = tempdata.slice(1);
  }


}
