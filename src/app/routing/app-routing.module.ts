import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from '@pages/main/main.component';
import { AppRoutingGuard } from '@app/routing/app-routing.guard';
import { LimitsListComponent } from '@app/pages/limits/limits-list/limits-list.component';
import { LogonComponent } from '@app/pages/logon/logon.component';
import { LogoutComponent } from '@app/pages/logout/logout.component';


const routes: Routes = [
  { path: '', component: LogonComponent},
  {
    path: 'me', component: MainComponent, children: [
      {
        path: 'home',
        component: LimitsListComponent,
        canActivate: [AppRoutingGuard]
      },      
    ]
  },
  { path: 'logout', component: LogoutComponent },
  // { path: '**', component: LogoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
