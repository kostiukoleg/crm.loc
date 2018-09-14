import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  constructor() { }

  //Add the class to body tag when the View is initialized
  ngOnInit() {
    let body = document.getElementsByTagName('body')[0];
    body.classList.add("bg-dark");
  }

  //Remove the class from body tag when the View is destroyed
  ngOnDestroy() {
    let body = document.getElementsByTagName('body')[0];
    body.classList.remove("bg-dark");
  }
}
