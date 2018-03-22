import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls:  ['./list.component.scss']
})

export class ListComponent {
  constructor() {}

  articles = [{
    title: 'DBZ',
    date: 'LE 22 MARS 2018',
    picture: 'une photo badass',
    summary: 'Lorem ipsum ipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsum',
    visible: true
  }, {
    title: 'Witcher',
    date: 'LE 1000',
    picture: 'une autre photo badass',
    summary: 'Lorem ipsum',
    visible: true
  }, {
    title: 'TEST YOLO',
    date: 'LE 1000',
    picture: 'une autre photo badass',
    summary: 'Lorem ipsum',
    visible: true
  }, {
    title: 'TEST YOLO',
    date: 'LE 1000',
    picture: 'une autre photo badass',
    summary: 'Lorem ipsum',
    visible: true
  }, {
    title: 'TEST YOLO',
    date: 'LE 1000',
    picture: 'une autre photo badass',
    summary: 'Lorem ipsum',
    visible: true
  }];

  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };

  // action triggered when user swipes
  swipe(currentIndex: number, action = this.SWIPE_ACTION.RIGHT) {
    // out of range
    if (currentIndex > this.articles.length || currentIndex < 0){
        return;
    }

    let nextIndex = 0;

    // swipe right =>  j'aime le profil
    if (action === this.SWIPE_ACTION.RIGHT) {
      // const isLast = currentIndex === this.articles.length - 1;
      // nextIndex = isLast ? 0 : currentIndex + 1;
      if (JSON.parse(localStorage.getItem('articles_favoris')) !== null) {
        var values = JSON.parse(localStorage.getItem('articles_favoris'));

        // TODO DON'T SET NEW ITEM IF IS ALREADY INSIDE OBJECT
        values.push(this.articles[currentIndex]);
        localStorage.setItem('articles_favoris', JSON.stringify(values));
      } else {
        localStorage.setItem('articles_favoris', JSON.stringify([this.articles[currentIndex]]));
      };

      alert("Actualité dans les favoris");
    }

    // swipe left => je n'aime pas le profil
    if (action === this.SWIPE_ACTION.LEFT) {
      // const isFirst = currentIndex === 0;
      // nextIndex = isFirst ? this.articles.length - 1 : currentIndex - 1;
      if (JSON.parse(localStorage.getItem('articles_favoris')) !== null) {
        var values = JSON.parse(localStorage.getItem('articles_favoris'));

        // TODO REMOVE THE RIGHT ID AND SET ONLY IF IS NOT EMPTY
        console.log("test");
      } else {
        console.log("test");
      };

      this.articles[currentIndex].visible = false;
    }

    // toggle article visibility
    // this.articles.forEach((x, i) => x.visible = (i === nextIndex));
  }

}
