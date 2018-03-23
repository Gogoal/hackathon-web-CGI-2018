
import { Component, OnInit, Inject } from '@angular/core';
import { ImagerComponent} from '../shared/component/imager/imager.component';
import { ListDataService } from '../core/service/listData.service';
import { Subscription } from 'rxjs/Subscription';
import { CategoriesService } from '../core/service/categories.service';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { CatModalComponent } from './component/catModal/catModal.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  public categories = [];
  public mainCategory: any;

  public bandai = 'assets/img/cat_bandai.jpg';
  public manga = 'assets/img/cat_manga.jpg';
  public mobile = 'assets/img/cat_mobile.jpg';

  public ivg = 'assets/img/cat_ivg.png';
  public fav = 'assets/img/cat_favoris.jpg';
  public counter = 0;
  public opacity = 1;
  public boolBandai = false;
  public boolSheronGif = false;
  public boolSheronWish  = false;

  public users: any;
  public currentUser: any;
  public userSubscription: Subscription;

  constructor(
    private dataServ: ListDataService,
    private catServ: CategoriesService,
    public dialog: MatDialog,
    private router: Router,
  ) {}

  ngOnInit() {

    this.users = this.dataServ.getAllUser();
    this.userSubscription = this.dataServ.getUser().subscribe(
      data => {
        if (data) {
          this.currentUser = data;
          console.log(this.currentUser);
        }
      }
    );

    this.getCategories();

    console.log(this.categories);
  }

  onNav(cat) {
    this.router.navigate(['/news/' + cat.name + '/' ]);
  }

  userClick(user) {
    this.dataServ.setUser(user);
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

  openDialog(): void {
    const dialogRef = this.dialog.open(CatModalComponent, {
      width: '250px',
      data: {  }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      const tempData = {
        name: result,
        displayName: result,
        id: this.categories.length,
        order: this.categories.length,
        picture: '',
        news: ''
      };
      this.catServ.addCategories(tempData);
      this.getCategories();

    });
  }


  goHome() {
    // this.router.navigate(['news']);
    this.counter += 1;
    console.log(this.counter);
    if (this.counter === 3) {
      alert('Tu as trouvé 3 dragons balls !');
    }
  }

  goLanguage() {
    // this.router.navigate(['news']);
    this.counter += 1;
    console.log(this.counter);
    if (this.counter === 5) {
      alert('Tu as trouvé 5 dragons balls !');
    }
  }

  goBookmarks() {
    // this.router.navigate(['news']);
    this.counter += 1;
    console.log(this.counter);
    if (this.counter === 6) {
      alert('Tu as trouvé 6 dragons balls !');
    }
  }

  goAutorenew() {
    // this.router.navigate(['news']);
    this.counter += 1;
    console.log(this.counter);
    if (this.counter === 7) {
      this.boolBandai = true;

      setTimeout(function() {
        this.boolBandai = false;
        this.boolSheronGif = true;
      }.bind(this), 3000);

      setTimeout(function() {
        this.boolSheronGif = false;
        this.boolSheronWish = true;
      }.bind(this), 19000);

      setTimeout(function() {
        this.boolSheronWish = false;
      }.bind(this), 30000);
    }
  }



}

