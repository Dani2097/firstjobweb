import {Component, OnInit} from '@angular/core';
import {PostServiceService} from "../Services/post-service.service";
import {Storage} from "@ionic/storage";
import {Router} from "@angular/router";

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

    constructor(private service: PostServiceService, private storage: Storage, private router: Router) {
    }

    ngOnInit() {
        this.postLavoro();
    }

    clickDatore() {
        this.service.table = 2;
        this.service.id = this.lavoro.datore;
        this.router.navigate(['/visualizza-profilo']);
    }

    clickRichiesta() {
        this.storage.get('utente').then(data => {

            let postData3 = {
                "iddatore": this.lavoro.datore,
                "idlavoro": this.service.workid,
                "idrichiedente": data.id

            };
            this.service.postService(postData3, this.url3).then((data2) => {

                alert('Richiesta inviata');
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
