import {Component, OnInit} from '@angular/core';
import {PostServiceService} from "../Services/post-service.service";
import {Promise} from "q";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Storage} from "@ionic/storage";

@Component({
    selector: 'app-registration',
    templateUrl: './registration.page.html',
    styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
    ripetipassword;
    check;
    table;
    nome;
    cognome;
    contatto;
    username = '';
    password = '';
    request: Promise<any>;
    result: Promise<any>;
    url = 'http://backendfindjob.altervista.org/FindJob/public/index.php/registrazione';

    constructor(private service: PostServiceService, private router: Router) {
    }

    ngOnInit() {
    }

    postRegistrazione() {
        if (this.check) this.table = 2; else this.table = 4;
        let postData = {
            "nome": this.nome,
            "cognome": this.cognome,
            "table": this.table,
            "contatto": this.contatto,
            "email": this.username,
            "password": this.password

        };
        if (!(this.password == this.ripetipassword)) alert('le password non coincidono');
        else {
            this.result = this.service.postService(postData, this.url).then((data) => {
                this.request = data;
                console.log(data.error);


            }, err => {
                console.log(err.message);
            });
            this.router.navigate(['/login']);
        }
    }

}
