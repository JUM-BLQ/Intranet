import { formatDate } from "@angular/common";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Negociant } from "src/app/models/Negociant.model";

// const dateJour = new Date();

  // Décaler de 1 !!!
  // export let dataNegociants: Negociant[] = [];
 export let dataNegociants: Negociant[] = [
   new Negociant(1, 1, 1, "1", "1", new Date(), new Date(), false, [1,2]),
  new Negociant(2, 1, 1, "2", "2", new Date(), new Date(), false, [1]),
   new Negociant(3, 1, 1, "3", "3", new Date(), new Date(), false, [1,2,3])

  //   // new Negociant(1, "1", "1", new Date(), false, [1,2]),
  //   // new Negociant(2, "2", "2", new Date(), false, [1]),
  //   // new Negociant(3, "3", "3", new Date(), false, [1,2,3]),
  //   // new Negociant(4, "4", "4", new Date(), false, [1])
 ];

  // export let dataNegociants: Negociant[] = [];

  // export class DataNegociants implements OnInit {

  //   private negociants: Negociant[] = [];
  //   private apiServeurUrl = `http://127.0.0.1:8080`;

  //   constructor(private httpClient : HttpClient) {}

  //   ngOnInit(): void {
  //     this.getNegociants1();
  //   }

  //   public getNegociants(): Negociant[] {
  //     return this.negociants;
  //   }

  //   public getNegociants1(): void {
    
  //     this.getNegociants2().subscribe(
  //     (response: Negociant[]) => {

  //       console.log( "réponse : " + response);
  //       console.log( "type : " + typeof(response) );

  //       this.negociants = response;
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   )
  // }

  // getNegociants2(): Observable<Negociant[]> {

  //   // AppRoutingModule.apiServeurUrl
  //   // return this.httpClient.get<Negociant[]>( this.apiServeurUrl + `/partenaire/all`, { headers } );
  //   return this.httpClient.get<Negociant[]>( this.apiServeurUrl + `/partenaire/all`);
  // }
// }

    // export let dataNegociants = [
    //   {
    //     id: 1,
    //     negociantName: "1",
    //     source: "1",
    //     dateDerniereMAJ: formatDate(new Date(),'dd/MM/yyyy', 'fr'),
    //     bSelectionne: false,
    //     tableau: [1,2]
    //   },
    //   {
    //     id: 2,
    //     negociantName: "2",
    //     source: "2",
    //     dateDerniereMAJ: formatDate(new Date(),'dd/MM/yyyy', 'fr'),
    //     bSelectionne: false,
    //     tableau: [1,2,3]
    //   },
    //   {
    //     id: 3,
    //     negociantName: "3",
    //     source: "3",
    //     dateDerniereMAJ: formatDate(new Date(),'dd/MM/yyyy', 'fr'),
    //     bSelectionne: false,
    //     tableau: [1,3]
    //   },
    // ];

