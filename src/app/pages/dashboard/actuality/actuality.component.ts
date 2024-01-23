import {Component, ElementRef, Input, SimpleChanges, ViewChild} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { GamesService } from '../../../services/games.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-actuality',
  standalone: true,
  imports: [RouterModule , MatTableModule, MatPaginatorModule, MatGridListModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule,  MatFormFieldModule,MatInputModule,MatAutocompleteModule,ReactiveFormsModule,AsyncPipe],
  templateUrl: './actuality.component.html',
  styleUrl: './actuality.component.scss'
})
export class ActualityComponent {
  @ViewChild('input') input!: ElementRef;
  displayedColumns: string[] = ['name', 'release', 'nb_player','description', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>();
  myControl = new FormControl('');
  options: string[] = ['Randria', 'Fenitra', 'Mahefa'];
  filteredOptions: string[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  @Input() search: string = '';

  constructor(
    private servicegames:GamesService,
  ) {
    this.filteredOptions = this.options.slice();
    // Fetch data from the service asynchronously
    this.servicegames.getAllGames('').then((data) => {
      this.dataSource.data = data;
      console.log(data);
    })
  }

  filter(): void {
    const filterValue = this.input.nativeElement.value.toLowerCase();
    this.filteredOptions = this.options.filter(o => o.toLowerCase().includes(filterValue));
  }

  makeSearch(): void {
    this.servicegames.getAllGames(this.search).then((data) => {
      this.dataSource.data = data;
    })
  }
}

export interface PeriodicElement {
  name?: string;
  release?: number;
  developer?: string;
  nb_player?: string;
  description?: string;
  rating?: string;
  editor?: string;
}

