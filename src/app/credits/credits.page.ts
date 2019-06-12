import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.page.html',
  styleUrls: ['./credits.page.scss'],
})
export class CreditsPage implements OnInit {
profili=[{
  titolo:'Danilo Sprovieri',
    facebook:'',
    instagram:'https://www.instagram.com/danilosprovieri/',
    immagine:'https://i.ibb.co/y8dPXt0/42800807-10156640535189417-4768349348595499008-o.jpg'




},{
    titolo:'Nicola Scinocca',
    facebook:'',
    instagram:'https://www.instagram.com/nicolino801/',
    immagine:'https://i.ibb.co/7157YXq/1d38c739-ffa3-41c8-8cd8-7ac8c2c12d00.jpg'

},{
    titolo:'Alessandro Romano',
    facebook:'',
    instagram:'https://www.instagram.com/alessandro____r/',
    immagine:'https://i.ibb.co/vPxYfbw/00163362-2523-464a-9feb-3dc53f0ef25d.jpg'

},{
    titolo:'Errico Carafa',
    facebook:'',
    instagram:'https://www.instagram.com/errico_carafa/',
    immagine:'https://i.ibb.co/swcshTg/ea866dfd-813c-4ce4-aeb1-956540eef153.jpg'

}];
  constructor() { }

  ngOnInit() {
  }

}
