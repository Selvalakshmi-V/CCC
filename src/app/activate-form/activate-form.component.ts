import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material';
import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  joining: string;
  image: string;
  emailId: string;
  company: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Yiorgos Avraamu', company: 'Theme Info', joining: 'Jun 11, 2018', image: '1.jpg', emailId: 'yiorgas@gmail.com' },
  { name: 'Avram Tarasios', company: 'Walmart', joining: 'Jun 11, 2018', image: '2.jpg', emailId: 'tarasios@gmail.com' },
  { name: 'Quintin Ed', company: 'Exxon Mobil', joining: 'Jun 11, 2018', image: '3.jpg', emailId: 'quintin@gmail.com' },
  { name: 'Enéas Kwadwo', company: 'Berkshire Hathaway', joining: 'Jun 11, 2018', image: '4.jpg', emailId: 'kwadwo@gmail.com' },
  { name: 'Friderik Dávid', company: 'Apple Inc.', joining: 'Jun 11, 2018', image: '6.jpg', emailId: 'friderik@gmail.com' },
];

@Component({
  selector: 'app-activate-form',
  templateUrl: './activate-form.component.html',
  styleUrls: ['./activate-form.component.css']
})
export class ActivateFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayedColumns: string[] = ['select', 'name', 'emailId', 'company', 'action'];
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

  aa() {
    console.log('Activated')
  }

}
