import { Component, OnInit } from '@angular/core';
import { DataService } from './../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;

  constructor(private ds: DataService) {}

  ngOnInit() {}

  onProcess(userField: HTMLInputElement, passwordField: HTMLInputElement) {
    // TODO do something with values
    console.log(userField.value);
    console.log(passwordField.value);
  }
}
