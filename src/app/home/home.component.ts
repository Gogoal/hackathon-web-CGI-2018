import { Component } from '@angular/core';
import { ImagerComponent } from '../shared/component/imager/imager.component';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  public currentImage = 'https://media.vandalimg.com/common/1200x800/2008102350.jpg';

  constructor(private router: Router) { }

  goHome() {
    this.router.navigate(['news']);
  }
}
