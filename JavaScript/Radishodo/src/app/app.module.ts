import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ReactiveFormsModule } from '@angular/forms';         // 响应式表单
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';

import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import zh from '@angular/common/locales/zh';


import { LoginComponent } from './login/login.component';
import { PipePipe } from './pipe/pipe.pipe';
import { MainModule } from './main/main.module';
import { AddressService } from '../app/service/address/address.service';
import { HttpService } from '../app/service/http/http.service';
import { GuardGuard } from './guard/guard.guard';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MainModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    HttpService,
    AddressService,
    GuardGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
