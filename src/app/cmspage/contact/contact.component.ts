import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../contact';
import { CmspageService } from '../cmspage.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  model = new Contact();
  submitted = false;
  error: {};

  constructor(
    private router: Router,
    private cmspageService: CmspageService
  ) { }

  ngOnInit(): void {
  }

  gotoHome() {
    this.router.navigate(['/']);
  }

}
