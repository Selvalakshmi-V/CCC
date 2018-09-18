import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { TempService } from './data/temp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  temp;

  constructor(private router: Router, private tempService: TempService) { 
    this.tempService.temp = true;
    this.temp = this.tempService.temp;
  }

  aa() {
    this.router.navigate(['/signup']);
  }

}
