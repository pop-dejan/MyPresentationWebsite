import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../service/portfolio.service';
import { AboutInfo, Media } from '../model/about';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private service: PortfolioService) {}

  about_Info: AboutInfo = new AboutInfo();
  about_Medias2: Media[] = []
  
  ngOnInit(): void {
    this.getAboutInfo();
  }

  getAboutInfo() {
    this.service.getAboutInfo().subscribe({
      next: (data: AboutInfo) => {
        this.about_Info = data;
        this.about_Medias2 = this.about_Info.medias.splice(3)
      },
      error: (err) => console.log(err)
    })
  }
}
