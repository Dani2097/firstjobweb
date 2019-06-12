import {Component, OnChanges, OnInit} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {Storage} from "@ionic/storage";
import {Router} from "@angular/router";

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnChanges {
    public appPages = [
        {
            title: 'Home',
            url: '/home',
            icon: 'home'
        },
        {
            title: 'Lavori caricati',
            url: '/lavoricaricati',
            icon: 'briefcase'
        },
        {
            title: 'List',
            url: '/login',
            icon: 'list'
        }
    ];
    linktasto;

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private storage: Storage,
        private nav: Router
    ) {
        this.initializeApp();
        console.log('la sess');

    }

    ngOnChanges() {

    }

    logout() {
        this.storage.set('session', false);
        this.storage.set('utente', null);


//
//
    }

    log;

    initializeApp() {
        this.storage.get('session').then(data => {
            if (data) {
                this.storage.get('utente').then(data => {
                    this.log = 'Logout';
                    this.linktasto = '/home';
                    this.appPages[2] = {
                        title: 'Profile',
                        url: '/profile',
                        icon: 'person'
                    };
                    if (data.tabella=='datore') {
                        console.log('la sessione e: ' + data);

                        this.appPages[1] = {
                            title: 'Richieste ricevute',
                            url: '/lavoricaricati',
                            icon: 'briefcase'
                        };

                    } else {this.appPages[1] = {
                        title: 'Cerca lavoro',
                        url: '/lavoripiattaforma',
                        icon: 'briefcase'
                    };
                    }
                })
            } else {
                this.log = 'Login';
                this.linktasto = '/login';
                console.log('la sessione e: ' + data);
                this.appPages[2] = {
                    title: '',
                    url: '/credits',
                    icon: ''
                };
                this.appPages[1] = {
                    title: 'Contattaci',
                    url: '/credits',
                    icon: 'person'
                };
            }
            this.platform.ready().then(() => {

            });


            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
}
