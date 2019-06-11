import {Injectable} from '@angular/core';

import {FTP} from "@ionic-native/ftp/ngx";
import {FileChooser} from '@ionic-native/file-chooser/ngx';
import {PostServiceService} from "./post-service.service";

@Injectable({
    providedIn: 'root'
})
export class UploadService {

    constructor(private ftp: FTP, private filechooser: FileChooser, private service:PostServiceService) {
    }
    url = 'http://backendfindjob.altervista.org/FindJob/public/index.php/caricacurriculum';
    connect(id,link) {
        let postData={
            'idrichiedente':id,
            'link':link

        };
        this.ftp.connect('ftp.backendfindjob.altervista.org', 'backendfindjob', 'Tu4sZ5wFy7NG').then(
            (res: any) => {
                console.log('Login successful', res);
                this.filechooser.open()
                    .then(uri => {

                        this.service.postService(postData,this.url).then((data)=>{
                            console.log('in trasferimento',data);
                            }
                        );
                        this.ftp.upload(uri, '/local/curriculum').toPromise().then((d) => {

                            console.log(d)
                        }, err => {
                            console.log(err)

                        });


                        console.log(uri)
                    })
                    .catch(e => console.log(e))

            })
            .catch((error: any) => console.error(error));
    }
}
