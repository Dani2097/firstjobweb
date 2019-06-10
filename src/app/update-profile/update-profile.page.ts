import {Component, OnInit} from '@angular/core';
import {Storage} from "@ionic/storage";
import {Router} from "@angular/router";
import {PostServiceService} from "../Services/post-service.service";

@Component({
    selector: 'app-update-profile',
    templateUrl: './update-profile.page.html',
    styleUrls: ['./update-profile.page.scss'],
})
export class UpdateProfilePage implements OnInit {
    password;
    userName;
    userSurname;
    userEmail;
    userId;
    userTable;
    update = [];
    request;
    url = 'http://backendfindjob.altervista.org/FindJob/public/index.php/update';
    session;
    table;
    ripetipassword;

    constructor(private service: PostServiceService, private storage: Storage, private router: Router) {

        storage.get('utente').then(data => {

            this.userId = data.id;
            this.userTable = data.tabella;

            console.log(data.nome);
            console.log(this.userId);
        }, rej => {
            console.log('rejected' + rej);
            this.router.navigate(['/login']);
        });
//


    }

    ngOnInit() {
        this.storage.get('session').then(data => {
            if (!data) this.router.navigate(['/login']);
        });
    }

    postUpdate() {
        if (this.userTable == 'datore') this.table = 2; else this.table = 4;
        console.log('tabella' + this.table);
        if (!(this.password == this.ripetipassword)) alert('le password non coincidono');
        else {
            let postData = {
                "id": this.userId,
                "nome": this.userName,
                "cognome": this.userSurname,
                "email": this.userEmail,
                "password": this.password,
                "tabella":this.table,
                "contatto":'33333'
            };

            this.service.postService(postData, this.url).then((data) => {
                if (!data.error) {
                    if (this.table == 2) postData.tabella = 'datore'; else  postData.tabella = 'richiedente';
                    alert('update effettuato');
                    this.storage.set('utente', postData);
                } else {
                    alert('errore imprevisto');
                }


            }, err => { alert('err imprevisto');
                console.log('attendi' + err.message);
            });
        }
    }


}
