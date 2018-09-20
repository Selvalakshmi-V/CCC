import { CardComponent } from './card/card.component';
import { AllReportComponent } from './all-report/all-report.component';
import { ReportPriceListComponent } from './report-price-list/report-price-list.component';
import { UserHistoryComponent } from './user-history/user-history.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { ProfileComponent } from './profile/profile.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ActivateFormComponent } from './activate-form/activate-form.component';
import { OrderReportComponent } from './order-report/order-report.component';
import { SendOfferComponent } from './send-offer/send-offer.component';
import { OfferComponent } from './offer/offer.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalComponent } from './personal/personal.component';
import { WorkComponent } from './work/work.component';
import { AddressComponent } from './address/address.component';
import { ResultComponent } from './result/result.component';

import { WorkflowGuard } from './workflow/workflow-guard.service';
import { WorkflowService } from './workflow/workflow.service';
import { SignupComponent } from './signup/signup.component';
import { HomePageComponent } from './home-page/home-page.component';
import { IssueOffersComponent } from './issue-offers/issue-offers.component';
import { SelectUserComponent } from './select-user/select-user.component';
import { SendEmailComponent } from './send-email/send-email.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';



export const appRoutes: Routes = [

  { path: 'offer', component: OfferComponent },
  { path: 'homePage', component: HomePageComponent },
  { path: 'issueOffers', component: IssueOffersComponent },
  { path: 'selectUser', component: SelectUserComponent },
  { path: 'sendOffer', component: SendOfferComponent },
  { path: 'orderReport', component: OrderReportComponent },
  { path: 'sendEmail', component: SendEmailComponent },
  { path: 'activateForm', component: ActivateFormComponent },
  { path: 'editProfile', component: MainPageComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'firstPage', component: FirstPageComponent },
  { path: 'userHistory', component: UserHistoryComponent },
  { path: 'reportPriceList', component: ReportPriceListComponent },
  { path: 'myOrders', component: MyOrdersComponent },
  { path: 'allReport', component: AllReportComponent },
  { path: 'card', component: CardComponent },
  {
    path: 'signup', component: SignupComponent, children: [
      { path: 'personal', component: PersonalComponent },

      { path: 'work', component: WorkComponent, canActivate: [WorkflowGuard] },

      { path: 'address', component: AddressComponent, canActivate: [WorkflowGuard] },

      { path: 'result', component: ResultComponent, canActivate: [WorkflowGuard] },
    ]
  },
  { path: '', redirectTo: 'signup/personal', pathMatch: 'full' },

  // { path: '**', component: PersonalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule],
  providers: [WorkflowGuard]
})

export class AppRoutingModule { }