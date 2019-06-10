import {Injectable} from '@angular/core';

import {FTP} from "@ionic-native/ftp/ngx";
import {FileChooser} from '@ionic-native/file-chooser/ngx';
import {FilePath} from "@ionic-native/file-path/ngx";

@Injectable({
    providedIn: 'root'
})
export class UploadService {

    constructor(private ftp: FTP, private filechooser: FileChooser,private path:FilePath) {
    }

    connect() {
        this.ftp.connect('ftp.backendfindjob.altervista.org', 'backendfindjob', 'Tu4sZ5wFy7NG').then(
            (res: any) => {
                console.log('Login successful', res);
                this.filechooser.open()
                    .then(uri => {
                        this.path.resolveNativePath(uri).then((pathData)=>{
                            this.ftp.upload(pathData, '/local/curriculum').toPromise().then((d) => {
                                alert('in trasferimento');
                                console.log(d)
                            }, err => {
                                console.log(err)
                            });
                        },(errorpath)=>{console.log('cannot resolve',errorpath)});


                        console.log(uri)
                    })
                    .catch(e => console.log(e))

            })
            .catch((error: any) => console.error(error));
    }
}
