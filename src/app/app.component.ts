import { environment } from './../environments/environment';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Optometria';
  links = environment.routes;
  login = false;

  onLogin(user: any) {
    console.log(user);
    // console.log(this.links);
    this.links = this.links.filter(link => link.rol === user.type);
    // console.log(this.links);
    this.login = true;
  }
}
