import {Component, OnInit} from '@angular/core';
import {compareNumbers} from "@angular/compiler-cli/src/diagnostics/typescript_version";
import {PostServiceService} from "../Services/post-service.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-lavoripiattaforma',
    templateUrl: './lavoripiattaforma.page.html',
    styleUrls: ['./lavoripiattaforma.page.scss'],
})
export class LavoripiattaformaPage implements OnInit {
    icona;
    value: any;
    categoria = this.service.categoria;
    lavoriCategoria = [];
    url = 'http://backendfindjob.altervista.org/FindJob/public/index.php/visualizzalavoroperidcategoria';

    console($event) {
    }

    ngOnInit() {

    }

    clickWork(id) {
        this.service.workid = id;
        console.log(this.service.workid);
        this.router.navigate(['/work-detail'])

    }

    postLavoriCategoria(id) {
        this.icona=this.categoria[id].icon;
        console.log(id);
        let postData = {
            "idcategoria": id,
        };

        this.service.postService(postData, this.url).then((data) => {
            console.log(data);
            this.lavoriCategoria = [];
            for (var i = 0; i < data.lavoro.contatore; i++) {

                this.lavoriCategoria[i] = data.lavoro[i];
                console.log(this.lavoriCategoria);
            }


        }, err => {
            console.log('attendi' + err.message);
        });

    }


    constructor(private service: PostServiceService, private router: Router) {


    }


}
