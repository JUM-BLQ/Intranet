import { formatDate } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ROUTES } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { AppRoutingModule } from '../app-routing.module';
import { Negociant } from '../models/Negociant.model';
import { OffresService } from './offres.service';
import { dataNegociants } from '../components/negociants/tableau-negociants/dataNegociants';

// const httpOptions : any = {
//   headers: new HttpHeaders(
//     {
//       //'Content-Type':  'application/json',
//       'Access-Control-Allow-Headers': 'Content-Type',
//       'Access-Control-Allow-Methods': 'GET',
//       'Access-Control-Allow-Origin': '*'
//     }
//   )
// };

// const headers = new HttpHeaders()
//   .append('Content-Type', 'application/json')
//   .append('Access-Control-Allow-Headers', 'Content-Type')
//   .append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
//   .append('Access-Control-Allow-Origin', '*')
//   .append('Authorization', 'my-auth-token');

@Injectable({
  providedIn: 'root'
})
export class NegociantsService {

  // private negociants = dataNegociants
  // Doit être sous forme de tableau
  // negociants = this.getNegociants();
  // negociants = DataClasseNegociants.dataNegociants;
  // negociants: Negociant[] = new DataNegociants(this.httpClient).getNegociants();
  negociants: Negociant[] = dataNegociants;

  negociantsSubject = new Subject<Negociant[]>();

  private apiServeurUrl = `http://127.0.0.1:8080`;

  constructor(private offresService: OffresService, private httpClient: HttpClient) { }

  // Opération de CRUD : Affiche, Ajoute, Modifie, Supprime

  // getNegociants(): Observable<Negociant[]> {
  //   return this.httpClient.get<Negociant[]>(`${this.apiServeurUrl}/stock_offres/all`);
  // }

  // getNegociants(): Observable<Negociant[]> {

  //   // AppRoutingModule.apiServeurUrl
  //   // return this.httpClient.get<Negociant[]>( this.apiServeurUrl + `/partenaire/all`, { headers } );
  //   return this.httpClient.get<Negociant[]>( this.apiServeurUrl + `/partenaire/all`);
  // }

  // addNegociant(negociant : Negociant): Observable<Negociant> {
  //   return this.httpClient.post<Negociant>(`${this.apiServeurUrl}/negociant/add`, negociant);
  // }

  // updateNegociant(negociant : Negociant): Observable<Negociant> {
  //   return this.httpClient.put<Negociant>(`${this.apiServeurUrl}/negociant/update`, negociant);
  // }

  // deleteNegociant(negociantId : number): Observable<void> {
  //   return this.httpClient.get<void>(`${this.apiServeurUrl}/negociant/delete/${negociantId}`);
  // }

  getNegociantById(id: number){
    const negociant = this.negociants.find(
        (negociantObject: { id: number; }) => {
          return negociantObject.id === id;
        }
    );
    return negociant;
  }

  switchOnAll(){
    for(let negociant of this.negociants) {
      negociant.bSelectionne = true,

      negociant.tableauOffres.forEach((element: number) => {
        this.offresService.getOffreById(element)?.setBSelectionne(true)
      });

    }
    this.emitNegociantsSubject;
  }

  switchOffAll(){
    for(let negociant of this.negociants) {

      negociant.tableauOffres.forEach((element: number) => {
        this.offresService.getOffreById(element)?.setBSelectionne(false)
      });

      negociant.bSelectionne = false,
        this.emitNegociantsSubject;
    }
  }

  switchOnOne(index : number) {
    this.switchOffAll();
    this.negociants[index].bSelectionne = true,
    this.emitNegociantsSubject;

    this.negociants[index].tableauOffres.forEach((element: number) => {
      this.offresService.getOffreById(element)?.setBSelectionne(true)
    });

  }

  switchOffOne(index : number) {
    this.negociants[index].bSelectionne = false,
    this.emitNegociantsSubject;
  }

  emitNegociantsSubject() {
     this.negociantsSubject.next(this.negociants.slice());
  }

  saveNegociantsToServer() {
    this.httpClient
    .post('https://gestion-des-offres-default-rtdb.europe-west1.firebasedatabase.app//negociants', this.negociants)
    .subscribe(
      () => {
        console.log('Enregistrement terminé !');
      },
      (error) => {
        console.log('Erreur de sauvegarde ! ' + error);
      }
    )
  }


  

}
