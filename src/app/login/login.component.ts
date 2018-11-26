import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from './../services/data.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output() login = new EventEmitter<any>();
  hide = true;

  constructor(private ds: DataService, private http: HttpClient) {}

  ngOnInit() {}

  onProcess(userField: HTMLInputElement, passwordField: HTMLInputElement) {
    // TODO do something with values
    const USER = {
      user: userField.value,
      password: passwordField.value
    };
    // console.log('CREDENTIALS:', USER);
    this.http.post(
      '/login',
      USER,
      httpOptions
    ).subscribe(data => {
      // console.log(data);
      this.login.emit(data);
    });
  }
}
