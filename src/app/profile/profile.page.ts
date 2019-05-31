import { Component, OnInit } from '@angular/core';
import {PostServiceService} from "../Services/post-service.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userName=this.service.user_Name;
    userSurname=this.service.user_Surname;
    userEmail=this.service.user_email;
    userId=this.service.user_id;
    userTable=this.service.user_tabella;
  constructor(private service: PostServiceService) {
  }

  ngOnInit() {
    console.log(this.userEmail+' '+this.userId+' '+this.userName)
  }

}
