import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { MainComponent } from './main.component';
import { ListComponent } from './articlelist/list/list.component';
import { NeweditsComponent } from './articlelist/newedits/newedits.component';
import { WelcomeComponent } from './articlelist/welcome/welcome.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'list', component: ListComponent },
      { path: 'edit', component: NeweditsComponent},
      { path: '**', component: WelcomeComponent},
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
