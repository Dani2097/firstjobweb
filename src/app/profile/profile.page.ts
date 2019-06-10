import {Component, OnInit} from '@angular/core';
import {PostServiceService} from "../Services/post-service.service";
import {Storage} from '@ionic/storage';
import {Router} from "@angular/router";
import {reject} from "q";
import {UploadService} from "../Services/upload.service";


@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
    categoria = this.service.categoria;
    datore;
    userContact;
    userName;
    userSurname;
    userEmail;
    userId;
    userTable;
    lavoriCaricati = [];
    request;
    url = 'http://backendfindjob.altervista.org/FindJob/public/index.php/visualizzalavoriperidutente';
    session;

    constructor(private service: PostServiceService, private storage: Storage, private router: Router, private uploadFtp: UploadService) {
        this.storage.get('session').then(data2 => {
            if (!data2) this.router.navigate(['/login']);
            storage.get('utente').then(data => {
                this.userName = data.nome;
                this.userSurname = data.cognome;
                this.userEmail = data.email;
                this.userId = data.id;
                this.userContact = data.contatto;
                this.userTable = data.tabella;
                if (this.userTable == 'datore') this.datore = true;
                else this.datore = false;
                console.log(this.datore);
            }, rej => {
                console.log('rejected' + rej);
                this.router.navigate(['/login']);
            });
        });

//


    }

    ngOnInit() {

    }

    upload() {
        this.uploadFtp.connect()
    }

    postLavoriCaricati(id) {

        let postData = {
            "id": this.userId,
        };

        this.service.postService(postData, this.url).then((data) => {

            this.storage.set('lavoro', data);
            for (var i = 0; i < data.lavoro.contatore; i++) {

                this.lavoriCaricati[i] = data.lavoro[i];
            }


        }, err => {
            console.log('attendi' + err.message);
        });

    }


}
