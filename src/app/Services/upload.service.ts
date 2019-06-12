import {Injectable} from '@angular/core';

import {FTP} from "@ionic-native/ftp/ngx";
import {FileChooser} from '@ionic-native/file-chooser/ngx';
import {PostServiceService} from "./post-service.service";
import {DocumentViewer} from "@ionic-native/document-viewer/ngx";
import {FileOpener} from "@ionic-native/file-opener/ngx";
import {File} from "@ionic-native/file/ngx";

@Injectable({
    providedIn: 'root'
})
export class UploadService {

    constructor(private ftp: FTP, private filechooser: FileChooser, private service: PostServiceService, private doc: DocumentViewer, private fileop: FileOpener ,private file:File) {
    }

    url = 'http://backendfindjob.altervista.org/FindJob/public/index.php/caricacurriculum';

    connect(id, link) {
        let filePath = this.file.applicationDirectory + 'www/assets';
        let postData = {
            'idrichiedente': id,
            'link': link

        };
        // this.file.copyFile(filePath, 'curriculum.pdf', this.file.applicationDirectory, `curriculum.pdf`).then(
        //     result => {
        //     console.log('filecopiato');
        //     this.fileop.open('http://backendfindjob.altervista.org/File/curriculum.pdf', 'application/pdf')
        //     });
        this.ftp.connect('ftp.backendfindjob.altervista.org', 'backendfindjob', 'Tu4sZ5wFy7NG').then(
            (res: any) => {


                console.log('Login successful', res);
                this.filechooser.open()
                    .then(uri => {

                        this.service.postService(postData, this.url).then((data) => {
                                console.log('in trasferimento', data);
                                alert(data.message);
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
