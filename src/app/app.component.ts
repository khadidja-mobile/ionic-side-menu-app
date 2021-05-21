import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: undefined },
    { title: 'Contact', url: '/contact', icon: undefined },
    { title: 'User', url: '/user', icon: undefined },
    { title: 'Add User', url: '/user-add', icon: undefined },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
