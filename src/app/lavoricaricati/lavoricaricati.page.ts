import {Component, OnInit} from '@angular/core';
import {PostServiceService} from "../Services/post-service.service";
import {Storage} from '@ionic/storage';



@Component({
    selector: 'app-lavoricaricati',
    templateUrl: './lavoricaricati.page.html',
    styleUrls: ['./lavoricaricati.page.scss'],
})
export class LavoricaricatiPage implements OnInit {

    result;
    url = 'http://localhost/findjob/public/visualizzalavoriperidutente';
    public lavoriCaricati = [];

    constructor(private service: PostServiceService, public storage: Storage) {
    }

    ngOnInit() {
        this.postLavoriCaricati(7);
    }

    postLavoriCaricati(id) {
        let postData = {
            "id": id,
        };
        this.service.postService(postData, this.url).then((data) => {
            this.storage.set('lavoro', data);
            this.elaborate(!data.error, data);

        }, err => {
            console.log(err.message);
        });

    }

    elaborate(controllo, data) {

        if (controllo) {

            this.storage.get('lavoro').then(data => {


                for (var i = 0; i < data.lavoro.contatore; i++) {

                    this.lavoriCaricati[i] = data.lavoro[i];
                }

            });
        }

    }

}
