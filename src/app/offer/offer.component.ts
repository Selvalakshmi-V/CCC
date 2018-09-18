import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  title = 'Offer';
  percent;
  Question1;
  from;
  to;
  code;


  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToNext() {
    this.router.navigate(['/selectUser']);
  }

}
