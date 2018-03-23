import { Injectable } from '@angular/core';
import { ListDataService } from './listData.service';

@Injectable()
export class CategoriesService {

  public categories = [
    {id: 0, name: 'bandai', displayName: 'bandai namco', order: 0, picture: '', news: {}},
    {id: 1, name: 'manga', displayName: 'manga/anime', order: 1, picture: '', news: {}},
    {id: 2, name: 'mobile', displayName: 'mobile', order: 2, picture: '', news: {}},
    {id: 3, name: 'ivg', displayName: 'ivg', order: 3, picture: '', news: {}},
    {id: 4, name: 'favoris', displayName: 'favoris', order: 4, picture: '', news: {}},
  ];
  constructor(
    private listDataServ: ListDataService
  ) {

  }

  getCategories() {

    for (let index = 0; index < this.categories.length; index++) {
      const element = this.categories[index];

      if (element.name === 'bandai') {
        element.news = this.listDataServ.getNewsByCategory(element.name)[0];
      } else {
        if (this.listDataServ.getNewsByCategory(element.name).length > 0) {
          element.picture = this.listDataServ.getNewsByCategory(element.name)[0].picture;
        }
      }
    }
    return this.categories;
  }

  addCategories(cat) {
    this.categories.push(cat);
  }

  suppCategories(id) {
    // this.categories = this.categories.slice(id, 1);
    for (let index = 0; index < this.categories.length; index++) {
      const element = this.categories[index];
      if (index === id) {
          this.categories.splice(index, 1);
      }
      // element.order = index;
    }
  }



}


