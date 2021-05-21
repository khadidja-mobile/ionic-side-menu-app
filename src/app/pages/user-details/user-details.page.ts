import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {
  ionicForm: FormGroup;

  id!: any;
  user!: any;

  constructor(public formBuilder: FormBuilder, private route: ActivatedRoute,
              private userService: UserService, private router: Router) { }

  ngOnInit() {

    this.ionicForm = new FormGroup({
      username: new FormControl()
   });

   this.id = this.route.snapshot.paramMap.get(this.id);

   this.userService.getUser(this.id);

    console.log('user-details');

    //this.user = this.route.snapshot.data['user'];
    //this.id = this.route.snapshot.params['id'];

    // this.userService.getUser(this.id).subscribe(data => {
    //   this.user = data;
    //   console.log(data);
    // });
  }

}
