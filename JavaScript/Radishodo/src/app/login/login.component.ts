import { Component, OnInit } from '@angular/core';
import { FormArray, Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from '../service/http/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private name: any;
  private loginForm: FormGroup;
  private pwd: any;
  constructor(
      private fb: FormBuilder,
      private router: Router,
      private Http: HttpService
      ) {}


    onSubmit() {}

    loginIn() {
        const obj = {
        name : this.loginForm.controls.name.value,
        pwd : this.loginForm.controls.pwd.value
        };
        this.Http.loginIn(obj).subscribe((res: any) => {
            console.log(res.code);
            console.log(res.data);
            console.log(res.message);
            if (res.code === 0) {
                window.sessionStorage.setItem('login_message', JSON.stringify(res.message));
                window.sessionStorage.setItem('SignInStatus', JSON.stringify(res.data));
                this.router.navigate(['main']);
            }
        });
    }

  ngOnInit() {
    this.loginForm = this.fb.group({
      name: [this.name],
      pwd: [this.pwd]
  });
  }




}
