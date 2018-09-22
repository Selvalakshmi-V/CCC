import { MatButtonModule, MatRadioModule, MatCheckboxModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PersonalComponent } from './personal/personal.component';
import { WorkComponent } from './work/work.component';
import { AddressComponent } from './address/address.component';
import { ResultComponent } from './result/result.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { FormDataService } from './data/formData.service';
import { WorkflowService } from './workflow/workflow.service';
import { SignupComponent } from './signup/signup.component';
import { OfferComponent } from './offer/offer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { IssueOffersComponent } from './issue-offers/issue-offers.component';
import { SelectUserComponent } from './select-user/select-user.component';
import { SendOfferComponent } from './send-offer/send-offer.component';
import { OrderReportComponent } from './order-report/order-report.component';
import { SendEmailComponent } from './send-email/send-email.component';
import { ActivateFormComponent } from './activate-form/activate-form.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProfileComponent } from './profile/profile.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { UserHistoryComponent } from './user-history/user-history.component';
import { ReportPriceListComponent } from './report-price-list/report-price-list.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AllReportComponent } from './all-report/all-report.component';
import { CardComponent } from './card/card.component';


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
    SelectUserComponent,
    SendOfferComponent,
    OrderReportComponent,
    SendEmailComponent,
    ActivateFormComponent,
    MainPageComponent,
    ProfileComponent,
    FirstPageComponent,
    UserHistoryComponent,
    ReportPriceListComponent,
    MyOrdersComponent,
    AllReportComponent,
    CardComponent
  ],
  imports: [
   
    
    BrowserModule,
    NgbModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    MatCardModule,
    MatTableModule,
    NgbModule,
    MatRadioModule,
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
