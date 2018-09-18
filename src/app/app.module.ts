import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

/* Feature Components */
import { PersonalComponent } from './personal/personal.component';
import { WorkComponent } from './work/work.component';
import { AddressComponent } from './address/address.component';
import { ResultComponent } from './result/result.component';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

/* Shared Service */
import { FormDataService } from './data/formData.service';
import { WorkflowService } from './workflow/workflow.service';
import { SignupComponent } from './signup/signup.component';
import { OfferComponent } from './offer/offer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { IssueOffersComponent } from './issue-offers/issue-offers.component';
import { SelectUserComponent } from './select-user/select-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PersonalComponent,
    WorkComponent,
    AddressComponent,
    ResultComponent,
    SignupComponent,
    OfferComponent,
    HomePageComponent,
    IssueOffersComponent,
    SelectUserComponent 
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatCardModule,
    MatTableModule,
    NgbModule,
    RouterModule,
    MatInputModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule, MatCheckboxModule
  ],
  providers: [
    { provide: FormDataService, useClass: FormDataService },
    { provide: WorkflowService, useClass: WorkflowService }
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
