import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

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
