import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { NewUserComponent } from './auth/components/new-user/new-user.component';
import { UserListComponent } from './auth/components/user-list/user-list.component';
import { AppareilViewComponent } from './components-ancients/appareil-view/appareil-view.component';
import { EditAppareilComponent } from './components-ancients/edit-appareil/edit-appareil.component';
import { SingleAppareilComponent } from './components-ancients/single-appareil/single-appareil.component';
import { FenetreDeTestComponent } from './fenetres/fenetre-de-test/fenetre-de-test.component';
import { FourOhFourComponent } from './fenetres/four-oh-four/four-oh-four.component';
import { NouveauxTarifsComponent } from './fenetres/nouveaux-tarifs/nouveaux-tarifs.component';

const routes: Routes = [
  { path: 'appareils', component: AppareilViewComponent },
  { path: 'appareils/:id', component: SingleAppareilComponent },
  { path: 'edit', component: EditAppareilComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: AuthComponent },
  { path: 'users', component: UserListComponent },
  { path: 'new-user', component: NewUserComponent },

  { 
    path: 'nouveaux-tarifs', 
    component: NouveauxTarifsComponent,
    data:  { title: 'Nouveaux tarifs' }
  },
  // { path: 'tableau-offres', component: TableauOffresComponent },

  { path: 'fenetre-test', component: FenetreDeTestComponent },

  //Mettre toujours cette partie à la fin
  { path: 'not-found', component: FourOhFourComponent},
  { path: '**', redirectTo: 'not-found'}
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})



export class AppRoutingModule {
  static apiServeurUrl = `http://127.0.0.1:8080`;
}
