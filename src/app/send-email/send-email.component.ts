import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnInit {

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  constructor() { }

  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'Yiorgos Avraamu' },
      { item_id: 2, item_text: 'Avram Tarasios' },
      { item_id: 3, item_text: 'Quintin Ed' },
      { item_id: 4, item_text: 'Enéas Kwadwo' },
      { item_id: 5, item_text: 'Friderik Dávid' }
    ];
    this.selectedItems = [
      { item_id: 3, item_text: 'Quintin Ed' },
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    
  }

  onItemSelect (item:any) {
    console.log(item);
  }
  onSelectAll (items: any) {
    console.log(items);
  }

}
