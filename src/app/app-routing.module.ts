import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'registration', loadChildren: './registration/registration.module#RegistrationPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'update-profile', loadChildren: './update-profile/update-profile.module#UpdateProfilePageModule' },
  { path: 'lavoricaricati', loadChildren: './lavoricaricati/lavoricaricati.module#LavoricaricatiPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'accesso', loadChildren: './accesso/accesso.module#AccessoPageModule' },
  { path: 'aggiungi', loadChildren: './aggiungi/aggiungi.module#AggiungiPageModule' },
  { path: 'lavoripiattaforma', loadChildren: './lavoripiattaforma/lavoripiattaforma.module#LavoripiattaformaPageModule' },
  { path: 'work-detail', loadChildren: './work-detail/work-detail.module#WorkDetailPageModule' },
  { path: 'visualizza-profilo', loadChildren: './visualizza-profilo/visualizza-profilo.module#VisualizzaProfiloPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
