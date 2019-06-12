import {Component, OnInit} from '@angular/core';
import {PostServiceService} from "../Services/post-service.service";
import {Storage} from "@ionic/storage";
import {Router} from "@angular/router";
import {Alert} from "selenium-webdriver";
import {AlertController} from "@ionic/angular";

@Component({
    selector: 'app-work-detail',
    templateUrl: './work-detail.page.html',
    styleUrls: ['./work-detail.page.scss'],
})
export class WorkDetailPage implements OnInit {
    lavoro;
    nomeDatore;
    url = 'http://backendfindjob.altervista.org/FindJob/public/index.php/visualizzalavoriperid';
    url2 = 'http://backendfindjob.altervista.org/FindJob/public/index.php/visualizzaprofilo';
    url3 = 'http://backendfindjob.altervista.org/FindJob/public/index.php/nuovarichiesta';
    url4 = 'http://backendfindjob.altervista.org/FindJob/public/index.php/rimuovilavoro/';
    sedatore = false;
    check;

    constructor(private service: PostServiceService, private storage: Storage, private router: Router, private alert: AlertController) {
        this.storage.get('utente').then((data) => {
            // console.log(data);console.log(data.tabella);
            if (data.tabella == 'datore') {
                this.sedatore = true
            } else this.sedatore = false
        });
        this.postLavoro();
    }

    ngOnInit() {
        this.postLavoro();
    }

    clickDatore() {
        this.service.tablen = 2;
        this.service.id = this.lavoro.datore;
        this.router.navigate(['/visualizza-profilo']);
    }

    presentConfirm() {
        let id = this.lavoro.id;
        let alert = this.alert.create({
            message: 'Vuoi davvero cancellare questa richiesta?',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: () => {

                        console.log('Cancel clicked');

                    }
                },
                {
                    text: 'Si',
                    handler: () => {
                        this.clickelimina(this.service.workid);

                    }
                }
            ]
        }).then(alert => {
            alert.present()
        });

    }

    clickelimina(id) {

        let deleteData = {
            'id': id
        };
        let url = this.url4 + id;
        console.log(url);
        this.service.deleteService(url, deleteData).then(data => {
            this.router.navigate(['/home'])
        });
    }

    clickRichiesta() {
        this.storage.get('utente').then(data => {

            let postData3 = {
                "iddatore": this.lavoro.datore,
                "idlavoro": this.service.workid,
                "idrichiedente": data.id

            };
            this.service.postService(postData3, this.url3).then((data2) => {
                console.log(data2.error);
                this.check = data2.error;
                if (this.check) {
                    alert('Puoi avere solo una richiesta per volta in sospeso');
                } else {
                    alert('Richiesta inviata');
                }
            });

        })

    }

    postLavoro() {
        console.log(this.service.workid);
        let postData = {
            "id": this.service.workid,

        };

        this.service.postService(postData, this.url).then((data) => {
            console.log(data);


            this.lavoro = data.lavori[0];
            let postData2 = {
                'id': this.lavoro.datore,
                "tabella": '2'
            };
            console.log(postData2);
            this.service.postService(postData2, this.url2).then((data2) => {

                this.nomeDatore = data2.Profilo[0].cognome + ' ' + data2.Profilo[0].nome;


            }, (err) => {
                console.log('errore', err)
            });

        }, err => {
            console.log('attendi' + err.message);
        });

    }
}
