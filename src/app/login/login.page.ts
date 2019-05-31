import {Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs';
import {Storage} from '@ionic/storage';

import {Headers, RequestOptions} from '@angular/http';
import {LoginService} from '../Services/login.service';
import {Router} from "@angular/router";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

import {throwErrorIfNoChangesMode} from "@angular/core/src/render3/errors";
import {promise} from "selenium-webdriver";
import {Promise} from "q";
import {JsonArray} from "@angular-devkit/core";
import {ArrayType} from "@angular/compiler";
import {PostServiceService} from "../Services/post-service.service";


@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


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
            console.log(data);
            this.controllo(!data.error, data);

        }, err => {
            console.log(err.message);
        });

    }

    controllo(condizione, data) {
        if (condizione) {
            this.service.user_Name=data.utente.nome;
            this.service.user_Surname=data.utente.cognome;
            this.service.user_email=data.utente.email;
            this.service.user_id=data.utente.id;
            this.service.user_tabella=data.utente.tabella;

            console.log('false', data);
            this.router.navigate(['/home']);
        } else {
            this.router.navigate(['/login']);
            console.log('false');
        }
    }

}


