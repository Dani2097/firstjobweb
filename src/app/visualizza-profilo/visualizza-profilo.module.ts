import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {VisualizzaProfiloPage} from './visualizza-profilo.page';
import {IonicRatingModule} from "ionic4-rating/dist";

const routes: Routes = [
    {
        path: '',
        component: VisualizzaProfiloPage
    }
];

@NgModule({
    imports: [
        IonicRatingModule,
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [VisualizzaProfiloPage]
})
export class VisualizzaProfiloPageModule {
}
