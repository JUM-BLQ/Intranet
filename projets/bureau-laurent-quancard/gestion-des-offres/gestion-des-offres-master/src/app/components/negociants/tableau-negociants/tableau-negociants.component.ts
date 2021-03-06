import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Negociant } from 'src/app/models/Negociant.model';
import { NegociantsService } from 'src/app/services/negociants.service';
import { NegociantListComponent } from '../negociant-list/negociant-list.component';
import { TableauNegociantsDataSource} from './tableau-negociants-datasource';

@Component({
  selector: 'app-tableau-negociants',
  templateUrl: './tableau-negociants.component.html',
  styleUrls: ['./tableau-negociants.component.scss']
})
export class TableauNegociantsComponent extends NegociantListComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Negociant>;
  dataSource: TableauNegociantsDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  // displayedColumns = ['id', 'negociantName', 'source', 'dateDerniereMAJ', 'bSelectionne'];
  displayedColumns = ['id', 'negociantName', 'source', 'dateDerniereMAJ'];

  constructor(protected negociantsService: NegociantsService, private httpClient : HttpClient) {
    super(negociantsService);
    this.dataSource = new TableauNegociantsDataSource(this.httpClient);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  negociantSelectionne!: Negociant

  onSelectionnerLigne(negociant: Negociant) {

    this.onSelectionnerNegociant(negociant.id)
    this.negociantSelectionne = negociant;
    
  }

  onSelectionnerNegociant(idRow: number) {
    this.negociantsService.switchOnOne(idRow);
  }

}
