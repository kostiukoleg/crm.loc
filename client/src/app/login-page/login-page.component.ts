import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  
  form: FormGroup
  
  constructor() { }

  //Add the class to body tag when the View is initialized
  ngOnInit() {
    let body = document.getElementsByTagName('body')[0];
    body.classList.add("bg-dark");

    this.form = new FormGroup(
      {
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [Validators.required, Validators.minLength(6)])
      }
    )
  }

  //Remove the class from body tag when the View is destroyed
  ngOnDestroy() {
    let body = document.getElementsByTagName('body')[0];
    body.classList.remove("bg-dark");
  }

  onSubmit() { 
    
  }
}
