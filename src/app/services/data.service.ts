import { StorageService } from './storage.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {urls, base} from '../config';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DataService {
  constructor(private http: HttpClient, private storage: StorageService) {}

  getData(table: string) {
    return this.http.get<any[]>(base + table);
  }

  postData(table: string, data: any) {
    return this.http.post(base + table, data, httpOptions);
  }

  putData(table: string, data: any) {
    return this.http.post(base + table, data, httpOptions);
  }

}
