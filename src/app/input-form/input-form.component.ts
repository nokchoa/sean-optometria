import { DataService } from './../services/data.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {
  @Input() formData: any;
  @Input() method: string;
  @Output() put = new EventEmitter<any>();
  @Output() post = new EventEmitter<any>();
  fields: string[];
  tempID: number;
  table: string;

  constructor(private ds: DataService) {
  }

  ngOnInit() {
    this.fields = Object.keys(this.formData);
  }

  onProcess() {
    if (this.method === 'put') {
      this.put.emit(this.formData);
    } else if (this.method === 'post') {
      this.post.emit(this.formData);
    }
    console.log('FORM ACTION' + this.method , this.formData);
  }
}
