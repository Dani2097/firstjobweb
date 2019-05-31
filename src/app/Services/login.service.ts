import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {catchError, map, tap} from "rxjs/operators";
import {Promise} from "q";

export enum SearchType {

}

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    url = 'http://localhost/findjob/public/login';

    constructor(public http: HttpClient) {
    }

    postService(body, url): Promise<any> {
        return new Promise((res, rej) => {
            this.http.post<any>(url, body)
                .subscribe(data => {
                    res(data);
                    rej(data.error);
                });
        });

    }
}
