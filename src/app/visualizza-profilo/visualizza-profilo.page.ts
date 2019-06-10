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
    rateon=false;
    userName;
    userSurname;
    userEmail;
    userContact;
    lavoriCaricati = [];
    request;
    url = 'http://backendfindjob.altervista.org/FindJob/public/index.php/visualizzaprofilo';
    url2 = 'http://backendfindjob.altervista.org/FindJob/public/index.php/visualizzalavoriperidutente';

    constructor(private service: PostServiceService, private storage: Storage, private router: Router) {

this.storage.get('session').then(data => {
            if (!data) this.router.navigate(['/login']);
            this.content()
        });


    }

    content() {
        let postData2 = {

             'id': this.service.id,
            "tabella": '2'
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
    onRateChange(){
        console.log(this.rate);
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