
import { Component, OnInit } from '@angular/core';
import { ListDataService } from '../../../core/service/listData.service';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})


export class DetailComponent implements OnInit {

  public currentId: any;
  public news: any;

  public currentUser: any;
  public userSubscription: Subscription;

  public currentCategory: any;

  public isLike: boolean = true;
  public isDislike: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private dataServ: ListDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.currentId = params['id'];
        this.currentCategory = params['rubrique'];
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

  addPonderation() {
    const addPonderation = 50;
    console.log(this.news);
  }

  removePonderation() {
    const removePonderation = 20;

  }

  onBack() {
    this.router.navigate(['/news/' + this.currentCategory]);
  }

  manageWeight(type) {
    if (type === 'like') {
      this.isLike = false;
      this.isDislike = true;
      this.dataServ.addWeight(this.currentId);
      console.log("Like Done");
    } else {
      this.dataServ.removeWeight(this.currentId);
      this.isLike = true;
      this.isDislike = false;
      console.log("Disike Done");
    }
  }
}

