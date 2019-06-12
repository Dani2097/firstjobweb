import {Component, OnInit} from '@angular/core';
import {PostServiceService} from "../Services/post-service.service";

@Component({
    selector: 'app-segnala-profilo',
    templateUrl: './segnala-profilo.page.html',
    styleUrls: ['./segnala-profilo.page.scss'],
})
export class SegnalaProfiloPage implements OnInit {
    nome;
    cognome;
    email;
    url='http://backendfindjob.altervista.org/FindJob/public/index.php/segnalazione';

    emailsegnalato;
    motivo;

    constructor(private service: PostServiceService) {
    }

    ngOnInit() {
    }

    send() {
        let postData = {
            'nome': this.nome,
            'cognome': this.cognome,
            'email': this.email,
            'emailsegnalato': this.emailsegnalato,
            'motivo': this.motivo
        };
        this.service.postService(postData, this.url).then(() => {
            alert('segnalazione inviata correttamente')
        })
    }
}
