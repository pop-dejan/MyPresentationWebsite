import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../service/portfolio.service';
import { ProjectsInfo } from '../model/projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  
  constructor(private service: PortfolioService) {}

  projects_Info: ProjectsInfo = new ProjectsInfo();

  ngOnInit(): void {
    this.getProjectsInfo();
  }

  getProjectsInfo() {
    this.service.getProjectsInfo().subscribe({
      next: (data: ProjectsInfo) => {
        this.projects_Info = data;
      },
      error: (err) => console.log(err),
    });
  }
}
