import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { HomeInfo } from '../model/home';
import { AboutInfo } from '../model/about';
import { EducationInfo } from '../model/education';
import { CertificationInfo } from '../model/certification';
import { WorkInfo } from '../model/work';
import { ProjectsInfo } from '../model/projects';
import { ContactInfo } from '../model/contact';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http: HttpClient) {}

  getHomeInfo(): Observable<HomeInfo> {
    return this.http.get("https://portfolio-b25de-default-rtdb.europe-west1.firebasedatabase.app/home.json").pipe(map((data: any) => {
      return new HomeInfo(data);
    }))
  }

  getAboutInfo(): Observable<AboutInfo> {
    return this.http.get("https://portfolio-b25de-default-rtdb.europe-west1.firebasedatabase.app/about.json").pipe(map((data: any) => {
      return new AboutInfo(data);
    }))
  }

  getEducationInfo(): Observable<EducationInfo> {
    return this.http.get("https://portfolio-b25de-default-rtdb.europe-west1.firebasedatabase.app/education.json").pipe(map((data: any) => {
      return new EducationInfo(data);
    }))
  }

  getCertificationInfo(): Observable<CertificationInfo[]> {
    return this.http.get("https://portfolio-b25de-default-rtdb.europe-west1.firebasedatabase.app/certification.json").pipe(
      map((data: any) => {
        return data.map((elem: any) => new CertificationInfo(elem));
      })
    );
  }

  getWorkInfo(): Observable<WorkInfo[]> {
    return this.http.get("https://portfolio-b25de-default-rtdb.europe-west1.firebasedatabase.app/work.json").pipe(
      map((data: any) => {
        return data.map((elem: any) => new WorkInfo(elem));
      })
    );
  }

  getProjectsInfo(): Observable<ProjectsInfo> {
    return this.http.get("https://portfolio-b25de-default-rtdb.europe-west1.firebasedatabase.app/projects.json").pipe(map((data: any) => {
      return new ProjectsInfo(data);
    }))
  }

  getContactInfo(): Observable<ContactInfo> {
    return this.http.get("https://portfolio-b25de-default-rtdb.europe-west1.firebasedatabase.app/contact.json").pipe(map((data: any) => {
      return new ContactInfo(data);
    }))
  }
}
