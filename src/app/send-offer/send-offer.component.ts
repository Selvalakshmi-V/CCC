import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-offer',
  templateUrl: './send-offer.component.html',
  styleUrls: ['./send-offer.component.css']
})
export class SendOfferComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  sendOffers(value) {
    console.log('Offer Clicked', value);
  }

}
