import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { GuardGuard } from './guard/guard.guard';





const routes: Routes = [
  {
		path: "",
		redirectTo: "login",
		pathMatch: "full"
	},
  { path: 'login', component: LoginComponent },
  { path: 'main',
    canActivate: [ GuardGuard ],
    loadChildren: () => import('../app/main/main.module').then( m => m.MainModule) },
  { path: '**', component: LoginComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation:'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
