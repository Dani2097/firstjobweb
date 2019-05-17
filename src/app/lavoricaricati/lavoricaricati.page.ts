import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lavoricaricati',
  templateUrl: './lavoricaricati.page.html',
  styleUrls: ['./lavoricaricati.page.scss'],
})
export class LavoricaricatiPage implements OnInit {
    public lavoriCaricati = [
        {
            title: '  Elettrauto',
            note: 'cerco elettrauto qualificato per lavorare in officina e aiutare la famiglia ad ottemperaare ai propri compiti lavorativi',
            icon: 'home',
            categoria:'Meccanico'
        },
        {
            title: '  Lavori caricati',
            note: 'cerco lavoratori per aiutarmi a trovare lavoro in un mondo in cui i lavoratori non trovano lavoro',
            icon: 'briefcase',
            categoria:'Lavoro'
        },
        {
            title: '  Segretaria qualificata',
            note: 'cercasi segretaria qualificata per aziende con anni di esperienza',
            icon: 'list',
            categoria:'Ufficio'
        }
    ];

  constructor() { }

  ngOnInit() {
  }

}
