import {Component, OnInit} from '@angular/core';
import {Storage} from "@ionic/storage";
import {Router} from "@angular/router";
import {PostServiceService} from "../Services/post-service.service";

@Component({
    selector: 'app-aggiungi',
    templateUrl: './aggiungi.page.html',
    styleUrls: ['./aggiungi.page.scss'],
})
export class AggiungiPage implements OnInit {
    value
    Link;
    Nome;
    Descrizione;
    categoria=this.service.categoria;
    userId;
    userTable;
    update = [];
    request;
    url = 'http://backendfindjob.altervista.org/FindJob/public/index.php/caricalavoro';
    url1 = 'http://backendfindjob.altervista.org/FindJob/public/index.php/visualizzacategoriaperid';
    session;
    table;
    ripetipassword;

    constructor(private service: PostServiceService, private storage: Storage, private router: Router) {
//todo select all categoria per menu a tendina
        storage.get('utente').then(data => {

            this.userId = data.id;

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

    postAdd(idcat) {


        let postData = {
            "iddatore": this.userId,
            "nome": this.Nome,
            "descrizione": this.Descrizione,
            "link": this.Link,
            "categoria": this.value
        };
console.log(postData);
        this.service.postService(postData, this.url).then((data) => {
            if (!data.error) {
                alert('caricamento effettuato conb successo');
            } else {
                alert('errore imprevisto');
            }


        }, err => {
            alert('err imprevisto');
            console.log('attendi' + err.message);
        });
    }


}

