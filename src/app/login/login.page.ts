import {Component, OnInit} from '@angular/core';

import {Storage} from '@ionic/storage';
import {Router} from "@angular/router";

import {Promise} from "q";

import {PostServiceService} from "../Services/post-service.service";
import {NavController} from "@ionic/angular";


@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    click = false;
    username = '';
    password = '';
    request: Promise<any>;
    result: Promise<any>;
    url = 'http://backendfindjob.altervista.org/FindJob/public/index.php/login';

    constructor(private service: PostServiceService, private router: Router, private storage: Storage, private navctrl: NavController) {
    }

    ngOnInit() {
    }

    postLogin() {
        if (this.password.length > 8) {
            alert('password troppo corta');
        } else {
            let postData = {
                "email": this.username,
                "password": this.password
            };

            this.result = this.service.postService(postData, this.url).then((data) => {
                this.request = data;
                console.log(data.error);

                this.controllo(!data.error, data);

            }, err => {
                console.log(err.message);
            });
        }
    }

    controllo(condizione, data) {
        if (condizione) {

            this.storage.set('utente', data.utente);
            this.storage.set('session', true);
            console.log('false', data);
            this.click = true;

            this.storage.set('session', true);
            this.storage.get('session').then(data => {
                this.storage.set('session', true);
                console.log('login ha settato bene' + data)
            });
            this.router.navigateByUrl('/accesso');
        } else {
            console.log('fmerdaalse');

        }
    }

}


