import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';                 // 双向数据绑定模块
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';

import { UMeditorModule } from 'ngx-umeditor';


import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { ListComponent } from './articlelist/list/list.component';
import { NeweditsComponent } from './articlelist/newedits/newedits.component';
import { WelcomeComponent } from './articlelist/welcome/welcome.component';


@NgModule({
  declarations: [
    MainComponent,
    ListComponent,
    NeweditsComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MainRoutingModule,
    NzDatePickerModule,
    NzSelectModule,
    NzGridModule,
    NzInputModule,
    NgZorroAntdModule,
    UMeditorModule.forRoot(),
  ]
})
export class MainModule { }
