import { DataService } from './../../services/data.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {
  @Input('formData') formData: any;
  @Output() onSubmit = new EventEmitter<any>();
  fields: string[];
  tempID: number;
  method: string;
  table: string;

  constructor(private ds: DataService) {
  }
  
  ngOnInit() { 
    this.tempID = this.formData.id;
    this.method = this.formData.method;
    this.table = this.formData.table;
    delete this.formData.method;
    delete this.formData.table;
    delete this.formData.id
    this.fields = Object.keys(this.formData);
    this.formData.id = this.tempID;
  }

  onUpload(element: HTMLFormElement): void {
    if (this.method === 'put') {
      this.ds.putData(this.table, this.formData).subscribe(res => {
        this.onSubmit.emit(res);
        console.log("DATA PUT");
        
        
      });
    }
    if (this.method === 'post') {
      this.ds.postData(this.table, this.formData).subscribe(res => {
        this.onSubmit.emit(res)
        console.log("DATA POST");
      });
    }
  }
}
