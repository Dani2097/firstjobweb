import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LavoripiattaformaPage } from './lavoripiattaforma.page';

const routes: Routes = [
  {
    path: '',
    component: LavoripiattaformaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LavoripiattaformaPage]
})
export class LavoripiattaformaPageModule {}
