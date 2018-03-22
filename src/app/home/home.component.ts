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

    //constructor(private router: Router) { }
  goHome() {
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
