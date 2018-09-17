import { Component, OnInit } from '@angular/core';
import { TempService } from '../data/temp.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private tempService: TempService) {
   }

  ngOnInit() {
  }

}
