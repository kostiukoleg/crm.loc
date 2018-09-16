import { AuthService } from './../shared/services/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
  
export class LoginPageComponent implements OnInit, OnDestroy {

  form: FormGroup;
  aSub: Subscription;

  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute)
  {

  }

  ngOnInit() {
    let body = document.getElementsByTagName('body')[0];
    body.classList.add("bg-dark");

    this.form = new FormGroup(
      {
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [Validators.required, Validators.minLength(6)])
      }
    );

    this.route.queryParams.subscribe(function (params: Params) { 
      if (params['registered']) {

      } else if (params['accessDenied']) { 

      }
    });
  }

  ngOnDestroy() {
    let body = document.getElementsByTagName('body')[0];
    body.classList.remove("bg-dark");
    if (this.aSub) { this.aSub.unsubscribe(); }
  }

  onSubmit() {
    this.form.disable();
    this.aSub = this.auth.login(this.form.value).subscribe(
      function () { 
        this.router.navigate(['/overview']);
      },
      function (error) {
        console.warn(error);
        this.form.enable();
      }
    )
  }
}
