import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  name = 'MONJI';
  imageURL = './../../assets/images/sign in.png';
  booksList = [];
  userList: any[] = [];
  myCondition = true;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      (result) => {
        this.userList = result;
      },
      (Error) => {
        console.log(Error);
      }
    );
  }

  hello(myname: string) {
    alert('Hello' + myname);
  }
}
