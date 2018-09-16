import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit, OnDestroy {
  
  form: FormGroup;
  aSub: Subscription;

  constructor(
    private auth: AuthService,
  private router: Router) { }

  //Add the class to body tag when the View is initialized
  ngOnInit() {
    let body = document.getElementsByTagName('body')[0];
    body.classList.add("bg-dark");

    this.form = new FormGroup(
      {
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [Validators.required, Validators.minLength(6)])
      }
    );
  }

  //Remove the class from body tag when the View is destroyed
  ngOnDestroy() {
    let body = document.getElementsByTagName('body')[0];
    body.classList.remove("bg-dark");

    if (this.aSub) { 
      this.aSub.unsubscribe();
    }
  }

  onSubmit() { 
    this.form.disable();
    this.aSub = this.auth.register(this.form.value).subscribe(
      function () { 
        this.router.navigate(['/login'], {
          queryParams: {
            registered: true
          }
        });
      },
      function (error) { 
        console.warn(error);
        this.form.enable();
      }
    );
  }

}
