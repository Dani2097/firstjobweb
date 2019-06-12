import {Component, OnInit} from '@angular/core';
import {PostServiceService} from "../Services/post-service.service";
import {Storage} from '@ionic/storage';
import {Router} from "@angular/router";
import {reject} from "q";
import {UploadService} from "../Services/upload.service";
import {AlertController} from "@ionic/angular";


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
    url2 = 'http://backendfindjob.altervista.org/FindJob/public/index.php/rimuovirichiestaperrichiedente/';
    session;
    imageurl = ["http://backendfindjob.altervista.org/File/curriculum" + this.userId + ".jpg", "http://backendfindjob.altervista.org/File/curriculum" + this.userId + "_1.jpg"];
    pageindex;
    pagemax;
    ready;
    url3;

    clicklavoro(id) {
        this.service.workid = id;
        this.lavoriCaricati = [];
        this.router.navigate(['/work-detail']);

    }

    constructor(private service: PostServiceService, private storage: Storage, private router: Router, private uploadFtp: UploadService,private alert:AlertController) {
        this.lavoriCaricati = [];
        this.storage.get('session').then(data2 => {
            if (!data2) this.router.navigate(['/login']);
            storage.get('utente').then(data => {
                this.userName = data.nome;
                this.userSurname = data.cognome;
                this.userEmail = data.email;
                this.userId = data.id;
                this.userContact = data.contatto;
                this.userTable = data.tabella;
                this.url3 = this.url2 + this.userId
                this.imageurl = ["http://backendfindjob.altervista.org/File/curriculum" + this.userId + ".jpg", "http://backendfindjob.altervista.org/File/curriculum" + this.userId + "_1.jpg"];

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

    ngOnDestroy() {
        this.lavoriCaricati = [];
    }

    ngOnInit() {

    }

    upload() {

        this.uploadFtp.connect(this.userId, 'http://backendfindjob.altervista.org/File/curriculum' + this.userId);
        this.ready = true;
    }

    upload2pagine() {
        this.uploadFtp.connect(this.userId, 'http://backendfindjob.altervista.org/File/curriculum' + this.userId + 1)
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

    rimuoviRichiesta() {

        let
            alert = this.alert.create({
                message: 'Vuoi davvero cancellare la richiesta in sospeso?',
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        handler: () => {


                        }
                    },
                    {
                        text: 'Si',
                        handler: () => {
                            this.service.deleteService(this.url3, this.userId).then((data3) => {
                                console.log(data3);
                                console.log(this.url3);
                            });


                        }
                    }
                ]
            }).then(alert => {
                alert.present()
            });
    }
}


