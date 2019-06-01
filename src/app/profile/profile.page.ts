import {Component, OnInit} from '@angular/core';
import {PostServiceService} from "../Services/post-service.service";
import {Storage} from '@ionic/storage';
import {Router} from "@angular/router";


@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
    userName = this.service.user_Name;
    userSurname = this.service.user_Surname;
    userEmail = this.service.user_email;
    userId = this.service.user_id;
    userTable = this.service.user_tabella;
    lavoriCaricati = [];
    request;
    url = 'http://localhost/findjob/public/visualizzalavoriperidutente';

    constructor(private service: PostServiceService, private storage: Storage ,private router: Router) {
        this.postLavoriCaricati(this.userId);console.log(this.userId);
        if (!service.session) this.router.navigate(['/login']);

    }

    ngOnInit() {

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



        //
        if (controllo) {

            this.storage.get('lavoro').then(data => {
                console.log(data);

                for (var i = 0; i < data.lavoro.contatore; i++) {

                    this.lavoriCaricati[i] = data.lavoro[i];
                }
                console.log('request2', this.request)
            });
        }

    }
}
