import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  storage = {};
  emitter = {};

  constructor() {
  }

  newStorage(key: string) {
    this.storage[key] = [];
    this.emitter[key] = new EventEmitter<any>();
  }

  push(key: string, data: any) {
    this.storage[key].push(data);
    this.emitter[key].emit(data);
  }

  read(key: string) {
    // return this.storage[key].slice();
    return this.storage[key];
  }
}
