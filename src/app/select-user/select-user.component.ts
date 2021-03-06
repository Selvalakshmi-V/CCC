import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


export interface PeriodicElement {
  name: string;
  position: number;
  joining: string;
  symbol: number;
  image: string;
  reports: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Yiorgos Avraamu', joining: 'Jun 11, 2018', reports: 5, symbol: 5000, image: '1.jpg' },
  { position: 2, name: 'Avram Tarasios', joining: 'Jun 11, 2018', reports: 9, symbol: 9000, image: '2.jpg' },
  { position: 3, name: 'Quintin Ed', joining: 'Jun 11, 2018', reports: 7, symbol: 7000, image: '3.jpg' },
  { position: 4, name: 'Enéas Kwadwo', joining: 'Jun 11, 2018', reports: 8, symbol: 8000, image: '4.jpg' },
  { position: 5, name: 'Friderik Dávid', joining: 'Jun 11, 2018', reports: 10, symbol: 10000, image: '6.jpg' },
];


@Component({
  selector: 'app-select-user',
  templateUrl: './select-user.component.html',
  styleUrls: ['./select-user.component.css']
})
export class SelectUserComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  goToNext() {
    this.router.navigate(['/sendOffer']);
  }

}
