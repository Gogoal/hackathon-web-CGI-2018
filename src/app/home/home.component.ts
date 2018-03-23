import { Component, Inject } from '@angular/core';
import { ImagerComponent } from '../shared/component/imager/imager.component';
import { NewsService } from '../core/service/news.service';
import { Router } from "@angular/router";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  public bandai = 'assets/img/cat_bandai.jpg';
  public manga = 'assets/img/cat_manga.jpg';
  public mobile = 'assets/img/cat_mobile.jpg';

  public ivg = 'assets/img/cat_ivg.png';
  public fav = 'assets/img/cat_favoris.jpg';
  public counter : number = 0;
  public opacity : number = 1;
  public boolBandai : boolean = false;
  public boolSheronGif : boolean = false;
  public boolSheronWish : boolean = false;

  constructor(private newsServ: NewsService, public dialog: MatDialog) {

    this.newsServ.getNews().subscribe(
      data => {
        console.log(data);
       },
      err => {
          console.log(err);
      }
    );

  }


  goHome() {
    //this.router.navigate(['news']);
    this.counter += 1;
    console.log(this.counter);
    if(this.counter === 3) {
      alert("Tu as trouvé 3 dragons balls !");
    }
  }

  goLanguage() {
    //this.router.navigate(['news']);
    this.counter += 1;
    console.log(this.counter);
    if(this.counter === 5) {
      alert("Tu as trouvé 5 dragons balls !");
    }
  }

  goBookmarks() {
    //this.router.navigate(['news']);
    this.counter += 1;
    console.log(this.counter);
    if(this.counter === 6) {
      alert("Tu as trouvé 6 dragons balls !");
    }
  }

  goAutorenew() {
    //this.router.navigate(['news']);
    this.counter += 1;
    console.log(this.counter);
    if(this.counter === 7) {
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

  pickDataUser1() {
    //this.router.navigate(['news']);
  }

  pickDataUser2() {
    //this.router.navigate(['news']);
  }

  pickDataUser3() {
    //this.router.navigate(['news']);
  }


  // TODO ADD A DIALOG
  openDialog(): void {
    let dialogRef = this.dialog.open(HomeComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

// @Component({
//   selector: 'dialog-data-example-dialog',
//   templateUrl: 'dialog-data-example-dialog.html',
// })
// export class DialogDataExampleDialog {
//   constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
// }
