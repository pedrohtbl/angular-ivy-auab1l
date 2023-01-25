import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';
import { Subscription } from 'rxjs';
import { crops, cultures, filter, ruralPropertys } from '../dashboard/data';
import { FilterFormData } from './core/filter-form-data';
import { FilterSearchSharedEventsService } from './service/filter-search-shared-events.service';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
})
export class FilterModalComponent implements OnInit {
  public cropSelect: any

  public cultureSelect: any

  public ruralPropertySelect: any

  public readonly formFilter = new FormBuilder().group(new FilterFormData());

  public subscriptions: Subscription[] = [];

  public readonly confirm: PoModalAction = {
    action: () => this.confirmSearch(),
    label: 'Buscar',
  };

  public comboCropService = [
    {value: 1, label: 'crop 1'},
    {value: 2, label: 'crop 2'},
    {value: 3, label: 'crop 3'},
  ]

  public comboCultureService = [
    {value: 1, label: 'culture 1'},
    {value: 2, label: 'culture 2'},
    {value: 3, label: 'culture 3'},
  ]

  public comboRuralPropertyService = [
    {value: 1, label: 'rural property 1'},
    {value: 2, label: 'rural property 2'},
    {value: 3, label: 'rural property 3'},
  ]

  @ViewChild('filterModal', { static: true }) public poModal: PoModalComponent;
  @Output() response: EventEmitter<any> = new EventEmitter();
  constructor(
    public filterSearchSharedEventsService: FilterSearchSharedEventsService
  ) {
    this.subscriptions.push(
      this.filterSearchSharedEventsService.getClickEvent().subscribe(data => {
        this.openModal(data);
      })
    );
  }

  ngOnInit() {
    console.log('init')
  }

  public confirmSearch() {

    this.response.emit(filter({
      crop: this.formFilter.controls.crop.value,
      culture: [this.formFilter.controls.culture.value],
      ruralProperty: [this.formFilter.controls.ruralProperty.value],
    })) 

    this.closeModal()
  }

  public openModal(data: any) {
    this.poModal.open();
  }

  public closeModal() {
    this.resetModal();
    this.poModal.close();
  }

  public resetModal() {
    this.formFilter.controls.culture.setValue([]);
    this.formFilter.controls.crop.setValue(null);
    this.formFilter.controls.ruralProperty.setValue([]);
  }

  public changeCrop() {
    const cropId = this.formFilter.controls.crop.value;
    if (cropId) {
      const cropSelect = crops.find(e => cropId == e.id)

      if (cropSelect) {
        this.cropSelect = cropSelect;

        return cropSelect;
      }
    }
  }

  public changeCulture() {
    const cultureId = this.formFilter.controls.culture.value;
    if (cultureId) {
      const cultureSelect = cultures.find(e => cultureId == e.id)

      if (cultureSelect) {
        this.cultureSelect = cultureSelect;

        return cultureSelect;
      }
    }
  }

  public changeRuralProperty() {
    const ruralPropertyId = this.formFilter.controls.ruralProperty.value;
    if (ruralPropertyId) {
      const ruralPropertySelect = ruralPropertys.find(e => ruralPropertyId == e.id)

      if (ruralPropertySelect) {
        this.ruralPropertySelect = ruralPropertySelect;

        return ruralPropertySelect;
      }
    }
  }
}
