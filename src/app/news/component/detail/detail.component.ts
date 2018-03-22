import { Component } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls:  ['./detail.component.scss']
})

export class DetailComponent {

  public news = {
    'title': 'DRAGON BALL FighterZ (title)',
    'subtitle': 'True Power Knows No Limits ! (auteur + category + date)',
    'picture':'http://i2.wp.com/shoryuken.com/wp-content/uploads/2017/10/dragon_ball_fighterz_cover_750.jpg',
    'description':'(summary) After the success of the Xenoverse series, it’s time to introduce a new classic 2D DRAGON BALL fighting game for this generation’s consoles. DRAGON BALL FighterZ is born from what makes the DRAGON BALL series so loved and famous: endless spectacular fights with its allpowerful fighters. Partnering with Arc System Works, DRAGON BALL FighterZ maximizes high end Anime graphics and brings easy to learn but difficult to master fighting gameplay to audiences worldwide.'
  }

    constructor() {

    }
}
