import { Component } from '@angular/core';

export interface Country {
  id: number,
  name: string
}

@Component({
  selector: 'app-multi-choice',
  templateUrl: './multi-choice.component.html',
  styleUrls: ['./multi-choice.component.css']
})
export class MultiChoiceComponent {

  selected: Country[] = [];

  country: Country[] = [];

  ngOnInit() {
    this.country = [
      { id: 1, name: 'Serbia' },
      { id: 2, name: 'Canada' },
      { id: 3, name: 'Italy' },
      { id: 4, name: 'France' },
      { id: 5, name: 'Japan' },
      { id: 6, name: 'Turkey' },
    ];
  }
}
