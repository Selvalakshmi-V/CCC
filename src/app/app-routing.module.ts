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


export const appRoutes: Routes = [

  { path: 'offer', component: OfferComponent },
  { path: 'homePage', component: HomePageComponent },
  { path: 'issueOffers', component: IssueOffersComponent },
  { path: 'selectUser', component: SelectUserComponent },
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