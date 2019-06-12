import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Promise} from "q";

@Injectable({
    providedIn: 'root'
})
export class PostServiceService {
    workid;
    id;
    table;
    tablen;
    user_Name = '';
    user_Surname = '';
    user_id;
    user_email = '';
    user_tabella;
    session;
urlimg;
    constructor(public http: HttpClient) {
    }

    postService(body, url): Promise<any> {
        return Promise((res, rej) => {
            this.http.post<any>(url, body)
                .subscribe(data => {
                    res(data);
                    rej(data.error);
                });
        });
    }
    deleteService( url,body): Promise<any> {
        return Promise((res, rej) => {
            this.http.delete<any>(url,body)
                .subscribe(data => {
                    res(data);

                });
        });
    }
    categoria = [{
        value: 0,
        name: 'scegli una categoria',
        icon:'book'
    }, {
        value: 1,
        name: 'Elettronica',
        icon: 'build'
    }, {
        value: 2,
        name: 'Lavoro',
        icon: 'person'
    }, {
        value: 3,
        name: 'Sport',
        icon: 'basketball'
    }, {
        value: 4,
        name: 'Agricoltura e ambiente',
        icon: 'flower'
    }, {
        value: 5,
        name: 'Cultura',
        icon: 'ball'
    }, {
        value: 6,
        name: 'Finanza',
        icon: 'ball'
    }, {
        value: 7,
        name: 'Formazione',
        icon: 'ball'
    }, {
        value: 8,
        name: 'Impresa ',
        icon: 'ball'
    }, {
        value: 9,
        name: 'Sanita',
        icon: 'ball'
    }, {
        value: 10,
        name: 'it e media',
        icon: 'ball'
    }, {
        value: 11,
        name: 'Turismo ',
        icon: 'ball'
    }
    ];
}