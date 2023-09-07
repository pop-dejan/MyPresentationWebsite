import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../service/portfolio.service';
import { EducationInfo } from '../model/education';
import { CertificationInfo } from '../model/certification';
import { WorkInfo } from '../model/work';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
  
  constructor(private service: PortfolioService) {}

  education_Info: EducationInfo = new EducationInfo();
  certifications: CertificationInfo[] = [];
  works: WorkInfo[] = [];

  ngOnInit(): void {
    this.getEducationInfo();
    this.getCertificationInfo();
    this.getWorkInfo();
  }

  getEducationInfo() {
    this.service.getEducationInfo().subscribe({
      next: (data: EducationInfo) => {
        this.education_Info = data;
      },
      error: (err) => console.log(err),
    });
  }

  getCertificationInfo() {
    this.service.getCertificationInfo().subscribe({
      next: (data: any) => {
        this.certifications = data;
      },
      error: () => {
        console.log('Error');
      },
    });
  }

  getWorkInfo() {
    this.service.getWorkInfo().subscribe({
      next: (data: any) => {
        this.works = data;
      },
      error: () => {
        console.log('Error');
      },
    });
  }
}
