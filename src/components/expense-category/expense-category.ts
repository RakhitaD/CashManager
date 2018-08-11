import { Component, Input } from '@angular/core';

/**
 * Generated class for the ExpenseCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'expense-category',
  templateUrl: 'expense-category.html'
})
export class ExpenseCategoryComponent {
  @Input() category:string;
  text: string;

  constructor() {
    this.text = 'Hello World';
  }

}
