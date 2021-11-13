import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  users: any;
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {}

  getUsers(): void {
    this.users = this.usersService.getUsers();
    console.log(this.users);
  }
}
