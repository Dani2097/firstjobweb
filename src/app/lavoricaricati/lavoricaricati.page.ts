import {Component, OnInit} from '@angular/core';
import {PostServiceService} from "../Services/post-service.service";
import {Storage} from '@ionic/storage';
import {Router} from "@angular/router";
import {AlertController} from "@ionic/angular";


@Component({
    selector: 'app-lavoricaricati',
    templateUrl: './lavoricaricati.page.html',
    styleUrls: ['./lavoricaricati.page.scss'],
})
export class LavoricaricatiPage implements OnInit {
    lavoronome = [];
    richiedentenome = [];
    result;
    idutente;
    url = 'http://backendfindjob.altervista.org/FindJob/public/index.php/visualizzarichiesteperdatore';
    url2 = 'http://backendfindjob.altervista.org/FindJob/public/index.php/visualizzalavoriperid';
    url3 = 'http://backendfindjob.altervista.org/FindJob/public/index.php/visualizzaprofilo';
    url4 = 'http://backendfindjob.altervista.org/FindJob/public/index.php/rimuovirichiesta/';
    public Richieste = [{
        'richiedente': 0,
        'lavoro': 0,
    }];

    constructor(private service: PostServiceService, public storage: Storage, public router: Router, public alert: AlertController) {
        this.storage.get('utente').then(data => {
            this.idutente = data.id;
            this.postLavoriCaricati(data.id);
        });
    }

    dopoelimina() {
        this.storage.get('richieste').then(data => {


            for (var i = 0; i < data.richieste.contatore; i++) {
                let cont = i;
                console.log('le richieste nello spazio', data);
                if (data.richieste[i].visualizzata == 0)
                    this.Richieste[i] = data.richieste[i];
                this.postNomeLavoro(i);
                let postData2 = {
                    "id": this.Richieste[i].richiedente,
                    "tabella": 4
                };
                this.service.postService(postData2, this.url3).then((data3) => {
                    this.richiedentenome[cont] = data3.Profilo[0];

                    console.log('richiedente', this.richiedentenome, postData2, data3)
                    this.router.navigate(['/home']);
                }, err => {
                    console.log(err.message);
                });
            }


        });
    }

    ionViewWillEnter() {
        this.storage.get('utente').then(data => {
            this.idutente = data.id;
            this.postLavoriCaricati(data.id);
        });


    }

    presentConfirm(i) {
        let id = i;
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
                        this.clickelimina(id);

                    }
                }
            ]
        }).then(alert => {
            alert.present()
        });

    }

    clickelimina(id) {
        this.storage.set('richieste', '');
        let deleteData = {
            'id': id
        };
        let url = this.url4 + id;
        console.log(url);
        this.service.deleteService(url, deleteData).then(data => {


                let postData = {
                    "id": this.idutente,
                };

                this.service.postService(postData, this.url).then((data) => {
                    this.storage.set('richieste', data).then((data2) => {

                            console.log('i dati sono', data);
                            this.elaborate(!data.error, data);
                            this.dopoelimina();

                        }
                    );


                }, err => {
                    console.log(err.message);
                });


            }
        );


    }

    ngOnInit() {


    }

    postLavoriCaricati(id) {
        let postData = {
            "id": id,
        };

        this.service.postService(postData, this.url).then((data) => {
            this.storage.set('richieste', data);
            this.elaborate(!data.error, data);


        }, err => {
            console.log(err.message);
        });

    }

    elaborate(controllo, data) {
        this.Richieste = [];
        if (controllo) {

            this.storage.get('richieste').then(data => {


                for (var i = 0; i < data.richieste.contatore; i++) {
                    let cont = i;
                    console.log(data);
                    this.Richieste[i] = data.richieste[i];
                    this.postNomeLavoro(i);
                    let postData2 = {
                        "id": this.Richieste[i].richiedente,
                        "tabella": 4
                    };
                    this.service.postService(postData2, this.url3).then((data3) => {
                        this.richiedentenome[cont] = data3.Profilo[0];

                        console.log('richiedente', this.richiedentenome, postData2, data3)

                    }, err => {
                        console.log(err.message);
                    });
                }


            });
        }

    }

    lavoroClick(i) {
        this.service.workid = i;

        this.router.navigate(['/work-detail'])
    }

    richiedenteClick(i) {
        this.service.table = 4;
        this.service.id = i;

        this.router.navigate(['/visualizza-profilo'])
    }


    postNomeLavoro(i) {
        let postData = {
            "id": this.Richieste[i].lavoro,
        };
        this.service.postService(postData, this.url2).then((data2) => {
            this.lavoronome[i] = data2.lavori[0];
            console.log(this.lavoronome)

        }, err => {
            console.log(err.message);
        });
    }

}
