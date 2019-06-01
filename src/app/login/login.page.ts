import {Component, OnInit} from '@angular/core';


import {Router} from "@angular/router";

import {Promise} from "q";

import {PostServiceService} from "../Services/post-service.service";


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
    url = 'http://localhost/findjob/public/login';

    constructor(private service: PostServiceService, private router: Router) {
    }

    ngOnInit() {
    }

    postLogin() {

        let postData = {
            "email": this.username,
            "password": this.password
        };

        this.result = this.service.postService(postData, this.url).then((data) => {
            this.request = data;
            console.log(data.error);
            this.controllo(!data.error, data);
            if (this.click = true) this.router.navigate(['/home']);
            else this.router.navigate(['/login']);
        }, err => {
            console.log(err.message);
        });

    }

    controllo(condizione, data) {
        if (condizione) {
            this.service.user_Name = data.utente.nome;
            this.service.user_Surname = data.utente.cognome;
            this.service.user_email = data.utente.email;
            this.service.user_id = data.utente.id;
            this.service.user_tabella = data.utente.tabella;
            this.service.session = true;
            console.log('false', data);
            this.click = true;

        } else {
            this.router.navigate(['/login']);
            console.log('false');
        }
    }

}


