import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../service/portfolio.service';
import { HomeInfo } from '../model/home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service: PortfolioService) { }
  
  home_Info: HomeInfo = new HomeInfo();
  
  ngOnInit(): void {
    this.getHomeInfo();
  }

  getHomeInfo() {
    this.service.getHomeInfo().subscribe({
      next: (data: HomeInfo) => {
        this.home_Info = data;
      },
      error: (err) => console.log(err)
    })
  }
}
