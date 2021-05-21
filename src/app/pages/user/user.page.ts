import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  //user: User = {};
  user: User;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  //Users: Array<User> = new Array<User>();
  users: any = [];

  constructor(private httpClient: HttpClient, private userService: UserService,
              private router: Router, public alertCtrl: AlertController ) { }

  getAllUsers() {
    this.httpClient.get('https://dry-bastion-69323.herokuapp.com/api/users')
      .subscribe((data) => {
        console.log(data);
        this.users = data;
    });
  }

  userDetails(id: number) {
    this.router.navigate(['user-details', id]);
  }

  delete(user: User) {
    this.userService.deleteUser(user.id).subscribe(data => {
      console.log(data);
      this.router.navigate(['/user']);
      this.getAllUsers();
    });
  }

  addUser(user: User) {
    // this.userService.addUser(this.user).subscribe(data => {
    //   console.log(data);
      this.router.navigate(['/user-add']);
      //this.getAllUsers();
    //});
  }

  ngOnInit() {

    //this.users = this.userService.getAllUsers();
    this.getAllUsers();
  }

  clicked() {
    alert('hello');
  }

}
