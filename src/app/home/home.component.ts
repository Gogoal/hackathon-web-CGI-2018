import { Component } from '@angular/core';
import { ImagerComponent} from '../shared/component/imager/imager.component';
import { NewsService } from '../core/service/news.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls:  ['./home.component.scss']
})

export class HomeComponent {

  public bandai = 'assets/img/cat_bandai.jpg';
  public manga = 'assets/img/cat_manga.jpg';
  public mobile = 'assets/img/cat_mobile.jpg';

  public ivg = 'assets/img/cat_ivg.png';
  public fav = 'assets/img/cat_favoris.jpg';

    constructor(private newsServ: NewsService) {

      this.newsServ.getNews().subscribe(
        data => {
          console.log(data);
        },
        err => {
          console.log(err);
        }
      );



    }


}
