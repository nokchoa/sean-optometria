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
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  isDataAvailable = false;

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
    this.storage.newStorage(this.table);
    this.DS.getData(this.table).subscribe(data => {
      data.map(value => {
        this.storage.push(this.table, value);
      });
    });
    this.storage.emitter[this.table].subscribe(data => {
      this.dataSource.data.push(data);
    });
    this.dataSource = new MatTableDataSource(this.storage.read(this.table));
    this.length = this.dataSource.data.length;
    this.displayedColumns = Object.keys(this.dataSource.data[0]);
    this.isDataAvailable = true;
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onAddClick() {}
  onRowClick(rowData: any) {

  }
}
