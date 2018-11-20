import { StorageService } from './../services/storage.service';
import {
  Component,
  OnInit,
  Input,
  ViewChild,
  AfterViewInit,
  Output,
  EventEmitter
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit, AfterViewInit {
  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild('sort') sort: MatSort;
  isDataAvailable = false;

  @Output() addClick = new EventEmitter<any>();
  @Output() rowClick = new EventEmitter<any>();

  form = false;
  formData: any;
  method: string;
  table: string;
  data: any[];
  displayedColumns: string[];

  dataSource: MatTableDataSource<any>;
  length: number;
  pageSize: number;

  constructor(
    private DS: DataService,
    private storage: StorageService,
    private route: ActivatedRoute
  ) {
    this.pageSize = 5;
  }

  ngOnInit() {
    this.table = this.route.snapshot.params['table'];
    console.log(this.table);
    this.DS.getData(this.table).subscribe(array => {
      this.data = array;
      this.dataSource = new MatTableDataSource(this.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.length = this.data.length;
      this.displayedColumns = Object.keys(this.data[0]);
      this.isDataAvailable = true;
    });
  }

  ngAfterViewInit(): void {}

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onAddClick() {
    this.formData = Object.assign({}, this.data[0]);
    Object.keys(this.formData).map(key => {
      this.formData[key] = '';
    });
    this.method = 'post';
    this.form = !this.form;
  }
  onRowClick(rowData: any) {
    this.formData = rowData;
    this.method = 'put';
    this.form = !this.form;
  }

  onFormPut(dataObject: any) {
    this.DS.putData(this.table, dataObject).subscribe(data => {
      console.log(data);
      this.data.push(dataObject);
    });
    this.form = !this.form;
    console.log('Form Put', dataObject);
  }
  onFormPost(dataObject: any) {
    dataObject.id = this.data.length;
    this.DS.postData(this.table, dataObject).subscribe(data => {
      console.log(data);
      this.data.push(dataObject);
    });
    this.form = !this.form;
    console.log('Form Post', dataObject);
  }
}
