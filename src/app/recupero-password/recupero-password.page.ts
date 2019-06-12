import {Component, OnInit} from '@angular/core';
import {PostServiceService} from "../Services/post-service.service";

@Component({
    selector: 'app-recupero-password',
    templateUrl: './recupero-password.page.html',
    styleUrls: ['./recupero-password.page.scss'],
})
export class RecuperoPasswordPage implements OnInit {

    constructor(private service: PostServiceService) {
    }

    datore;
    tabella;
    email;
    url = 'http://backendfindjob.altervista.org/FindJob/public/index.php/recupero';

    ngOnInit() {
    }

    InvioEmail() {
        if (this.datore) this.tabella = 2; else this.tabella = 4;
        let postData = {
            'email': this.email,
            'tabella': this.tabella
        };
        this.service.postService(postData,this.url).then((data) => {
            if (data.error)
                alert('errore imprevisto');
            else alert('email inviata');
        });

    }
}