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
  // angular 8.0 版本之后 的路由懒加载写法  为了遵循import() 标准
  { path: 'main',
    canActivate: [ GuardGuard ],
    loadChildren: () => import('../app/main/main.module').then( m => m.MainModule) },
  { path: '**', component: LoginComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
