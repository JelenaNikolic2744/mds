import { Component } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

export interface Country {
  id: number,
  name: string
}

@Component({
  selector: 'app-multi-choice2',
  templateUrl: './multi-choice2.component.html',
  styleUrls: ['./multi-choice2.component.css']
})
export class MultiChoice2Component {
  country: Country[] = [];
  dropdownSettings: IDropdownSettings = {};
  selectedCountries: Country[] = [];

  ngOnInit() {
    this.country = [
      { id: 1, name: 'Serbia' },
      { id: 2, name: 'Canada' },
      { id: 3, name: 'Italy' },
      { id: 4, name: 'France' },
      { id: 5, name: 'Japan' },
      { id: 6, name: 'Turkey' },
    ];
    this.dropdownSettings = {
      idField: 'id',
      allowSearchFilter: true,
      textField: 'name',
    };
  }
}
