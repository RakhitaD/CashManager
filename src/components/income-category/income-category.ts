import { Component, Input } from '@angular/core';

/**
 * Generated class for the IncomeCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'income-category',
  templateUrl: 'income-category.html'
})
export class IncomeCategoryComponent {

  text: string;
  @Input() category;

  constructor() {
    console.log('Hello IncomeCategoryComponent Component');
    this.text = 'Hello World';
    console.log(this.category);
  }

}
