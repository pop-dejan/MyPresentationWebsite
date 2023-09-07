import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../service/portfolio.service';
import { ContactInfo } from '../model/contact';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private service: PortfolioService) {}

  contact_Info: ContactInfo = new ContactInfo();
  
  ngOnInit(): void {
    this.getContactInfo();
  }

  getContactInfo() {
    this.service.getContactInfo().subscribe({
      next: (data: ContactInfo) => {
        this.contact_Info = data;
      },
      error: (err) => console.log(err)
    })
  }
}
