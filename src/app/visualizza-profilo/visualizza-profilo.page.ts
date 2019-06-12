import {Component, OnInit} from '@angular/core';
import {Storage} from "@ionic/storage";
import {Router} from "@angular/router";
import {PostServiceService} from "../Services/post-service.service";

@Component({
    selector: 'app-visualizza-profilo',
    templateUrl: './visualizza-profilo.page.html',
    styleUrls: ['./visualizza-profilo.page.scss'],
})
export class VisualizzaProfiloPage implements OnInit {
    rate;
    rateon = false;
    userName;
    userSurname;
    userEmail;
    userContact;
    lavoriCaricati = [];
    request;
    url = 'http://backendfindjob.altervista.org/FindJob/public/index.php/visualizzaprofilo';
    url2 = 'http://backendfindjob.altervista.org/FindJob/public/index.php/visualizzalavoriperidutente';
    imageurl = ["http://backendfindjob.altervista.org/File/curriculum"+this.service.id+".jpg", "http://backendfindjob.altervista.org/File/curriculum"+this.service.id+"_1.jpg"];
    datore;

    constructor(private service: PostServiceService, private storage: Storage, private router: Router) {

        this.storage.get('session').then(data => {
            if (!data) this.router.navigate(['/login']);
            this.content()
        });


    }
    ionViewWillEnter() {    if (this.service.tablen == 2) {
        console.log(this.service.tablen);
        this.datore = true
    } else {
        this.datore = false;
        console.log(this.service.tablen);
    }}
    content() {

        let postData2 = {

            'id': this.service.id,
            "tabella": this.service.tablen
        };
        console.log(postData2);
        this.service.postService(postData2, this.url).then((data) => {

            this.userName = data.Profilo[0].nome;
            this.userSurname = data.Profilo[0].cognome;
            this.userEmail = data.Profilo[0].email;
            this.userContact = data.Profilo[0].contatto;
            console.log('nomedatore', data);
        }, (err) => {
            console.log('errore', err)
        });
    }

    postLavori() {

        let postData = {
            "id": this.service.id,
        };

        this.service.postService(postData, this.url2).then((data) => {


            for (var i = 0; i < data.lavoro.contatore; i++) {

                this.lavoriCaricati[i] = data.lavoro[i];

            }


        }, err => {
            console.log('attendi' + err.message);
        });

    }

    ngOnInit() {

    }
}