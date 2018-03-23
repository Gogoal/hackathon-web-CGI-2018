import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListDataService } from '../../../core/service/listData.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls:  ['./detail.component.scss']
})

export class DetailComponent implements OnInit {

  public currentId: any;
  public news: any;

  public currentUser: any;
  public userSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private dataServ: ListDataService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.currentId = params['id'];
        this.news = this.dataServ.getNewsById(this.currentId);
      }
    );

    this.userSubscription = this.dataServ.getUser().subscribe(
      data => {
        if (data) {
          this.currentUser = data;
        }
      }
    );
  }
}
