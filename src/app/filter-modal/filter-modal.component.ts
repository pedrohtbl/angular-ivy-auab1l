import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FilterFormData } from './core/filter-form-data';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.css']
})
export class FilterModalComponent implements OnInit {
  public readonly formFilter = new FormBuilder().group(new FilterFormData());


  constructor() { }

  ngOnInit() {
  }

}