import { Component, OnInit } from '@angular/core';
import {Storage} from "@ionic/storage";

@Component({
  selector: 'app-accesso',
  templateUrl: './accesso.page.html',
  styleUrls: ['./accesso.page.scss'],
})
export class AccessoPage implements OnInit {

  constructor(private storage:Storage) {
    this.storage.get('session').then(data=>{
      if(data)this.text="username e password correti premi continua per continuare";
        else this.text="username o password errato premi per tornare alla login"
    })
  }

  ngOnInit() {
  }
text
}
