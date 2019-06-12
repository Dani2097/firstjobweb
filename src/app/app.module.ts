import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {FTP} from '@ionic-native/ftp/ngx'
import { IonicStorageModule } from '@ionic/storage';

import { IonicRatingModule } from "ionic4-rating/dist";
import {FileChooser} from "@ionic-native/file-chooser/ngx";

import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File } from '@ionic-native/file/ngx';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { PdfViewerModule } from 'ng2-pdf-viewer';
@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        PdfViewerModule,
        BrowserModule,
        IonicRatingModule,
        IonicModule.forRoot(),
        IonicStorageModule.forRoot(),
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [
        File,
        FileOpener,
        DocumentViewer,
        FileChooser,
        FTP,
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
