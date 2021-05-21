import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.page.html',
  styleUrls: ['./user-add.page.scss'],
})
export class UserAddPage implements OnInit {
  userForm: FormGroup;
  user: User;
  isSubmitted = false;

  constructor(public formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['']
    });
  }

  add() {
    const userData = {
      username: this.userForm.value.username,
      email: this.userForm.value.email,
      password: this.userForm.value.password
    };
    this.isSubmitted = true;
    if (!this.userForm.valid) {
      console.log('entrer des valeurs');
      return false;
    } else {
      console.log(this.userForm.value);
      this.userService.addUser(userData).subscribe(data => {
        console.log(data);
        this.userService.getAllUsers();
      });
        //this.router.navigate(['/user-add']);
        //this.getAllUsers();
    }
  }

  get errorControl() {
    return this.userForm.controls;
  }

}

